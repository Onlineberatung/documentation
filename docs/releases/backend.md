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

### 2021-06-23

Add the new ConsultingTypeService to the `docker-compose.yml`:

```consultingtypeservice:
  container_name: consultingtypeservice
  image: $CONSULTING_TYPE_SERVICE_IMAGE:$CONSULTING_TYPE_SERVICE_VERSION
  restart: "no"
  networks:
	- frontend_network
	- service_network
  volumes:
	- ./ConsultingTypeService/log:/log
	- ./ConsultingTypeService/consulting-type-settings:/consulting-type-settings
	- consultingtypeservice_tmp:/tmp
	- /etc/localtime:/etc/localtime:ro
  env_file:
	- ./ConsultingTypeService/ConsultingTypeService.env
  extra_hosts:
	- "<app_domain>:<internal_server_ip_address>"
```

You need to change the image tags for the following services:

```userservice:
  image: $USER_SERVICE_IMAGE:$USER_SERVICE_VERSION
```
```agencyservice:
  image: $AGENCY_SERVICE_IMAGE:$AGENCY_SERVICE_VERSION
```
```messageservice:
  image: $MESSAGE_SERVICE_IMAGE:$MESSAGE_SERVICE_VERSION
```
```mailservice:
  image: $MAIL_SERVICE_IMAGE:$MAIL_SERVICE_VERSION
```
```uploadservice:
  image: $UPLOAD_SERVICE_IMAGE:$UPLOAD_SERVICE_VERSION
```
```liveservice:
  image: $LIVE_SERVICE_IMAGE:$LIVE_SERVICE_VERSION
```
```consultingtypeservice:
  image: $CONSULTING_TYPE_SERVICE_IMAGE:$CONSULTING_TYPE_SERVICE_VERSION
```
```videoservice:
  image: $VIDEO_SERVICE_IMAGE:$VIDEO_SERVICE_VERSION
```
```frontend:
  image: $FRONTEND_IMAGE:$FRONTEND_VERSION
```
```proxy:
  image: $NGINX_SERVICE_IMAGE:$NGINX_SERVICE_VERSION
```

Finally the new volume needs to be added at the end of the file:
```volumes:
  consultingtypeservice_tmp:
```

You need to make changes to the `.env` file and add the image variable for every service:

```USER_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-userservice/userservice-image
FRONTEND_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-frontend/frontend-image
AGENCY_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-agencyservice/agencyservice-image
MESSAGE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-messageservice/messageservice-image
MAIL_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-mailservice/mailservice-image
UPLOAD_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-uploadservice/uploadservice-image
NGINX_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-nginx/nginx-image
LIVE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-liveservice/liveservice-image
VIDEO_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-videoservice/videoservice-image
CONSULTING_TYPE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-consultingtypeervice/consultingservice-image
```

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
