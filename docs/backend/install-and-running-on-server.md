---
id: install-and-running-on-server
title: Installing and running the backend on the server
---

In the following the special requirements and tools are mentioned which are needed for the operation of the Caritas Online-Counseling on the (production) server.

## Preconditions

### docker-compose

In order to properly launch the whole environment with its dependencies, docker and docker-compose are required.

### Docker Registry

In order to be able to load the containers via docker-compose, they must be provided via a docker Registry/Repository Manager (e.g. GitHub Packages).
As an example, the following shows how authentication to GitHub Packages takes place:

``docker login docker.pkg.github.com``

On Windows in the Git bash:

``winpty docker login docker.pkg.github.com``

After that, the access data will be requested and stored for future requests.

## Pre-Configuration

### Defining the Microservices-Service-Versions

In the `.env` file, the paths to the images and the versions or tags for the microservices must be specified, as shown in the following example

```
USER_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-userservice/userservice-image
USER_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
FRONTEND_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-frontend/frontend-image
FRONTEND_VERSION=dockerimage.v.5-release-2020-10-13
AGENCY_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-agencyservice/agencyservice-image
AGENCY_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
MESSAGE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-messageservice/messageservice-image
MESSAGE_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
MAIL_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-mailservice/mailservice-image
MAIL_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
UPLOAD_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-uploadservice/uploadservice-image
UPLOAD_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
NGINX_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-nginx/nginx-image
NGINX_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
LIVE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-liveservice/liveservice-image
LIVE_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
VIDEO_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-videoservice/videoservice-image
VIDEO_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
CONSULTING_TYPE_SERVICE_IMAGE=docker.pkg.github.com/caritasdeutschland/caritas-onlineberatung-consultingtypeervice/consultingservice-image
CONSULTING_TYPE_SERVICE_VERSION=dockerimage.v.5-release-2020-10-13
```

### File permissions

- [File permissions](../backend/file-permissions.md)

### Install SSL certificate

- [SSL certificate](../backend/ssl-certificate.md)

### First start

- [First Start](../backend/first-start.md)

### Configuration

- [Service configuration](../backend/service-configuration.md)
- [CORS configuration](../backend/cors-configuration.md)

### Login data/access links

- [Login data and access links](../backend/login-data-access-links.md)

### Starting/stopping the services

- [Starting and stopping the services](../backend/starting-and-stopping-the-services.md)

### Building with Jenkins

- [Building the services with Jenkins](../backend/jenkins.md)

### NGINX configuration

- [NGINX configuration](../backend/nginx.md)
