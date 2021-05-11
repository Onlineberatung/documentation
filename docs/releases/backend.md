---
id: backend
title: Backend stack - Backend
---

## General description

This page describes changes/updates for the Backend.

Since most of the configuration is done inside our services, we will only list additional changes in this document.

For a full changelog of this project please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2021-05-04

Endpoints which where reachable without SSL or via IP have been deactivated/ respectively forwarded to the correct HTTPS endpoint.
Furthermore the complete structure of the NGINX configuration has been reorganised, it is suggested to remove all old `.conf` files (please make sure you backup them for comparison!) and replace them with the new versions in the master repository (folder `./nginx/conf`). \
Afterwards please follow the instructions under [NGINX configuration](../backend/nginx.md). \
Furthermore you have to make a few changes to the docker-compose.yml:
- Remove the port assignment from nosqlclient (`ports: - 3001:3000`)
- Remove the port assignment from rocketchat (`ports: - 3000:3000`)
- add the following port definitions to the proxy/nginx:
  - `- 3000:3000`
  - `- 3001:3001`
- remove the following volume mappings from the proxy/nginx:
  - `- ./nginx/conf/nginx.conf:/etc/nginx/nginx.conf`
  - `- ./nginx/conf/ip-restrictions.conf:/etc/nginx/ip-restrictions.conf`
  - `- ./nginx/conf/server.conf:/etc/nginx/server.conf`
  - `- ./nginx/conf/server-ssl.conf:/etc/nginx/server-ssl.conf`
  - `- ./nginx/conf/security-headers.conf:/etc/nginx/security-headers.conf`
  - `- ./nginx/conf/adminer.conf:/etc/nginx/adminer.conf`
- add the following mapping to the proxy/nginx volumes:
  - `- ./nginx/conf/server:/etc/nginx/server`