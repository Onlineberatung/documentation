---
id: first-start
title: First start
---

> ⚠️Sicherheitshinweis ⚠️
> 
> Die hier beschriebene Konfiguration dient der Einrichtung eines Entwicklersystems.
>
> Bei einer Einrichtung als Produktivsystem müssen individuelle Benutzer und Kennwörter anstelle der hier beschriebenen vergeben werden!

Nachfolgende Schritte sind in Reihenfolge auszuführen.

## Keycloak Hostname festlegen

In der Environment-Datei für Keycloak (`./Keycloak/Keycloak.env`) müssen der Hostname und die Datenbank-Zugangsinformationen festgelegt werden:

`# Host/Adresse zur MariaDB innerhalb Docker`\
`DB_ADDR=mariadb`\
`# Datenbankname (aus der ./MariaDB/init.sql)`\
`DB_DATABASE=keycloak`\
`# Passwort für die Datenbank (aus der ./MariaDB/init.sql)`\
`DB_USER=keycloak`\
`# Passwort für die Datenbank (aus der ./MariaDB/init.sql)`\
`DB_PASSWORD=keycloak`\
`# Host/Adresse zur MariaDB innerhalb Docker`\
`KEYCLOAK_HOSTNAME=<host>`

Hostname für lokale Entwicklung z.B. ``onlineberatung.local``

## MariaDB Config anpassen

Im Ordner ``./MariaDB/config/`` befindet sich die Datei ``config-file.cnf``
Diese Datei enthält eine Zeitzonenkonfiguration, welche beim ersten Start von MariaDB für Probleme sorgt.
Daher muss diese Konfiguration beim ersten Start mit `#` auskommentiert werden.

In der Environment-Datei (`./MariaDB/MariaDB.env`) muss das Root Passwort festgelegt werden:

`# Passwort für den Benutzer root`\
`MYSQL_ROOT_PASSWORD=root`

## nginx-Konfiguration anpassen

In der nginx-Konfiguration muss der server_name in den folgenden Dateien auf den Hostname angepasst werden:

- `./nginx/server.conf`
- `./nginx/adminer.conf`
- `./nginx/server-sll.conf` (nicht für lokale Entwicklung)

`server_name <host>;`

In der Environment-Datei (`./nginx/nginx.env`) muss die Application URL festgelegt werden:

