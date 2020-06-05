---
id: jenkins
title: Einrichten des Build-Prozesses über Jenkins
---
In jedem Repository befindet sich ein Jenkinsfile, das für den Buildprozess über Jenkins verwendet werden kann:

`\Jenkinsfile`

Für die Einrichtung der Build-Pipeline wird im Jenkins ein neuer Auftrag vom Typ __Pipeline__ angelegt.

## Parametrisierung
Der Auftrag sollte als parametrisiert markiert werden ("Dieser Build ist parametrisiert") und ein _Text-Parameter_ angelegt werden:

```
Text-Parameter
Name: BRANCH_NAME
Vorgabewert: <Name des gewünschten Standard-Branches, z.B. develop>
```

Dadurch kann beim Starten des Build-Prozess der Branch angegeben werden, für den der Build durchgeführt werden soll.

## Pipeline
Bei der Pipeline-Definition wird der Typ __Pipline script from SCM__ gewählt und der Zugriff auf das Repository entsprechend konfiguriert. Hierbei sind ggf. die Benutzerdaten mit anzugeben. 

Als __Branches to build__ sollte die Variable aus der Parametrisierung wie folgt angegeben werden:

`*/${BRANCH_NAME}`

## Globale System-Variablen
Für die Ausführung des Build-Prozesses müssen im Jenkins noch folgende globalen Variablen definiert werden (_Jenkins verwalten_ -> _System konfigurieren_ -> _Globale Eigenschaften_ -> _Umgebungsvariablen_)

```
ARTIFACT_GROUP=<Artefakt-Gruppe für alle Services, z.B. online-beratung>
ARTIFACT_NAME_MAILSERVICE=<Artefakt-Name für diesen Service, z.B. mailservice>
DOCKER_REGISTRY=<Docker-Registry-Name>
DOCKER_REGISTRY_URL=<Docker-Registry-URL mit Protokoll (z.B.https)>
DOCKER_REGISTRY_CREDENTIALS_ID=<Jenkins-ID der Credentials für die Registry>
```