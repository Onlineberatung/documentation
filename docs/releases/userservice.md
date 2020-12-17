---
id: userservice
title: UserService
---

## General description

This page describes changes/updates for the UserService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-userService/blob/master/CHANGELOG.md).

### Unreleased

1. You have to grant the `Edit Other User Information` permission for the `technical` user in
 Rocket.Chat. Therefore access the administration console of Rocket.Chat and select the item
  `Permissions` in `Administration` settings and activate the checkbox for mentioned permission.

### 2020-12-15
`userservice.conf` in `<base>/nginx/conf/locations` needs to be extended with the following lines:\
`location /useradmin {`\
`     limit_req zone=by_ip_5rs burst=5;`\
`     proxy_pass http://userservice:8080/useradmin; `\
`     resolver 127.0.0.11;`\
`     proxy_set_header Host $host;`\
`     proxy_set_header X-Real-IP $remote_addr;`\
`     proxy_set_header X-Forwarded-Proto http;`\
`     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`\
`}`

You need to create an additional role in keycloak (`<app_domain>/auth` -> administration console) named `user-admin` and add/change a user to have the new role.\
`Note: only this user will have access to the admin interface`

Update tag to `dockerImage.v.36.release-2020-12-15` in the `.env` file.

### 2020-11-25

Update tag to `dockerimage.v.22.release-2020-11-24` in the `.env` file - no additional changes necessary.

### 2020-11-03

Update tag to `dockerImage.v.15.release-2020-11-03` in the `.env` file - the following changes are necessary:
 - add `LIVE_SERVICE_API_URL=http://liveservice:8080` parameter to `UserService.env`

### 2020-10-13

Update tag to `dockerimage.v.5-release-2020-10-13` in the `.env` file - no additional changes necessary.