`APPLICATION_URL=<applikations-url-inkl-protokoll>` (z.B. https://onlineberatung.de)

Hostname für lokale Entwicklung z.B. ``onlineberatung.local``

Zusätzlich muss SSL lokal deaktiviert werden. Dafür folgende Anpassungen vornehmen:

1. Beim `proxy` in `docker-compose.yml` das Volume `server-ssl.conf` entfernen.
2. In `adminer.conf` den `ssl` Parameter bei `listen` entfernen, sowie alle Zeilen unterhalb bzgl. SSL.
3. In `nginx.conf` den Include von `server-ssl.conf` entfernen.
4. In `security-headers.conf` bei der CSP zusätzlich das `ws:` Protokoll erlauben

Nun muss das Rate-Limiting von Keycloak deaktiviert werden. Dazu alle Zeilen mit `limit_req` in `keycloak.conf` entfernen. Zusätzlich die Zeile `include ip-restrictions.conf;` entfernen.

Auch in `rocketchat.conf` muss die Zeile `include ip-restrictions.conf;` entfernt werden.

## MongoDB-Konfiguration anpassen

In der Environment-Datei für die MongoDB (`./mongoDB/mongoDB.env`) müssen die initialen Zugangsdaten festgelegt werden:

`# Adminbenutzer-Name für die MongoDB Verbindung`\
`MONGO_INITDB_ROOT_USERNAME=admin`\
`# Adminbenutzer-Passwort für die MongoDB Verbindung`\
`MONGO_INITDB_ROOT_PASSWORD=admin`\
`# Initiale Datenbank der MongoDB`\
`MONGO_INITDB_DATABASE=nosqlclient`

## Nosqlclient-Konfiguration anpassen

In der Environment-Datei für den Nosqlclient (`./Nosqlclient/Nosqlclient.env`) muss der Hostname und die MongoDB Connection URL festgelegt werden:

`# MongoDB Verbindung mit den Daten aus ./mongoDB/init-nosqlclient-user.js`\
`MONGO_URL=mongodb://<db_user>:<db_password>@<db_host>:<db_port>/<nosqlclient_db_name>`\
`ROOT_URL=<host>:3001`

Hostname für lokale Entwicklung z.B. ``onlineberatung.local``

## Rocket.Chat-Konfiguration anpassen

In der Environment-Datei für den Rocket.Chat (`./Rocket.Chat/Rocket.Chat.env`) muss der Hostname und die MongoDB Connection URLs festgelegt werden:

`# MongoDB Verbindung mit den Daten aus ./mongoDB/init-rocketchat-user.js`\
`MONGO_URL=mongodb://<db_user>:<db_password>@<db_host>:<db_port>/<rocketchat_db_name>`\
`ROOT_URL=<host>:3000`\
`MONGO_OPLOG_URL=mongodb://<oplog_user>:<oplog_user_password>@<db_host>:<db_port>/local?authSource=admin&replicaSet=rs0`

Hostname für lokale Entwicklung z.B. ``onlineberatung.local``

## OpenLDAP-Konfiguration anpassen

In der Environment-Datei für OpenLDAP (`./OpenLDAP/OpenLDAP.env`) muss die LDAP Konfiguration angegeben werden:

`# Organisation, in welcher die Benutzer angelegt werden`\
`LDAP_ORGANISATION=Onlineberatung`\
`# Domain, mit der die Benutzer angelegt werden`\
`LDAP_DOMAIN=onlineberatung.de`\
`# Das Administrator Kennwort für die LDAP Verbindung`\
`LDAP_ADMIN_PASSWORD=admin`\
`# Das Kennwort für die Konfiguration von OpenLDAP`\
`LDAP_CONFIG_PASSWORD=config`

## Optional: Die restart-policy aller Services auf "no" setzen

Um bei Problemen nicht ein andauernd neustartendes System zu erhalten kann die restart-policy aller Services auf `"no"` gesetzt werden.

Dadurch können Probleme behoben und die Services anschließend kontrolliert gestartet werden.

## RabbitMQ configuration

Open the file `RabbitMQ/conf/rabbitmq.conf` and change the following values:

`vm_memory_high_watermark.relative` - memory usage, read [official documentation](https://www.rabbitmq.com/production-checklist.html#resource-limits-ram) for correct setting depending on your production system. Can be changed to e.g. `vm_memory_high_watermark.absolute = 1GB` for development.\
`disk_free_limit.relative` - does not implicitly need to be changed. Refer to [official documentation](https://www.rabbitmq.com/production-checklist.html#resource-limits-disk-space) for further information.\
`default_user` - default username (will be created on first start)\
`default_pass` - password for default user

⚠️ Please be sure not to put environment variables within your `docker-compose.yml` inside the RabbitMQ container section because this will overwrite all values within the `rabbitmq.conf` file. ⚠️

### RabbitMQ management UI

__Activating the management UI on production is not recommended!__\
If you want to use the RabbitMQ management UI you need to use another Docker image. Therefore open the `docker-compose.yml` and change the RabbitMQ image from `image: rabbitmq:x.x.x-alpine` to `image: rabbitmq:x.x.x-management-alpine` (where x.x.x represent the latest version numbers). Furthermore you need to add the line `- '15672:15672'` to the proxy (NGINX) ports section and assign the RabbitMQ container the network `frontend_network` additional to the `service_network`.

You will also need to add `loopback_users.<username> = true` (where username represents the RabbitMQ default user) to the file `RabbitMQ/conf/rabbitmq.conf`. In this folder you also need to add a file `enabled_plugins` with the content `[rabbitmq_management].`.

Finally you need to add `include server/server-rabbitmq.conf;` to the `http` section of the file `nginx/conf/nginx.conf`.

If you want to use the management UI in production mode please follow the [official documentation](https://www.rabbitmq.com/management.html#configuration) to secure this endpoint.

## Alle Services starten

Gestartet werden alle Services mit folgendem Befehl im (Haupt-)Verzeichnis, wo die Datei _docker-compose.yml_ liegt: _docker-compose up -d_ (ohne -d um die Log-Ausgabe im Terminal anzuzeigen).
Das System benötigt nun ein kurze Zeit um die Keycloak-Initialisierung durchzuführen. Bitte ein paar Minuten warten.

Beim ersten Start ist es normal, dass verschiedene Dienste Fehler im Log anzeigen bzw. nicht starten können. Dieser werden mit den nächsten Konfigurationsschritten behoben.

## Keycloak Administrator Account anlegen

Anlegen des Administrator-Accounts für Keycloak:\
`docker exec keycloak /opt/jboss/keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>`

## Anlegen der Rocket.Chat-Datenbank in der mongoDB

Die Rocket.Chat-Datenbank und der zugehörige Benutzer müssen mit folgendem Befehl manuell angelegt werden:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin rocketchat /setup/init-rocketchat-user.js"`

(Unter Windows muss noch _winpty_ vor _docker_ ergänzt werden)

Initiale Admin-Benutzerdaten stehen in der `mongoDB/mongoDB.env`: `MONGO_INITDB_ROOT_USERNAME` und `MONGO_INITDB_ROOT_PASSWORD`.

Anschließend muss noch der Oplog-Benutzer über folgenden Befehl angelegt werden:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin admin /setup/init-oplog-user.js"`

Um in MongoDB ein Replica-Set (zwingend erforderlich) verwenden zu können muss die docker-compose.yml angepasst werden. Dazu wird die command-Option für den MongoDB Container wie folgt geändert:

`command: --smallfiles --oplogSize 128 --replSet rs0 --storageEngine mmapv1`

Nun muss MongoDB neugestartet werden damit das Replica-Set initialisiert werden kann:

`docker-compose up -d --no-deps mongodb`

Sobald MongoDB gestartet wurde wird das Replica-Set mit folgendem Befehl initialisiert:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin local /setup/init-replica-set.js"`

## LDAP Konfigurieren

**Hinweis:** Beim ersten Start auf einem Linux-System gab es ein Problem mit dem Verzeichnis `./OpenLDAP/slap.d`. Dieses hatte die falschen Benutzerrechte. Die Rechte müssen entsprechend geändert werden oder der Ordner neu angelegt werden. Danach kann der Container gestartet werden:

`docker start openldap`

### OpenLDAP konfigurieren

- [OpenLDAP konfigurieren](../backend/openldap-configuration.md)

## MariaDB Config zurücksetzen

Die oben gemachten Änderungen an der Zeitzonenkonfiguration zurücksetzen.

## Configuration

Anschließend sollten die [Services konfiguriert](../backend/service-configuration.md) werden.  
Also don't forget to set the correct [CORS](../backend/cors-configuration.md) settings.

## Bekannte Fehler und deren Behebung

In diesem Abschnitt werden die bekannten Fehler und deren Behebung beschrieben

### OpenLDAP startet nicht

Die Meldung `Error: the database directory (/var/lib/ldap) is empty but not the config directory (/etc/ldap/slapd.d)` bedeutet, dass im Ordner `./OpenLDAP` der Ordner `slapd.d` gelöscht werden muss. In diesem Fall sollte unter Windows nach dem Löschen des Ordners auch Docker neu gestartet werden, da ansonsten noch ein Verweis auf den Ordner besteht.

Die genaue Ursache für die Meldungen `could not stat config file "/etc/ldap/slapd.conf": No such file or directory (2)` und `daemon: bind(8) failed errno=99 (Cannot assign requested address)` konnten bisher nicht ermittelt werden. Diese Fehler sind bisher auch nur bei der Installation auf einem MAC aufgetreten und dadurch behoben werden, dass eine neuere Version des Docker-Images für openLDAP verwendet wurde.

### Keycloak-Anmeldung nicht möglich

#### Keine Anmeldung als Admin möglich - Anmeldeformular nicht aufrufbar

Sollte eine Anmeldung als Admin nicht möglich sein (Keycloak blockiert das Anmelde-Formular mit dem Hinweis, dass ein lokaler Admin benötigt wird), muss der Admin noch einmal neu angelegt werden (siehe oben: "Keycloak Administrator Account anlegen") und der Container neu gestartet werden:

`docker restart keycloak`

#### Keine Anmeldung ohne HTTPS möglich

Beim ersten Start verbietet Keycloak den Zugriff auf den Master-Realm ohne SSL. Diese Einstellung kann über die Datenbank aufgehoben werden.

Hierzu ruft man den Adminer auf und wechselt in die Datenbank "keycloak". Dort bearbeitet man in der Tabelle "realm" den Master-Datensatz und setzt die Spalte "ssl_required" auf "NONE".

Damit die Einstellung wirksam wird muss der Keycloak-Container neu gestartet werden:

`docker restart keycloak`
