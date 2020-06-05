---
id: install-and-running-locally
title: Installing and running the backend for local development
---
Im Folgenden werden die speziellen Voraussetzungen und Tools genannt welche für die lokale Entwicklung benötigt werden.

## Voraussetzungen
### docker-compose
Damit die ganze Umgebung mit ihren Abhängigkeiten richtig gestartet werden kann, wird Docker und Docker Compose vorausgesetzt.

### Domainname
_**❌onlineberatung❌.local**_ muss auf die eigene IP-Adresse zeigen. Hier darf *nicht* die 127.0.0.1 verwendet werden, sondern die IP-Adresse, die dem Netzwerk-Adapter zugewiesen wurde (Einzustellen in der Betriebssystem hosts Datei, bei Windows *C:\Windows\System32\drivers\etc\hosts*).

### _optional_: Docker Registry
Damit die Container über Docker Compose geladen werden können müssen diese über eine Docker Registry/Repository Manager (z.B. JFrog Artifactory) bereitgestellt werden. Sollte kein solcher Dienst zur Verfügung stehen, können die Docker Images auch [lokal gebaut](../backend/build-and-load-docker-image.md) werden.
Beispielhaft wird im Folgenden gezeigt wie die Authentifizierung am Artifactory erfolgt:

``docker login https://viartifacts-docker.jfrog.io``

Unter Windows in der Git-Bash:

``winpty docker login https://viartifacts-docker.jfrog.io``

Anschließend werden die Artifactory Zugangsdaten abgefragt und für zukünftige Anfragen gespeichert.

### Node.js und NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. 

**NPM** is the Node Package Manager and is used to install all packages needed in this project. This includes packages for the conventional commits process and versioning management.

1. Install Node.js as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install [NPM](https://www.npmjs.com/get-npm) and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.
4. Run `npm install` in your project directory to install the dependencies in the local node_modules folder.

### IDE
Folgende Plugins sollten in der IDE installiert sein:
* Lombok
* Maven
* Codestyle Checker für Google Java Code Style (https://github.com/google/styleguide)

Zudem sollte beim Compiler Compliance Level Version 1.8.0 (OpenJDK) gewählt werden.

Beispielhaft wird die Konfiguration in Eclipse im Folgenden beschrieben:
1. Alle allgemeinen Konfigurationsparameter werden in der /resources/application.properties gesetzt. Spezielle (Entwicklungs)umgebungsvariablen, wie z.B. Datenbank-Verbindungsdaten, können in der jeweiligen application-[environment].properties Datei gesetzt werden.
Das aktuell verwendete Profil ist in der pom.xml standardmäßig auf "local" gesetzt.
Sollte es notwendig sein, das Profil zu ändern gibt es folgende Möglichkeiten:
- Maven beim Command folgendes Property mitgeben: -PactiveSpringProfile=local/dev/prod (Beispiel: mvn install -PactiveSpringProfile=dev)
- Die "spring.profiles.active" als Environmentvariable in den Run-Configurations festlegen (Rechtsklick auf das Projekt -> "Run As" -> "Run Configurations" -> die jeweilige Konfiguration auswählen -> Reiter "Environment" -> "New")
- Folgenden JVM System Parameter mitgeben: -Dspring.profiles.active=dev/prod/local
- Ändern des Werts "spring.profiles.active" in der application.properties (nicht empfohlen, da dann der Platzhalter für Maven fehlt)

2. In Eclipse muss unter Umständen zusätzlich noch der Ordner "target/generated-sources" id den Projekteinstellungen ("Java Build Path" -> "Sources") hinzugefügt werden.

3. ``maven install`` und ``maven generate-sources`` ausführen.

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

Sollte keine Docker Registry verfügbar sein müssen die Services zuerst [lokal gebaut](../backend/build-and-load-docker-image.md) werden und anschließend in der ```docker-compose.yml``` hinterlegt werden, z.B.

```
    userservice:
        image: cob/userservice:development
```
Andernfalls muss in der ```docker-compose.yml``` lediglich die ```<image_server_url>``` mit der URL zur Registry ersetzt werden, der Imagename wird dann durch die jeweiligen Variablen aus Datei ```.env``` ersetzt.

### UserService-Konfiguration anpassen
ℹ️ Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss zusätzlich noch folgende Environment-Variable gesetzt werden:

``KEYCLOAK_CORS=true``

### MessageService-Konfiguration anpassen
ℹ️ Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss zusätzlich noch folgende Environment-Variable In der Environment-Datei für den AgencyService (``./AgencyService/AgencyService.env``) gesetzt werden:

``KEYCLOAK_CORS=true``

### AgencyService-Konfiguration anpassen
ℹ️ Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss folgende Environment-Variable gesetzt werden:

``KEYCLOAK_CORS=true``

### _optional_: Frontend-Konfiguration anpassen
Diese Konfiguration ist nur notwendig, sofern man beim Frontend nicht den Docker-Container, sondern lokale Dateien, verwenden möchte.

Hierzu muss in der ``docker-compose.yml`` des Backends ein zusätzliches Volume für den Frontend-Container definiert werden (zusätzlich unter "volumes:"):

``- <LOKALER_ORDNER>:/usr/share/nginx/html``

Die Fronted-Dateien müssen dann in den lokalen Ordner gelegt werden und werden dann anstelle der Frontend-Dateien im Container ausgeliefert.

### Dateiberechtigungen unter Linux einstellen
* [Dateiberechtigungen (nur Linux)](../backend/file-permissions.md)

### First start
* [First Start](../backend/first-start.md)

### Configuration
* [Service configuration](../backend/service-configuration.md)

### Login data/access links
* [Login data and access links](../backend/login-data-access-links.md)

### Starting/stopping the services
* [Starting and stopping the services](../backend/starting-and-stopping-the-services.md)

### Docker-Image lokal bauen
* [Docker Images lokal bauen und einbinden](../backend/build-and-load-docker-image.md)