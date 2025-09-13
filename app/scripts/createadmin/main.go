package main

import (
	"crypto/sha256"
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB

type users struct {
	id        int
	name      string
	password  string
	authority string
}

func crypt() string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(
		os.Getenv("ADMIN_PASSWD")+os.Getenv("HASHING_SALT"),
	)))
}

func createAdmin(usr users) error {
	_, err := db.Exec(
		"INSERT INTO users (id, name, password, authority) VALUES (?, ?, ?, ?)",
		usr.id, usr.name, usr.password, usr.authority,
	)
	return err
}

func main() {
	var err error
	db, err = sql.Open("mysql", (&mysql.Config{
		User:                 os.Getenv("MARIADB_USER"),
		Passwd:               os.Getenv("MARIADB_PASSWORD"),
		Net:                  "tcp",
		Addr:                 os.Getenv("MARIADB_HOST"),
		DBName:               os.Getenv("MARIADB_DATABASE"),
		AllowNativePasswords: true,
	}).FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	if err = createAdmin(users{
		id:        1,
		name:      os.Getenv("ADMIN_LOGIN"),
		password:  crypt(),
		authority: "admin",
	}); err != nil {
		log.Fatal(err)
	}

	fmt.Println("\n\nAdmin created!")
}
