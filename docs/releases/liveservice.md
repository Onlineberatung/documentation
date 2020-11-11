---
id: liveservice
title: LiveService
---

## General description

This page describes changes / updates for our LiveService.

We will list only changes / updates, which we done to use the component.

If you want a changelog, please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-liveservice/blob/master/CHANGELOG.md).

### Unreleased

### 2020-11-03

Update tag to `dockerImage.v.5.release-2020-11-03` - the following changes are necessary:
 - extend the `docker-compose.yml` for the new service
 - add `LIVE_SERVICE_VERSION` to `.env` file (next to `docker-compose.yml`)
 - create a `LiveService` folder in the same directory as the `docker-compose.yml`
 - create a `LiveService.env` in the newly created `LiveService` folder
 - add the NGINX location (see [Backend-Repository](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend))
 - restart `nginx` and `liveservice `