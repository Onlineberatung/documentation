---
id: install-and-running-on-server
title: Installing and running on the server
---

* auto-gen TOC:
{:toc}

Im Folgenden werden die speziellen Voraussetzungen und Tools genannt welche für den Betrieb der ❌Onlineberatung auf dem (Production-)Server benötigt werden.

## Voraussetzungen
### docker-compose
Damit die ganze Umgebung mit ihren Abhängigkeiten richtig gestartet werden kann, wird Docker und Docker Compose vorausgesetzt.

### Docker Registry
Damit die Container über Docker Compose geladen werden können müssen diese über eine Docker Registry/Repository Manager (z.B. JFrog Artifactory) bereitgestellt werden.
Beispielhaft wird im Folgenden gezeigt wie die Authentifizierung am Artifactory erfolgt:

``docker login https://<artifactNam>.jfrog.io``

Unter Windows in der Git-Bash:

``winpty docker login https://<artifactName>.jfrog.io``

Anschließend werden die Artifactory Zugangsdaten abgefragt und für zukünftige Anfragen gespeichert.

## Pre-Configuration
### Festlegen der Microservices-Service-Versionen
In der Datei ```.env``` müssen die Versionen bzw. Tags für die eigenen Microservices angegeben werden, z.B.

```
USER_SERVICE_VERSION=master-19
FRONTEND_VERSION=develop-39
AGENCY_SERVICE_VERSION=master-7
MESSAGE_SERVICE_VERSION=master-15
MAIL_SERVICE_VERSION=master-12
```

### Dateiberechtigungen
* [Dateiberechtigungen](https://github.com/CaritasDeutschland/.github/wiki/File-permissions)

### SSL-Zertifikat installieren
* [SSL-Zertifikat installieren](https://github.com/CaritasDeutschland/.github/wiki/SSL-certificate)

## First start
* ❌[First Start](https://github.com/CaritasDeutschland/.github/wiki/First-start)

## Configuration
* ❌[Service configuration](https://github.com/CaritasDeutschland/.github/wiki/Service-configuration)

## Starting/stopping the services
* ❌[Starting and stopping the services](https://github.com/CaritasDeutschland/.github/wiki/Starting-and-stopping-the-services)
