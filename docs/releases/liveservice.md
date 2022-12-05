---
id: liveservice
title: LiveService
---

## General description

This page describes changes/updates for the LiveService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/Onlineberatung/onlineberatung-liveService/blob/develop/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2022-03-29

Update tag in the `.env` file to `dockerImage.v.38.release-2022-03-29`.

### 2021-12-14

Update tag to `dockerImage.v.35.release-2021-12-14` in the `.env` file - no additional changes necessary.
Update image name to `docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-liveservice/caritas-onlineberatung-liveservice` in the `.env` file - no additional changes necessary.

### 2021-06-29

Update tag to `dockerimage.v.29.release-2021-06-29` in the `.env` file - no additional changes necessary.

### 2021-06-23

Update tag to `dockerImage.v.28.native-socket-header` in the `.env` file - no additional changes necessary.

### 2021-04-13

Update tag to `dockerImage.v.16.release-2021-04-13` in the `.env` file - no additional changes necessary.

### 2020-02-09

Update tag to `dockerImage.v.14.release-2021-02-09` in the `.env` file - no additional changes necessary.

### 2020-11-25

Update tag to `dockerimage.v.9.release-2020-11-24` in the `.env` file - no additional changes necessary.

### 2020-11-03

Update tag to `dockerImage.v.5.release-2020-11-03` in the `.env` file - the following changes are necessary:
 - extend the `docker-compose.yml` for the new service
 - add `LIVE_SERVICE_VERSION` to `.env` file (same directory as the `docker-compose.yml)
 - create a `LiveService` folder in the same directory as the `docker-compose.yml`
 - create a `LiveService.env` in the newly created `LiveService` folder
 - add the NGINX location (see [Backend-Repository](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend))
 - restart `nginx` and `liveservice `
