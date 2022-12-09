---
id: agencyservice
title: AgencyService
---

## General description

This page describes changes/updates for the AgencyService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/Onlineberatung/onlineBeratung-agencyService/blob/develop/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2022-08-18

Update tag in the `.env` file to `dockerImage.v.56.release-2022-08-17` - no additional changes necessary.

### 2022-07-13

Update tag in the `.env` file to `dockerImage.v.53.release-2022-07-13` - no additional changes necessary.

### 2022-03-29

Update tag in the `.env` file to `dockerImage.v.51.release-2022-03-29`.

### 2021-07-27

Update tag to `dockerImage.v.44.release-2021-07-27` in the `.env` file - no additional changes necessary.

### 2021-06-23

Add the following service API url to the `AgencyService.env`: `CONSULTING_TYPE_SERVICE_API_URL=http://consultingtypeservice:8080`.

After adding the new ConsultingTypeService you can remove all of the white spot agency IDs from `AgencyService.env`.

Update tag to `dockerImage.v.40.release-2021-06-22` in the `.env` file - no additional changes necessary.

### 2021-05-04

Update tag to `dockerImage.v.36.release-2021-05-04` in the `.env` file - no additional changes necessary.

### 2021-04-13

Update tag to `dockerImage.v.32.release-2021-04-13` in the `.env` file - no additional changes necessary.

### 2021-03-02

Update tag to `dockerImage.v.21.release-2021-03-02` in the `.env` file - the following changes are necessary:
- add `USER_ADMIN_SERVICE_API_URL=http://userservice:8080` parameter into `AgencyService.env`

### 2021-01-13

1. You have to grant the update and delete permission for the agencyservice database user by
 executing this sql statements:
   
   ``GRANT UPDATE ON agencyservice.* TO 'agencyservice'@'%'; FLUSH PRIVILEGES;``
   ``GRANT DELETE ON agencyservice.* TO 'agencyservice'@'%'; FLUSH PRIVILEGES;``

2. Update tag to `dockerImage.v.15.release-2021-01-13` in the `.env` file

### 2020-12-15

1. You have to grant the insert permission for the agencyservice database user by executing this sql statements:
   
   ``GRANT INSERT ON agencyservice.* TO 'agencyservice'@'%'; FLUSH PRIVILEGES;``

2. Update tag to `dockerImage.v.14.release-2020-12-15` in the `.env` file

### 2020-11-25

1. You need to create an additional role in keycloak (`<app_domain>/auth` -> administration console
) named `agency-admin` and add a user having the
     following role:
     - `agency-admin`
    
    `Note: only this user will have access to the admin interface`

2. Add the NGINX location in agencyservice.conf for new admin paths (see [Backend-Repository
](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend))

3. Update tag to `dockerimage.v.10.release-2020-11-24` in the `.env` file

### 2020-11-03

Update tag to `dockerImage.v.6.release-2020-11-03` in the `.env` file - no additional changes necessary.

### 2020-10-13

Update tag to `dockerimage.v.3` in the `.env` file - no additional changes necessary.
