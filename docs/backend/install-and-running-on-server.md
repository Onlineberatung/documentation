---
id: install-and-running-on-server
title: Installing and running the backend on the server
---

Im Folgenden werden die speziellen Voraussetzungen und Tools genannt welche für den Betrieb der Caritas Online-Beratung auf dem (Production-)Server benötigt werden.

## Voraussetzungen

### docker-compose

Damit die ganze Umgebung mit ihren Abhängigkeiten richtig gestartet werden kann, wird Docker und Docker Compose vorausgesetzt.

### Docker Registry

Damit die Container über Docker Compose geladen werden können müssen diese über eine Docker Registry/Repository Manager (z.B. JFrog Artifactory) bereitgestellt werden.
Beispielhaft wird im Folgenden gezeigt wie die Authentifizierung am Artifactory erfolgt:

``docker login <artifactory-url>``

Unter Windows in der Git-Bash:

``winpty docker login <artifactory-url>``

Anschließend werden die Artifactory Zugangsdaten abgefragt und für zukünftige Anfragen gespeichert.

## Pre-Configuration

### Festlegen der Microservices-Service-Versionen

In der Datei `.env` müssen die Versionen bzw. Tags für die eigenen Microservices angegeben werden, z.B.

```
USER_SERVICE_VERSION=master-19
FRONTEND_VERSION=develop-39
AGENCY_SERVICE_VERSION=master-7
MESSAGE_SERVICE_VERSION=master-15
UPLOAD_SERVICE_VERSION=master-1
MAIL_SERVICE_VERSION=master-12
```

### Dateiberechtigungen

- [Dateiberechtigungen](../backend/file-permissions.md)

### SSL-Zertifikat installieren

- [SSL-Zertifikat installieren](../backend/ssl-certificate.md)

### First start

- [First Start](../backend/first-start.md)

### Configuration

- [Service configuration](../backend/service-configuration.md)

### Login data/access links

- [Login data and access links](../backend/login-data-access-links.md)

### Starting/stopping the services

- [Starting and stopping the services](../backend/starting-and-stopping-the-services.md)

### Building with Jenkins

- [Building the services with Jenkins](../backend/jenkins.md)

### NGINX configuration

- [NGINX configuration](../backend/nginx.md)
