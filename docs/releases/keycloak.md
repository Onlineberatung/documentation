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