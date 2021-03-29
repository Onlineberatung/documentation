---
id: install-and-running-locally
title: Installing and running the backend for local development
---

Im Folgenden werden die speziellen Voraussetzungen und Tools genannt welche für die lokale Entwicklung benötigt werden.

## Voraussetzungen

### docker-compose

Damit die ganze Umgebung mit ihren Abhängigkeiten richtig gestartet werden kann, wird Docker und Docker Compose vorausgesetzt.

### docker Ressourcen

Um das Backend lokal stabil laufen lassen zu können, müssen Docker genügend Ressourcen zur verfügung stehen.\
Unter Windows sollte darauf geachtet werden, dass in den Docker Settings / Ressourcen mindestens `7GB RAM` und `3GB SWAP` sowie `2 CPUs` bereitgestellt werden. 

### Zeit und Zeitzonen der Docker-Container

Damit die Docker-Container die Zeit und Zeitzonen des Host-Systems übernehmen besteht ein Mapping über ein Volume zwischen `/etc/localtime` des Host-Systems und des Docker-Containers. Dieses ist in der der Datei `docker-compose.yml` für jeden Service hinterlegt:

```
volumes:
    ...
    - /etc/localtime:/etc/localtime:ro
```

Da `/etc/localtime` nur auf Linux-Systemen zur Verfügung steht muss die Zeile

```
- /etc/localtime:/etc/localtime:ro
```

für den Betrieb auf Windows-System bei allen Services in der Datei `docker-compose.yml` entfernt werden.

### 

Auf lokalen Windows-Umgebungen wird kein Hosts-Eintrag für die Services benötigt. Darum muss bei jedem Service der folgende Eintrag in der Datei `docker-compose.yml` entfernt werden:

```
extra_hosts:
    - "<app_domain>:<internal_server_ip_address>"
```

### Domainname

Der lokale Hostname (z.B. _**onlineberatung.local**_) muss auf die eigene IP-Adresse zeigen. Hier darf _nicht_ die 127.0.0.1 verwendet werden, sondern die IP-Adresse, die dem Netzwerk-Adapter zugewiesen wurde (Einzustellen in der Betriebssystem hosts Datei, bei Windows _C:\Windows\System32\drivers\etc\hosts_).

### _optional_: Docker Registry

Damit die Container über Docker Compose geladen werden können müssen diese über eine Docker Registry/Repository Manager (z.B. GitHub Packages) bereitgestellt werden. Sollte kein solcher Dienst zur Verfügung stehen, können die Docker Images auch [lokal gebaut](../backend/build-and-load-docker-image.md) werden.

Beispielhaft wird im Folgenden gezeigt wie die Authentifizierung an GitHub Packages erfolgt:

```sh
echo $GITHUB_TOKEN | docker login https://docker.pkg.github.com -u USERNAME --password-stdin
```

Siehe auch die [Dokumentation von Github bzgl. Docker Login](https://docs.github.com/en/packages/guides/configuring-docker-for-use-with-github-packages#authenticating-with-a-personal-access-token).

Unter Windows in der Git-Bash:

```sh
winpty docker login docker.pkg.github.com
```

Anschließend werden die Zugangsdaten abgefragt und für zukünftige Anfragen gespeichert.

### Node.js und NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools.

**NPM** is the Node Package Manager and is used to install all packages needed in this project. This includes packages for the conventional commits process and versioning management.

1. Install Node.js as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install [NPM](https://www.npmjs.com/get-npm) and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.
4. Run `npm install` in your project directory to install the dependencies in the local node_modules folder.

### IDE

Folgende Plugins sollten in der IDE installiert sein:

- Lombok
- Maven
- Codestyle Checker für Google Java Code Style (https://github.com/google/styleguide)

Für intelliJ kann unter folgendem Link der Google Code Style zum Importieren heruntergeladen werden: https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml

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

3. `maven install` und `maven generate-sources` ausführen.

## Pre-Configuration

### Festlegen der Microservices-Service-Versionen

In der Datei `.env` müssen die Versionen bzw. Tags für die eigenen Microservices angegeben werden, z.B.

```
AGENCY_SERVICE_VERSION=dockerImage.v.21.release-2021-03-02
FRONTEND_VERSION=dockerimage.v.7-release-2020-10-13
LIVE_SERVICE_VERSION=dockerimage.v.14.release-2021-02-09
MAIL_SERVICE_VERSION=dockerimage.v.13.release-2021-03-23
MESSAGE_SERVICE_VERSION=dockerimage.v.25.release-2021-03-23
UPLOAD_SERVICE_VERSION=dockerimage.v.19.release-2021-03-02
USER_SERVICE_VERSION=dockerImage.v.78.release-2021-03-23
VIDEO_SERVICE_VERSION=dockerImage.v.9.release-2021-02-08
NGINX_SERVICE_VERSION=dockerImage.v.4.release-2020-11-03
```

Aktuelle Service-Versionen können auf der [Releases-Seite](../releases/overview.md) gefunden werden.

Sollte keine Docker Registry verfügbar sein müssen die Services zuerst [lokal gebaut](../backend/build-and-load-docker-image.md) werden und anschließend in der `docker-compose.yml` hinterlegt werden, z.B.

```
    userservice:
        image: cob/userservice:development
```

Andernfalls muss in der `docker-compose.yml` lediglich die `<image_server_url>` mit der URL zur Registry ersetzt werden, der Imagename wird dann durch die jeweiligen Variablen aus Datei `.env` ersetzt.

### _optional_: Frontend-Konfiguration anpassen

Diese Konfiguration ist nur notwendig, sofern man beim Frontend nicht den Docker-Container, sondern lokale Dateien verwenden möchte.

Hierzu muss in der `docker-compose.yml` des Backends ein zusätzliches Volume für den Frontend-Container definiert werden (zusätzlich unter "volumes:"):

`- <LOKALER_ORDNER>:/usr/share/nginx/html`

Die Fronted-Dateien müssen dann in den lokalen Ordner gelegt werden und werden dann anstelle der Frontend-Dateien im Container ausgeliefert.

### Dateiberechtigungen unter Linux einstellen

- [Dateiberechtigungen (nur Linux)](../backend/file-permissions.md)

### First start

- [First Start](../backend/first-start.md)

### Configuration

- [Service configuration](../backend/service-configuration.md)
- [CORS configuration](../backend/cors-configuration.md)

### Login data/access links

- [Login data and access links](../backend/login-data-access-links.md)

### Starting/stopping the services

- [Starting and stopping the services](../backend/starting-and-stopping-the-services.md)

### Docker-Image lokal bauen

- [Docker Images lokal bauen und einbinden](../backend/build-and-load-docker-image.md)
