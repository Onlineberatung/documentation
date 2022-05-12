---
id: keycloak
title: 3rd party - Keycloak
---

## General description

This page describes changes/updates for the Keycloak component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the project page at https://www.keycloak.org.

### Unreleased

No unreleased changes yet.

### 2022-03-29
#### Keycloak Migration Guide --> V. 17.0.0
- Backup .env file
- Backup docker-compose.yml
- Backup keycloak extension
- Backup Keycloak/Keycloak.env
- Backup MariaDB keycloak database (see below)
- Build and copy keycloak extensions with 17.0.0 depedencies to the server
- Adapt Keycloak/Keycloak.env (see below)
- Adapt docker-compose.yml (see below)
- Restart Keycloak service (runs DB migration upon start, check logs)
- Redeploy services with 17.0.0 dependencies updated
- Configure Custom Event Logging (see below)

#### Backup MariaDB
Execute while in backend folder (the one with the docker-compose.yml), assuming that the MariaDB 
folder exists, containing an MariaDB.env file with `MYSQL_ROOT_PASSWORD` variable:

`source MariaDB/MariaDB.env && docker-compose exec mariadb mysqldump -uroot 
-p${MYSQL_ROOT_PASSWORD} keycloak > keycloak-dump-$(date +%F_%H-%M-%S).sql`

####Restore MariaDB (in case of rollback)
Execute while in backend folder (the one with the docker-compose.yml), assuming that the MariaDB 
folder exists, containing an MariaDB.env file with MYSQL_ROOT_PASSWORD variable:

`source MariaDB/MariaDB.env && docker-compose exec -T mariadb mysql -uroot -p${MYSQL_ROOT_PASSWORD} 
keycloak < keycloak-dump.sql`

#### Adapt Keycloak.env
Most of the former env. variables have changed, and configuration got easier. Here is an example 
set of env variables which can be used to replace the former setup of version 13.0.1:

- `KC_DB=mariadb`
- `KC_DB_URL_HOST=mariadb`
- `KC_DB_URL_DATABASE=keycloak`
- `KC_DB_USERNAME=keycloak`
- `KC_DB_PASSWORD=<the password>`
- `KC_HTTP_RELATIVE_PATH=/auth`
- `KC_PROXY=edge`
- `KC_HOSTNAME=<hostname.com>`
- `KC_LOG_LEVEL=INFO`

#### Adapt docker-compose.yml
Paths for mounting extension and themes have changed. We need an additional flag in the container 
entrypoint, since quarkus containers are supposed to be immutable. The flag tells Keycloak to start 
up and apply the configuration for the specific environment. This enables us to use the standard 
image without having to build and host our own.

#### docker-compose.yml
```
keycloak:
    container_name: keycloak
    image: quay.io/keycloak/keycloak:17.0.0
    restart: on-failure
    depends_on:
        - mariadb
    env_file:
        - Keycloak/Keycloak.env
    networks:
        - database_network
        - frontend_network
        - ldap_network
    volumes:
        - ./Keycloak/caritas-theme:/opt/keycloak/themes/caritas-theme
        - ./Keycloak/keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar:/opt/keycloak/providers/keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar
        - /etc/localtime:/etc/localtime:ro
    entrypoint: "/opt/keycloak/bin/kc.sh start --auto-build"
```

#### Configure Custom Event Logging
Extensive logging configuration is currently not supported. To omit IP addresses of each event, 
we implemented a custom EventListenerProvider, which is included in the keycloak otp extension. 
After deployment, it just has to be selected as the default in the event configuration:

### 2022-03-15

Build maven package `keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar` of https://github.com/CaritasDeutschland/caritas-onlineberatung-keycloak-otp
Copy `keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar` to deployment folder (usually /opt/jboss/keycloak/standalone/deployments)
Restart keycloak
Configure authentication flow for 2FA mail → see documentation at https://github.com/CaritasDeutschland/caritas-onlineberatung-keycloak-otp/tree/master)
Use new flow in direct grant binding

### 2021-06-29

Update all ressources for the caritas theme. You can find the files in the following folder:
https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/tree/master/Keycloak/caritas-theme/login

Update the NGINX location configuration for Keycloak. You can view the changes here:
https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/pull/78/files#diff-9291636bc8605709ec8aeb30a6cbff80e54e7265fca8d92c0dc26719980a070d
https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/pull/81/files#diff-9291636bc8605709ec8aeb30a6cbff80e54e7265fca8d92c0dc26719980a070d

If you want the styling changes to take effect immediately you need to disable caching in the file `Keycloak/logging/standalone-ha.xml`. Therefore change the following values accordingly:\
`<staticMaxAge>-1</staticMaxAge>`\
`<cacheThemes>false</cacheThemes>`\
`<cacheTemplates>false</cacheTemplates>`

Finally restart Keycloak.

### 2021-06-23

Update tag to `13.0.1` in the `docker-compose.yml` file  - the following changes are necessary:\
> ⚠️remove the following lines from your "Keycloak/logging/standalone-ha.xml" file:
```
<extension module="org.wildfly.extension.microprofile.config-smallrye"/>
<extension module="org.wildfly.extension.microprofile.health-smallrye"/>
<extension module="org.wildfly.extension.microprofile.metrics-smallrye"/>
<subsystem xmlns="urn:wildfly:microprofile-config-smallrye:1.0"/>
<subsystem xmlns="urn:wildfly:microprofile-health-smallrye:2.0" security-enabled="false" empty-liveness-checks-status="${env.MP_HEALTH_EMPTY_LIVENESS_CHECKS_STATUS:UP}" empty-readiness-checks-status="${env.MP_HEALTH_EMPTY_READINESS_CHECKS_STATUS:UP}"/>
<subsystem xmlns="urn:wildfly:microprofile-metrics-smallrye:2.0" security-enabled="false" exposed-subsystems="*" prefix="${wildfly.metrics.prefix:wildfly}"/>
```

### 2021-03-23

The Keycloak technical user for the e-mail check during registration is not needed anymore and can be deleted. Its user ID is located in the `UserService.env`, value `KEYCLOAKSERVICE_TECHUSER_ID`.

### 2020-12-15

You need to change the Token-Settings in your Realm as shown in the screenshot below:
![keycloak-token-settings](assets/keycloak-token-settings.png)

`keycloak.conf` in `<base>/nginx/conf/locations` needs some changes - lines 39-41 need be changed to:\
`location /auth/resources/ {`\
`     limit_req zone=by_ip_10rs burst=10 nodelay;`\
`     proxy_pass http://keycloak:8080/auth/resources/; `\


### 2020-11-25

Update tag to `11.0.2` in the `docker-compose.yml` file  - the following changes are necessary:
> ⚠️ MariaDB update needs to be performed before this update ⚠️
