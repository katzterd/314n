# 314n
*opensource console board | since 2012*
https://314n.org | https://314n.ru | Beta instance: https://314n.0chan.one/

## Installation and configuration
- Import `structure.sql` into the new database.
- Enter your database credentials into `config.php` (don't close this file yet).
- Type in some random characters into `HASHING_SALT` and `PUBLIC_HASHING_SALT` fields.
- Register the user account normally, than go into your database and change the `authority` to `admin` so you can create boards.

### User system
- By default users are identified by IP. If you prefer not to associate users with their IP (like for example when you're running a hidden service in TOR or I2P network or testing locally), set `IDENTIFY_GUESTS_BY_IP` to `false`.
- If you're running the same service in clearnet and in the hidden network you may specify IPs that will not be used to identify users in the `LOCAL_IP_LIST` field.
- You may turn off guest accounts completely by setting `ALLOW_GUESTS` to `false`. This will force all users to register.
- Guest accounts will be automatically deleted after a specified period of inactivity. `GUEST_ACCOUNT_TTL` sets this period.
- Users may hide their identity from other users if they choose to. Set `ALLOW_ANONYMOUS_POSTING` to `false` to disallow this.

### Board creation
- By default only the users with the `admin` authority level can create boards. To allow regular users to create boards change `ALLOW_USER_BOARDS` to `true`.
- You can limit a  number of boards a user can create by changing the `BOARDS_PER_USER` setting.
- You can make a board hidden by setting its `public` field to `0` in the database.

## Updating from older instances
Here are some snippets you must run in the database for the new features to work.

### User system
```sql
ALTER TABLE `posts`
	ADD COLUMN `hidden` TINYINT UNSIGNED NULL DEFAULT '0' AFTER `bump_date`;
ALTER TABLE `users`
	ADD COLUMN `public_hash` CHAR(64) NULL DEFAULT NULL AFTER `banned`;
```

### Userboards
```sql
ALTER TABLE `users`
	ADD COLUMN `authority` ENUM('user','admin','mod') NOT NULL DEFAULT 'user' AFTER `public_hash`;
ALTER TABLE `boards`
	ADD COLUMN `owner` INT(11) NOT NULL AFTER `public`;
UPDATE `boards` SET `owner`=1 WHERE 1; # Where '1' is admin's user ID
```