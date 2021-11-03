---
id: userservice
title: UserService
---

## General description

This page describes changes/updates for the UserService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-userService/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2021-11-03

Update tag to `dockerImage.v.164.release-2021-11-03` in the `.env` file.
Adjust env property ROCKET_TECHNICAL_USERNAME=rocket-chat-technical-user.

### 2021-06-23

You need to add a new location in nginx/conf/locations/userservice.conf to make the new 
conversations api available to the client.
```
location /service/conversations {
    limit_req zone=by_ip_10rs burst=5;
    proxy_pass http://userservice:8080/conversations;
    resolver 127.0.0.11;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto http;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Add the permission `Edit Room` to the system user in admin interface of Rocket.Chat.

Add the following service API url to the `UserService.env`: `CONSULTING_TYPE_SERVICE_API_URL=http://consultingtypeservice:8080`.

Add the following keycloak properties to the `UserService.env`:
```
KEYCLOAKSERVICE_TECHNICAL_USERNAME=<username of your technical user>
KEYCLOAKSERVICE_TECHNICAL_PASSWORD=<password of your technical user>
```

Update tag to `dockerImage.v.149.release-2021-06-22` in the `.env` file.

### 2021-05-04

You need to change one value in  the AgencySerice api url in `UserService.env`:
- change `AGENCY_SERVICE_API_URL` to `http://agencyservice:8080`.

The Keycloak role `kreuzbund-consultant` has been removed and must be migrated to the 
new role `group-chat-consultant`. Therefore go to (`<app_domain>/auth` -> administration console) 
select `Roles` and create the new role `group-chat-consultant`. Navigate to the old 
`kreuzbund-consultant` role and select `Users in Role` to list all users having that role assigned. 
For each user press `edit` -> `Role Mappings`, add the new role `group-chat-consultant` and remove 
the assigned role `kreuzbund-consultant`. Last but not least delete the obsolete role 
`kreuzbund-consultant`

Update tag to `dockerImage.v.106.release-2021-05-04` in the `.env` file.

### 2021-04-13

Update tag to `dockerImage.v.93.release-2021-04-13` in the `.env` file - no additional changes necessary.

Push notifications for mobile devices can be configured now (deactivated by default). Therefore you 
have to do several steps:
1. `docker-compose.yml` needs to be extended with the new volume mapping for your firebase 
   configuration path e.g:\
   `./UserService/firebase:/firebase`
2. Create the folder `firebase`under your `UserService` location and add the firebase credential 
   json file `(can be created in your firebase project)`
3. Extend your `UserService.env` file with the following properties:
   - `FIREBASE_CONFIGURATION_PUSH-NOTIFICATIONS_ENABLED=true`
   - `FIREBASE_CONFIGURATION_CREDENTIALS_FILE_PATH=/firebase/<your-credentials-file.json>`
   - `FIREBASE_CONFIGURATION_NOTIFICATION_MESSAGE=<message being send to mobile devices>`\
     
You can now set the client registration device identifiers for users via the new rest endpoint 
`/users/mobiletoken`. From there, these users will receive push notifications on their mobile devices.

Also you need to change two values in `UserService.env`:
- change `MESSAGE_SERVICE_API_URL` to `http://messageservice:8080`
- change `MAIL_SERVICE_API_URL` to `http://mailservice:8080`

On top of that the following property can be deleted from `UserService.env`:
`KEYCLOAKSERVICE_TECHUSER_ID`

Update tag to `dockerImage.v.78.release-2021-03-23` in the `.env` file - no additional changes necessary.
 
### 2021-03-02

Update tag to `dockerImage.v.62.release-2021-03-02` in the `.env` file - no additional changes necessary.

### 2021-02-09

Update tag to `dockerImage.v.51.release-2021-02-09` in the `.env` file - no additional changes necessary.

### 2021-01-13

1. You have to grant the `Edit Other User Information` permission for the `technical` user in
 Rocket.Chat. Therefore access the administration console of Rocket.Chat and select the item
  `Permissions` in `Administration` settings and activate the checkbox for mentioned permission.

2. Update tag to `dockerImage.v.37.release-2021-01-13` in the `.env` file.

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
