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
