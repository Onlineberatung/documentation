---
id: first-start
title: First start
---

* auto-gen TOC:
{:toc}

Nachfolgende Schritte sind in Reihenfolge auszuführen.

### Keycloak Hostname festlegen
In der Environment-Datei für Keycloak (``./Keycloak/Keycloak.env``) muss der Hostname festgelegt werden:

``KEYCLOAK_HOSTNAME=<hostname>``

Hostname für lokale Entwicklung: ❌onlineberatung.local

### MariaDB Config anpassen
Im Ordner ./MariaDB/config/ befindet sich die Datei config-file.cnf
Diese Datei enthält eine Zeitzonenkonfiguration, welche beim ersten Start von MariaDB für Probleme sorgt.
Daher muss diese Konfiguration beim ersten Start auskommentiert werden.

### nginx-Konfiguration anpassen
In der nginx-Konfiguration muss der server_name in den folgenden Dateien auf den Hostname angepasst werden:

- ``./nginx/server.conf``
- ``./nginx/adminer.conf``
- ``./nginx/server-sll.conf`` (nicht für lokale Entwicklung)

``server_name <hostname>;``

Hostname für lokale Entwicklung: ❌onlineberatung.local

### Nosqlclient-Konfiguration anpassen
In der Environment-Datei für den Nosqlclient (``./Nosqlclient/Nosqlclient.env``) muss der Hostname festgelegt werden:

``ROOT_URL=<hostname>:3001``

Hostname für lokale Entwicklung: ❌onlineberatung.local

### Rocket.Chat-Konfiguration anpassen
In der Environment-Datei für den Rocket.Chat (``./Rocket.Chat/Rocket.Chat.env``) muss der Hostname festgelegt werden:

``ROOT_URL=<hostname>:3000``

Hostname für lokale Entwicklung: ❌onlineberatung.local

### UserService-Konfiguration anpassen
In der Environment-Datei für den UserService (``./UserService/UserService.env``) muss der Hostname für Keycloak und die Rocket.Chat-API festgelegt werden:

``KEYCLOAK_AUTH_SERVER_URL=http(s)://<HOSTNAME>/auth``
``ROCKET_CHAT_API_URL=http(s)://<HOSTNAME>/api/v1``

### MessageService-Konfiguration anpassen
In der Environment-Datei für den MessageService (``./MessageService/MessageService.env``) muss der Hostname für Keycloak und die Rocket.Chat-API festgelegt werden:

``KEYCLOAK_AUTH_SERVER_URL=http(s)://nginx/auth``
``ROCKET_CHAT_API_URL=http(s)://<HOSTNAME>/api/v1``

### Alle Services starten
Gestartet werden alle Services mit folgendem Befehl im (Haupt-)Verzeichnis, wo die Datei *docker-compose.yml* liegt: *docker-compose up -d* (ohne -d um die Log-Ausgabe im Terminal anzuzeigen).
Das System benötigt nun ein kurze Zeit um die Keycloak-Initialisierung durchzuführen. Bitte ein paar Minuten warten.

Beim ersten Start ist es normal, dass verschiedene Dienste Fehler im Log anzeigen. Dieser werden mit den nächsten Konfigurationsschritten behoben.

### Keycloak Administrator Account anlegen
Anlegen des Administrator-Accounts für Keycloak:
```docker exec keycloak keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>```

### Anlegen der Rocket.Chat-Datenbank in der mongoDB
Die Rocket.Chat-Datenbank und der zugehörige Benutzer müssen mit folgendem Befehl manuell angelegt werden:

```docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin rocketchat /setup/init-rocketchat-user.js"```

(Unter Windows muss noch *winpty* vor *docker* ergänzt werden)

Initiale Admin-Benutzerdaten: admin/admin (ADMIN_USER/ADMIN_PASSWORD)

### LDAP Konfigurieren
**Hinweis:** Beim ersten Start auf einem Linux-System gab es ein Problem mit dem Verzeichnis ``./OpenLDAP/slap.d``. Dieses hatte die falschen Benutzerrechte. Die Rechte müssen entsprechend geändert werden oder der Ordner neu angelegt werden. Danach kann der Container gestartet werden:

``docker start openldap``

#### OpenLDAP konfigurieren
* [OpenLDAP konfigurieren](https://github.com/CaritasDeutschland/.github/wiki/OpenLDAP-konfigurieren)

### MariaDB Config zurücksetzen
Die oben gemachten Änderungen an der Zeitzohnenkonfiguration zurücksetzen.

### Restart aller Services
Restart aller Services durch *docker-compose restart*

### Configuration
Damit ist der erste Start abgeschlossen - nun sollten die [Services konfiguriert](https://github.com/CaritasDeutschland/.github/wiki/Service-configuration) werden.

## Bekannte Fehler und deren Behebung
In diesem Abschnitt werden die bekannten Fehler und deren Behebung beschrieben

### OpenLDAP startet nicht
Die Meldung ```Error: the database directory (/var/lib/ldap) is empty but not the config directory (/etc/ldap/slapd.d)``` bedeutet, dass im Ordner ```./OpenLDAP``` der Ordner ```slapd.d``` gelöscht werden muss.

Die genaue Ursache für die Meldungen ```could not stat config file "/etc/ldap/slapd.conf": No such file or directory (2)``` und ```daemon: bind(8) failed errno=99 (Cannot assign requested address)``` konnten bisher nicht ermittelt werden. Diese Fehler sind bisher auch nur bei der Installation auf einem MAC aufgetreten und dadurch behoben werden, dass eine neuere Version des Docker-Images für openLDAP verwendet wurde.

### Keycloak-Anmeldung nicht möglich
#### Keine Anmeldung als Admin möglich - Anmeldeformular nicht aufrufbar
Sollte eine Anmeldung als Admin nicht möglich sein (Keycloak blockiert das Anmelde-Formular mit dem Hinweis, dass ein lokaler Admin benötigt wird), muss der Admin noch einmal neu angelegt werden (siehe oben: "Keycloak Administrator Account anlegen") und der Container neu gestartet werden:

``docker restart keycloak``

#### Keine Anmeldung ohne HTTPS möglich
Beim ersten Start verbietet Keycloak den Zugriff auf den Master-Realm ohne SSL. Diese Einstellung kann über die Datenbank aufgehoben werden.

Hierzu ruft man den Adminer auf und wechselt in die Datenbank "keycloak". Dort bearbeitet man in der Tabelle "realm" den Master-Datensatz und setzt die Spalte "ssl_required" auf "NONE".

Damit die Einstellung wirksam wird muss der Keycloak-Container neu gestartet werden:

``docker restart keycloak``
