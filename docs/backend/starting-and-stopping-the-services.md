---
id: starting-and-stopping-the-services
title: Starting and stopping the services
---

## Alle Services starten
Gestartet werden alle Services mit folgendem Befehl im (Haupt-)Verzeichnis, wo die Datei *docker-compose.yml* liegt: *docker-compose up -d*  

## Alle Services stoppen
Stoppen aller Services mit folgendem Befehl im Verzeichnis, wo die Datei *docker-compose.yml* liegt: *docker-compose down*

### Bei Problemen:
* Starten aller Services mit dem Befehl *docker-compose up* (ohne *-d*). Das Starten der Komponenten erfolgt dann nicht im Hintergrund und alle Log-Ausgaben werden in der Konsole ausgegeben.
* Mit *docker logs <containerName>* kann alternativ das Log vom Starten des angegebenen Containers angeschaut werden.