---
id: backend
title: Backend stack - Backend
---

## General description

This page describes changes/updates for the Backend.

Since most of the configuration is done inside our services, we will only list additional changes in this document.

For a full changelog of this project please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/blob/master/CHANGELOG.md).

### Unreleased

Update `/nginx/conf/nginx.conf`. There are changes in the configuration of the nginx log format for the access log file. 

Update `/nginx/conf/adminer.conf`. Obsolete tls versions has been removed from ssl configuration.

Update `/nginx/conf/server-ssl.conf`. Obsolete tls versions has been removed from ssl configuration.