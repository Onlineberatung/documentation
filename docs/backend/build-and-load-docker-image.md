---
id: build-and-load-docker-image
title: Build Docker image locally and load it into Docker
---
## AgencyService
### Build Docker image locally
A Docker image can be built locally by the service with the following command or by calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o agencyservice.tar cob/agencyservice:development`

**Import**
`docker load -i agencyservice.tar`

## MailService
### Build Docker image locally
A Docker image can be built locally by the service with the following command or by calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o mailservice.tar cob/mailservice:development`

**Import**
`docker load -i mailservice.tar`

## MessageService
### Build Docker image locally
A Docker image can be built locally by the service with the following command or by calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o messageservice.tar cob/messageservice:development`

**Import**
`docker load -i messageservice.tar`

## UserService
### Build Docker image locally
A Docker image can be built locally by the service with the following command or by calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o userservice.tar cob/userservice:development`

**Import**
`docker load -i userservice.tar`

## UploadService
### Build Docker image locally
A Docker image can be built locally by the service using the following command or calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o uploadservice.tar cob/uploadservice:development`

**Import**
`docker load -i uploadservice.tar`

## LiveService
### Build Docker image locally
A Docker image can be built locally by the service with the following command or by calling the following batch file, which can be found in the root directory of the service:

`build-docker.cmd`

The image is placed in the local Docker registry with the tag `development` and can be used locally for development.

### Transfer Docker image
To transfer the Docker image to another Docker registry (e.g. other PC) the following commands can be used:

**Export**
`docker save -o liveservice.tar cob/liveservice:development`

**Import**
`docker load -i liveservice.tar`

## VideoService
### Build docker image locally
You can build the Docker image of the VideoService with the following batch file which is located in the root directory:

`build-docker.cmd`

The image is being tagged as `development` in the local Docker registry. You may need to change the path in the `Dockerfile` for a correct build to (for example):

`COPY target/VideoService.jar app.jar`

### Transfer Docker image
To transfer the Docker image to another Docker registry (or another computer) you can use the following commands:

**Export**
`docker save -o videoservice.tar cob/videoservice:development`

**Import**
`docker load -i videoservice.tar`

## ConsultingTypeService
### Build docker image locally
You can build the Docker image of the ConsultingTypeService with the following batch file which is located in the root directory:

`build-docker.cmd`

The image is being tagged as `development` in the local Docker registry. You may need to change the path in the `Dockerfile` for a correct build to (for example):

`COPY target/ConsultingTypeService.jar app.jar`

### Transfer Docker image
To transfer the Docker image to another Docker registry (or another computer) you can use the following commands:

**Export**
`docker save -o consultingtypeservice.tar cob/consultingtypeservice:development`

**Import**
`docker load -i consultingtypeservice.tar`