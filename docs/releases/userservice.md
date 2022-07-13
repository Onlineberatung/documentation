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

### 2022-07-13

Update tag to `dockerImage.v.283.release-2022-07-12` in the `.env` file - no additional changes necessary.

### 2022-05-05

Update tag to `dockerImage.v.274.release-2022-05-05` in the `.env` file.

You need to add a new location in nginx/conf/locations/userservice.conf to make the new
appointments api available to the client.
```
location /service/appointments {
    limit_req zone=by_ip_10rs burst=5;
    proxy_pass http://userservice:8080/appointments;
    resolver 127.0.0.11;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto http;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### 2022-03-29

Change the following properties in `UserService.env` as follows:
```
# add
VIDEOCHAT_E2E-ENCRYPTION-ENABLED=true

# replace keys
KEYCLOAK_CONFIG_ADMIN-USERNAME  # before KEYCLOAKSERVICE_ADMIN_USERNAME
KEYCLOAK_CONFIG_ADMIN-PASSWORD  # before KEYCLOAKSERVICE_ADMIN_PASSWORD
KEYCLOAK_CONFIG_ADMIN-CLIENT-ID # before KEYCLOAKSERVICE_ADMIN_CLIENTID
KEYCLOAK_CONFIG_APP-CLIENT-ID   # before KEYCLOAKSERVICE_APP_CLIENTID
```

Update tag in the `.env` file to `dockerImage.v.236.release-2022-03-29`.

### 2022-03-23

Update tag to `dockerImage.v.234.hotfix-2022-03-23` in the `.env` file - no additional changes necessary.

### 2022-03-15

Update tag to `dockerImage.v.221.release-2022-03-15` in the `.env` file.
Add new overriding properties to UserService.env before restart: `IDENTITY_OTP-ALLOWED-FOR-USERS=true` and `IDENTITY_OTP-ALLOWED-FOR-CONSULTANTS=true`

### 2022-02-10

Update tag to `dockerImage.v.209.hotfix-2022-02-09` in the `.env` file - no additional changes necessary.

### 2022-02-08

Update tag to `dockerImage.v.206.release-2022-02-03` in the `.env` file - no additional changes necessary.

### Delete workflows
New delete workflows for inactive users and session were added. Please check the documentation ([delete workflows](../backend/delete-workflows.md)) and decide if you want to active this workflows.

### 2021-12-14

Add the following RabbitMQ properties to the `UserService.env`:
```
SPRING_RABBITMQ_USERNAME=<username of your rabbitmq user>
SPRING_RABBITMQ_PASSWORD=<password of your rabbitmq user>
STATISTICS_ENABLED=true
```

If you do not want to enable the statistics feature set `STATISTICS_ENABLED` to `false`.

Update tag to `dockerImage.v.191.release-2021-12-14` in the `.env` file.

### 2021-11-30

Update tag to `dockerImage.v.180.release-2021-11-30` in the `.env` file.

Create a new keycloak user for role migration via the keycloak admin console 
`<YOUR_DOMAIN>/auth`. Add the `Client Roles` -> `Realm Management``manage-realm` and`query-realms`\
Configure the parameters in python script under 
`UserService/src/main/resources/migration/KeycloakRoleNameMigration.py` and execute the script\
Delete the previous created keycloak user 

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
