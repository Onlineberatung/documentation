---
id: consultingtypeservice
title: ConsultingTypeService
---

## General description

This page describes changes/updates for the ConsultingTypeService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-consultingTypeService/blob/master/CHANGELOG.md).

### Unreleased

Update tag to `dockerImage.v.XXX` in the `.env` file!

Recently in there have been major changes in the consulting type service. MongoDB and MariaDB 
connectivity has been introduced.  Consultingtypes jsons are now stored in MongoDB collection, 
and topics reside in MariaDB. Before the next deployment you need to make sure that the databases 
are correctly prepared.

#### Create new MongoDB connection for ConsultingTypeService:
Login to mongodb container and login to mongo using mongodb admin username and password

`mongo -u <username> -p <password> --authenticationDatabase=admin`

Create mongo DB and users (use strong password generator to generate pwd).


     use consulting_types
     db.createUser(
	    {  
	    	user: "consulting_types",  
	    	pwd: "<strong_generated_password>",
    		    roles: [ { role: "readWrite", db: "consulting_types" } ]  
    	} 
     )  

Make sure your ConsultingTypeService.env is updated with following credentials
    `consultingTypeMongoUser: "consulting_types"`\
    `consultingTypeMongoPass: "<take from lastpass>"`

#### Create new ConsultingTypeService database in MariaDB and grant access to users:
    CREATE USER IF NOT EXISTS 'consultingtypeservice'@'%' IDENTIFIED BY '<PASSWORD, see secrets for the target env in LastPass, entry consultingTypeServiceSpringDatasourcePassword>';  
    CREATE DATABASE IF NOT EXISTS consultingtypeservice CHARACTER SET utf8 COLLATE utf8_unicode_ci;  
    GRANT SELECT, INSERT, UPDATE, DELETE ON consultingtypeservice.* TO 'consultingtypeservice'@'%';  
    FLUSH PRIVILEGES;  
    GRANT ALTER, CREATE, CREATE VIEW, DELETE, DROP, INDEX, INSERT, REFERENCES, SELECT, SHOW VIEW, TRIGGER, UPDATE, ALTER ROUTINE, EXECUTE ON consultingtypeservice.* TO 'liquibase'@'%';  
    FLUSH PRIVILEGES;

### 2022-05-05

Update tag to `dockerImage.v.22.release-2022-05-05` in the `.env` file - no additional changes necessary.

### 2021-12-14

Update tag to `dockerImage.v.18.release-2021-12-14` in the `.env` file - no additional changes necessary.

### 2021-11-30

Update tag to `dockerImage.v.17.release-2021-11-30` in the `.env` file

Update all consulting type settings under `ConsultingTypeService/consulting-type-settings` and 
add the boolean property `isPeerChat` equivalent to the value of `initializeFeedbackChat`

### 2021-07-27

Update tag to `dockerImage.v.12.release-2021-07-27` in the `.env` file - no additional changes necessary.

### 2021-06-29

Update tag to `dockerImage.v.8.release-2021-06-29` in the `.env` file - no additional changes necessary.

### 2021-06-23

Configure the service initially like documented under [service configuration](../backend/service-configuration.md#consultingtypeservice).
