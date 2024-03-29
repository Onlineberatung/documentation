---
id: videoservice
title: VideoService
---

## General description

This page describes changes/updates for the VideoService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-videoService/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2022-07-13

Update tag to `dockerImage.v.31.release-2022-07-13` in the `.env` file - no additional changes necessary.

### 2022-05-05

Update tag to `dockerImage.v.26.release-2022-05-05` in the `.env` file - no additional changes necessary.

### 2022-03-29

Update tag in the `.env` file to `dockerImage.v.23.release-2022-03-29`.

### 2021-12-14

Add the following RabbitMQ properties to the `UserService.env`:
```
SPRING_RABBITMQ_USERNAME=<username of your rabbitmq user>
SPRING_RABBITMQ_PASSWORD=<password of your rabbitmq user>
STATISTICS_ENABLED=true
```

If you do not want to enable the statistics feature set `STATISTICS_ENABLED` to `false`.

Update tag to `dockerImage.v.22.release-2021-12-14` in the `.env` file.

### 2021-06-23

Update tag to `dockerImage.v.20.release-2021-06-22` in the `.env` file - no additional changes necessary.

### 2021-05-04

Update tag to `dockerImage.v.17.release-2021-05-04` in the `.env` file - no additional changes necessary.

### 2021-04-13

Update tag to `dockerImage.v.12.release-2021-04-13` in the `.env` file - no additional changes necessary.

### 2020-02-09

Configure the service initially like documented under [service configuration](../backend/service-configuration.md#videoservice).
Please be aware that the video call functionality is currently hidden in the frontend.
