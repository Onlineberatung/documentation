---
id: install-and-running-locally
title: Installing and running the backend for local development
---

The following are the specific requirements and tools needed for local development.

## Preconditions

### docker-compose

In order to properly launch the whole environment with its dependencies, Docker and docker-compose are required.

### docker Ressourcen

In order to run the backend locally in a stable manner, Docker must have sufficient resources available.
On Windows, make sure that at least `7GB RAM` and `3GB SWAP` and `2 CPUs` are provided in docker-settings / Resources. 

### Time and time zones of docker-container 

In order for the Docker containers to adopt the time and time zones of the host system, there is a mapping via a volume between `/etc/localtime` of the host system and the Docker container. This is stored in the file `docker-compose.yml` for each service:

```
volumes:
    ...
    - /etc/localtime:/etc/localtime:ro
```

Since `/etc/localtime` is only available on Linux systems, the line

```
- /etc/localtime:/etc/localtime:ro
```

must be removed for operation on Windows system for all services in the `docker-compose.yml` file.

### 

On local Windows environments, no hosts entry is required for the services. Therefore, the following entry in the `docker-compose.yml` file must be removed for each service:

```
extra_hosts:
    - "<app_domain>:<internal_server_ip_address>"
```

### Domainname

The local host name (e.g. _**onlineberatung.local**_) must point to the own IP address. Here _not_ the 127.0.0.1 may be used, but the IP address, which was assigned to the network adapter (to be set in the operating system hosts file, for Windows _C:\Windows\System32\drivers\etc\hosts_).

### _optional_: Docker Registry

In order for the containers to be loaded via Docker Compose, they must be made available via a Docker Registry/Repository Manager (e.g. GitHub Packages). If no such service is available, the Docker images can also be [built locally](../backend/build-and-load-docker-image.md).

As an example, the following shows how authentication to GitHub packages is performed:

```sh
echo $GITHUB_TOKEN | docker login https://docker.pkg.github.com -u USERNAME --password-stdin
```

See also the [documentation from Github regarding Docker Login](https://docs.github.com/en/packages/guides/configuring-docker-for-use-with-github-packages#authenticating-with-a-personal-access-token).

On Windows in the Git bash:

```sh
winpty docker login docker.pkg.github.com
```

After that, the access data will be requested and stored for future requests.

### Node.js und NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools.

**NPM** is the Node Package Manager and is used to install all packages needed in this project. This includes packages for the conventional commits process and versioning management.

1. Install Node.js as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install [NPM](https://www.npmjs.com/get-npm) and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.
4. Run `npm install` in your project directory to install the dependencies in the local node_modules folder.

### IDE

The following plugins should be installed in the IDE:

- Lombok
- Maven
- Codestyle Checker for Google Java Code Style (https://github.com/google/styleguide)

For intelliJ, the Google Code Style can be downloaded at the following link for importing: https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml

In addition, compliance level version 1.8.0 (OpenJDK) should be selected for the compiler.

The configuration in Eclipse is described below as an example:

1. All general configuration parameters are set in the /resources/application.properties. Special (development) environment variables, such as database connection data, can be set in the respective application-[environment].properties file.
The currently used profile is set to "local" in the pom.xml by default.
If it is necessary to change the profile there are the following possibilities:

- Maven with the following property in the command: -PactiveSpringProfile=local/dev/prod (Example: mvn install -PactiveSpringProfile=dev)
- Set the "spring.profiles.active" as environment variable in the run configurations (right click on the project -> "Run As" -> "Run Configurations" -> select the respective configuration -> tab "Environment" -> "New")
- Enter the following JVM system parameters: -Dspring.profiles.active=dev/prod/local
- Changing the value "spring.profiles.active" in the application.properties (not recommended, because then the placeholder for Maven is missing)

2. In Eclipse, the folder "target/generated-sources" id the project settings ("Java Build Path" -> "Sources") may also need to be added.

3. Run `maven install` and `maven generate-sources`.

## Pre-Configuration

### Defining the Microservices-Service-Versions

In the `.env` file, the paths to the images and the versions or tags for the microservices must be specified, e.g.

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

Current service versions can be found on the [Releases-Page](../releases/overview.md).

If no Docker Registry is available, the services must first be [built locally](../backend/build-and-load-docker-image.md) and then deposited in the `docker-compose.yml`, e.g.

```
    userservice:
        image: cob/userservice:development
```

Otherwise, in `docker-compose.yml` just replace `<image_server_url>` with the URL to the registry, the image name will then be replaced with the respective variables from file `.env`.

### _optional_: Customize frontend configuration

This configuration is only necessary if you want to use local files for the frontend instead of the Docker container.

For this, an additional volume for the frontend container must be defined in the `docker-compose.yml` of the backend (additionally under "volumes:"):

`- <LOKALER_ORDNER>:/usr/share/nginx/html`

The fronted files must then be placed in the local folder and are then delivered in the container instead of the frontend files.

### Set file permissions on Linux

- [File permissions (only Linux)](../backend/file-permissions.md)

### First start

- [First Start](../backend/first-start.md)

### Configuration

- [Service configuration](../backend/service-configuration.md)
- [CORS configuration](../backend/cors-configuration.md)

### Login data/access links

- [Login data and access links](../backend/login-data-access-links.md)

### Starting/stopping the services

- [Starting and stopping the services](../backend/starting-and-stopping-the-services.md)

### Build docker-image locally

- [build and load-docker-image locally](../backend/build-and-load-docker-image.md)