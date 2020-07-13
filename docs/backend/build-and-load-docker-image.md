---
id: build-and-load-docker-image
title: Docker Image lokal bauen und in Docker laden
---
## AgencyService
### Docker-Image lokal bauen
Ein Docker-Image kann vom Service lokal mit folgendem Befehl bzw. dem Aufruf folgender Batchdatei, welche im Root-Verzeichnis des Service zu finden ist, gebaut werden:

`build-docker.cmd`

Das Image wird mit dem Tag `development` in der lokale Docker-Registry abgelegt und kann lokal für die Entwicklung verwendet werden.

### Docker-Image übertragen
Um das Docker-Image in einer andere Docker-Registry (z.B. anderer PC) zu übertragen können folgende Befehle verwendet werden:

**Export**
`docker save -o agencyservice.tar cob/agencyservice:development`

**Import**
`docker load -i agencyservice.tar`

## MailService
### Docker-Image lokal bauen
Ein Docker-Image kann vom Service lokal mit folgendem Befehl bzw. dem Aufruf folgender Batchdatei, welche im Root-Verzeichnis des Service zu finden ist, gebaut werden:

`build-docker.cmd`

Das Image wird mit dem Tag `development` in der lokale Docker-Registry abgelegt und kann lokal für die Entwicklung verwendet werden.

### Docker-Image übertragen
Um das Docker-Image in einer andere Docker-Registry (z.B. anderer PC) zu übertragen können folgende Befehle verwendet werden:

**Export**
`docker save -o mailservice.tar cob/mailservice:development`

**Import**
`docker load -i mailservice.tar`

## MessageService
### Docker-Image lokal bauen
Ein Docker-Image kann vom Service lokal mit folgendem Befehl bzw. dem Aufruf folgender Batchdatei, welche im Root-Verzeichnis des Service zu finden ist, gebaut werden:

`build-docker.cmd`

Das Image wird mit dem Tag `development` in der lokale Docker-Registry abgelegt und kann lokal für die Entwicklung verwendet werden.

### Docker-Image übertragen
Um das Docker-Image in einer andere Docker-Registry (z.B. anderer PC) zu übertragen können folgende Befehle verwendet werden:

**Export**
`docker save -o messageservice.tar cob/messageservice:development`

**Import**
`docker load -i messageservice.tar`

## UserService
### Docker-Image lokal bauen
Ein Docker-Image kann vom Service lokal mit folgendem Befehl bzw. dem Aufruf folgender Batchdatei, welche im Root-Verzeichnis des Service zu finden ist, gebaut werden:

`build-docker.cmd`

Das Image wird mit dem Tag `development` in der lokale Docker-Registry abgelegt und kann lokal für die Entwicklung verwendet werden.

### Docker-Image übertragen
Um das Docker-Image in einer andere Docker-Registry (z.B. anderer PC) zu übertragen können folgende Befehle verwendet werden:

**Export**
`docker save -o userservice.tar cob/userservice:development`

**Import**
`docker load -i userservice.tar`

## UploadService
### Docker-Image lokal bauen
Ein Docker-Image kann vom Service lokal mit folgendem Befehl bzw. dem Aufruf folgender Batchdatei, welche im Root-Verzeichnis des Service zu finden ist, gebaut werden:

`build-docker.cmd`

Das Image wird mit dem Tag `development` in der lokale Docker-Registry abgelegt und kann lokal für die Entwicklung verwendet werden.

### Docker-Image übertragen
Um das Docker-Image in einer andere Docker-Registry (z.B. anderer PC) zu übertragen können folgende Befehle verwendet werden:

**Export**
`docker save -o uploadservice.tar cob/uploadservice:development`

**Import**
`docker load -i uploadservice.tar`