---
id: starting-and-stopping-the-services
title: Starting and stopping the services
---
## Alle Services starten
Gestartet werden alle Services mit folgendem Befehl im (Haupt-)Verzeichnis, wo die Datei *docker-compose.yml* liegt: *docker-compose up -d*

### Set master keys
After the start of Message- and UserService one has to provide the master key for message encryption to the services.
Therefore you need to call the [REST API endpoints](../backend/login-data-access-links.md) to set the master key with the technical (Keycloak) user and correct CSRF header and cookie key value pairs. In the body you should provide the key, e.q.:

__Note: The master key for the userservice and for the messageservice must be the same__!

``{
	"masterKey": "<masterKey>"
}``

* MessageService: POST on https://<host>/service/messages/key
* UserService: POST on https://<host>/service/users/messages/key

## Alle Services stoppen
Stoppen aller Services mit folgendem Befehl im Verzeichnis, wo die Datei *docker-compose.yml* liegt: *docker-compose down*

### Bei Problemen:
* Starten aller Services mit dem Befehl *docker-compose up* (ohne *-d*). Das Starten der Komponenten erfolgt dann nicht im Hintergrund und alle Log-Ausgaben werden in der Konsole ausgegeben.
* Mit *docker logs <containerName>* kann alternativ das Log vom Starten des angegebenen Containers angeschaut werden.