---
id: messageservice
title: MessageService
---

## General description

This page describes changes / updates for our MessageService.

We will list only changes / updates, which we done to use the component.

If you want a changelog, please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-messageservice/blob/master/CHANGELOG.md).

### Unreleased
Update tag to `dockerImage.v.8.release-2020-11-03` - the following changes are necessary:

You need to run the following SQL-Statement:\
`CREATE USER IF NOT EXISTS 'messageservice'@'%' IDENTIFIED BY '<GENERATED_PASSWORD>';`\
`CREATE DATABASE IF NOT EXISTS messageservice CHARACTER SET utf8 COLLATE utf8_unicode_ci;`\
`GRANT SELECT, INSERT, UPDATE, DELETE ON messageservice.* TO 'messageservice'@'%';`\
`FLUSH PRIVILEGES;`\
`GRANT ALTER, CREATE, CREATE VIEW, DELETE, DROP, INDEX, INSERT, REFERENCES, SELECT, SHOW VIEW, TRIGGER, UPDATE, ALTER ROUTINE, EXECUTE ON messageservice.* TO 'liquibase'@'%';`\
`FLUSH PRIVILEGES;`

`MessageService.env` needs too be extended with the following fields:\
`SPRING_DATASOURCE_URL=jdbc:mariadb://mariadb:3306/messageservice`\
`SPRING_DATASOURCE_username=messageservice`\
`SPRING_DATASOURCE_password=<GENERATED_PASSWORD>`\
`SPRING_LIQUIBASE_USER=liquibase`\
`SPRING_LIQUIBASE_PASSWORD=liquibase`\
`ROCKET_SYSTEMUSER_ID=<same as in UserService config file>`

### 2020-11-03

Update tag to `dockerImage.v.8.release-2020-11-03` - the following changes are necessary:
 - add `USER_SERVICE_API_LIVEPROXY_URL=http://userservice:8080` parameter into `MessageService.env`

### 2020-10-13

Update tag to `dockerimage.v.3-release-2020-10-13` - no additional changes necessary 