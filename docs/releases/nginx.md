---
id: nginx
title: NGINX
---

## General description

This page describes changes/updates for the NGINX component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-nginx/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2020-11-03

Update tag to `dockerImage.v.4.release-2020-11-03` in the `docker-compose.yml` file - no additional changes necessary.

### 2020-10-13

Whitelist configuration needs to be updated:
 - see `rocketchat.conf` and `keycloak.conf` in [Backend-Repository](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/tree/master/nginx/conf/locations)
