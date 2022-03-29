---
id: uploadservice
title: UploadService
---

## General description

This page describes changes/updates for the UploadService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-uploadservice/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2022-03-29

Update tag in the `.env` file to `dockerImage.v.36.release-2022-03-29`.

### 2022-03-15

Update tag to `dockerImage.v.33.release-2022-03-15` in the `.env` file - no additional changes necessary.

### 2021-12-14

Add the following RabbitMQ properties to the `UserService.env`:
```
SPRING_RABBITMQ_USERNAME=<username of your rabbitmq user>
SPRING_RABBITMQ_PASSWORD=<password of your rabbitmq user>
STATISTICS_ENABLED=true
```

If you do not want to enable the statistics feature set `STATISTICS_ENABLED` to `false`.

Update tag to `dockerImage.v.31.release-2021-12-14` in the `.env` file.

### 2021-11-30

Update tag to `dockerImage.v.29.release-2021-11-30` in the `.env` file - no additional changes necessary.

### 2021-11-03

Adjust env property ROCKET_TECHNICAL_USERNAME=rocket-chat-technical-user.

### 2021-07-27

Update tag to `dockerImage.v.27.release-2021-07-27` in the `.env` file - no additional changes necessary.

### 2021-06-23

Update tag to `dockerImage.v.24.release-2021-06-22` in the `.env` file - no additional changes necessary.

### 2021-04-13

Update tag to `dockerImage.v.21.release-2021-04-13` in the `.env` file - no additional changes necessary.

### 2021-03-02

Update tag to `dockerImage.v.19.release-2021-03-02` in the `.env` file - no additional changes necessary.

### 2020-12-15

You need to run the following SQL-Statement:\
`CREATE USER IF NOT EXISTS 'uploadservice'@'%' IDENTIFIED BY '<GENERATED_PASSWORD>';`\
`CREATE DATABASE IF NOT EXISTS uploadservice CHARACTER SET utf8 COLLATE utf8_unicode_ci;`\
`GRANT SELECT, INSERT, UPDATE, DELETE ON uploadservice.* TO 'uploadservice'@'%';`\
`FLUSH PRIVILEGES;`\
`GRANT ALTER, CREATE, CREATE VIEW, DELETE, DROP, INDEX, INSERT, REFERENCES, SELECT, SHOW VIEW, TRIGGER, UPDATE, ALTER ROUTINE, EXECUTE ON uploadservice.* TO 'liquibase'@'%';`\
`FLUSH PRIVILEGES;`

`UploadService.env` needs to be extended with the following fields:\
`SPRING_DATASOURCE_URL=jdbc:mariadb://mariadb:3306/uploadservice`\
`SPRING_DATASOURCE_username=uploadservice`\
`SPRING_DATASOURCE_password=<GENERATED_PASSWORD>`\
`SPRING_LIQUIBASE_USER=liquibase`\
`SPRING_LIQUIBASE_PASSWORD=liquibase`

`docker-compose.yml` needs to be extended with database_network in uploadservice definition\
`networks:`\
 `- frontend_network`\
 `- service_network`\
 `- database_network`

In `Rocket.Chat` add permission `View Other User Channels` to user `technical`.\
This is necessary for the Reporting-Interface.

Update tag to `dockerImage.v.17.release-2020-12-15` in the `.env` file.

### 2020-11-25

Update tag to `dockerimage.v.12.release-2020-11-24` in the `.env` file - no additional changes necessary.

### 2020-11-03

Update tag to `dockerImage.v.9.release-2020-11-03` in the `.env` file - the following changes are necessary:
 - add `USER_SERVICE_API_LIVEPROXY_URL=http://userservice:8080` parameter into `UploadService.env`

### 2020-10-13

Update tag to `dockerimage.v.5-release-2020-10-13` - no additional changes necessary.
