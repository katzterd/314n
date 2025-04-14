#!/bin/bash

mariadb -h$MARIADB_HOST -u$MARIADB_USER -p$MARIADB_PASSWORD $MARIADB_DATABASE < /app/config/structure.sql && printf "\nDatabase created!" || printf "\nDatabase already exists"
