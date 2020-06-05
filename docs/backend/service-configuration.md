---
id: service-configuration
title: Service configuration
---
Für manche Komponenten ist eine Ersteinrichtung erforderlich.
Diese sind hier aufgeführt.

## Rocket.Chat
Bei der ersten Anmeldung muss der Administratoren Account eingerichtet werden.
Dazu wird einfach den Schritten im Assistenten gefolgt (http://`<HOST>`:3000).
Als Typ wird dabei eine lokale Installation gewählt.

__Weitere Konfigurationsschritte:__

### LDAP konfigurieren:
Rocket.Chat muss noch mit LDAP verbunden werden - dazu folgende Einstellungen im Administrationsbereich, Menüpunkt _LDAP_, übernehmen:

| Feld | Wert | Bemerkung |
|-|-|-|
| **Basic Settings** | | |
| Enable | True | |
| Login Fallback | True | Wichtig, da sich der initiale Admin ansonsten nicht mehr einloggen kann, da nicht im LDAP vorhanden |
| Find user after login | False | |
| Host | openldap | |
| Port | 389 | |
| Reconnect | True | |
| Encryption | No Encryption | |
| CA Cert | | |
| Reject Unauthorized | True | |
| Base DN | ou=users,ou=cob,dc=❌onlineberatung,dc=de | |
| Internal Log Level | INFO | |
| **Authentication **| | |
| Enable | True | |
| User DN | cn=admin,dc=❌onlineberatung,dc=de | |
| Password | <PASSWORT> | → Standard-PW: admin |
| **Sync / Import** | | |
| Username Field | uid | |
| Unique Identifier Field | objectGUID,ibm-entryUUID,GUID,dominoUNID,nsuniqueId,uidNumber | |
| Default Domain | | |
| Merge Existing Users | True | |
| Sync User Data | False | |
| User Data Field Map | {"cn":"name", "mail":"email"} | |
| Sync User Avatar | False | |
| Background Sync | False | |
| **Timeouts**| | |
| Timeout (ms) | 60000 | |
| Connection Timeout (ms) | 1000 | |
| Idle Timeout (ms) | 1000 | |
| **User Search** | | |
| Filter | (objectclass=*) | |
| Scope | sub | |
| Search Field | uid,mail | |
| Search Page Size | 250 | |
| Search Limit Size | 1000 | |
| **User Search (Group Validation)** | | |
| Enable LDAP User Group Filter | False | |

### Technischen Benutzer und Rolle anlegen
1. Rolle anlegen/Rechte festlegen
* Unter _"Permissions"_ über den Button _"New Role"_ die Rolle _"technical"_ mit Scope _"Global"_ anlegen.
* Der Rolle folgende Rechte hinzufügen (Haken setzen):
    * _[add-user-to-any-p-room]_
    * _[api-bypass-rate-limit]_
    * _[clean-channel-history]_
    * _[delete-p]_
    * _[delete-user]_
    * _[remove-user]_
    * _[view-room-administration]_
2. Benutzer anlegen
* Unter _"Users"_ einen neuen Benutzer _"technical"_ anlegen und die eben erstellte Rolle _"technical"_ zuweisen.
* **Weitere Einstellungen des technischen Benutzer:**
    * Verified = ja
    * Require password change = nein
    * Join default channels = Nicht selektiert
    * Send welcome email = Nicht selektiert

### Benutzer und Rolle für System-Nachrichten anlegen
1. Rolle anlegen/Rechte festlegen
* Unter _"Permissions"_ über den Button _"New Role"_ die Rolle _"system"_ mit Scope _"Global"_ anlegen.
* Dieser Rolle nun die folgende Rechte zuweisen:
    * _[api-bypass-rate-limit]_
    * _[create-p]_ 
    * _[view-room-administration]_
2. Benutzer anlegen
* Unter _"Users"_ einen neuen Benutzer _"system"_ anlegen und die Rollen _"user"_ und _"system"_ zuweisen.
* **Weitere Einstellungen des System-Benutzer:**
    * Verified = ja
    * Require password change = nein
    * Join default channels = Nicht selektiert
    * Send welcome email = Nicht selektiert

### Bot-User löschen
Unter _"Users"_ muss noch der BOT (Rocket Cat) gelöscht werden.

### Gelesen-Status konfigurieren
Damit der Gelesen-Status für Nachrichten korrekt von Rocket.Chat getracked wird muss unter _"Administration"_ → _"General_" → _"Unread Count_" folgende Einstellung gesetzt werden: _"All Messages_"

### File-Upload konfigurieren
Für die File-Uploads wird das Filesystem bevorzugt. Der Upload-Ordner kann über ein Volume dann außerhalb des Docker-Containers gehalten werden.
Dafür muss unter _"Administration"_ → _"File Upload"_ die Konfiguration wie folgt angepasst werden:

| Feld | Wert | Bemerkung |
|-|-|-|
| File Uploads Enabled | True | |
| Maximum File Upload Size (in bytes) | 5242880 | 5MB |
| Accepted Media Types | image/jpeg,image/png,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | jpg, png, pdf, docx, xlsx |
| Protect Uploaded Files | True | |
| Storage Type | FileSystem | |
| File Uploads Enabled in Direct Messages | True | |
| File System | | |
| System Path | /app/user_uploads | Dieses Verzeichnis wird auf das Host-System gemounted, damit die hochgeladenen Dateien nicht im Container liegen. Da Rocket.Chat die als eigenen RocketChat-Benutzer mit der UID 99999 ablegt, wird der Besitzer des Verzeichnisses auf dem Host-System auf die UID 99999 gesetzt. Diesen Benutzer gibts es auf dem Linux nicht, aber dadurch können die Rechte für das Verzeichnis eingeschränkt werden. Besitzer: 99999 Gruppe: docker Permissions: 744

### Nur lokal: CORS für Frontend-Entwicklung aktivieren
Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss in Rocket.Chat in der Administration unter dem Punkt _"General"_ → _"REST API"_ die Einstellung _"Enable Cors"_ auf _"true"_ gesetzt werden.

### API Rate Limiter
Unter den Berechtigungen muss für user, technical und systemuser jeweils _[api-bypass-rate-limit]_ angehakt werden. Sowie unter _"Rate Limiter"_ → _"API Rate Limiter"_ dieser für Development/lokal deaktiviert werden und am besten die erlaubten Calls auf 10k+ hochgesetzt werden.

⚠️Für Produktiv sollte das Rate Limiting nicht deaktiviert werden, bzw. sollte mit den Einstellungen des nginx ausbalanciert sein! ⚠️

## Keycloak
### Realm
Es muss der Realm aus dem Projektverzeichnis importiert werden (Verzeichnis im Repo: _caritas-online-beratung-backend\Keycloak_).

Before importing the basic settings you need to change some realm settings manually in the _realm-export.json_ file:

| Name | Value |
| ---- | ----- |
| redirectUris | Host mit Wildcard eintragen (z.B. https://anwendung.de/*) |
| webOrigins | Erlaubte Origins eintragen (z.B. https://anwendung.de) |
| "clientId": "account" {baseUrl} | Keycloak URL zum Keycloak Account GUI (z.B. /auth/realms/<anwendungs_realm_name>/account) |
| "clientId": "account" {redirectUris} | Keycloak Redirect URIs zum Keycloak Account GUI (z.B. /auth/realms/<anwendungs_realm_name>/account) |
| "clientId": "security-admin-console" {baseUrl} | Keycloak URL zum Keycloak Admin GUI (z.B. "/auth/admin/<anwendungs_realm_name>/console/index.html") |
| "clientId": "security-admin-console" {redirectUris} | Keycloak Redirect URIs zum Keycloak Admin GUI (z.B. "/auth/admin/<anwendungs_realm_name>/console/index.html") |
| "smtpServer": {port} | SMTP Server Port |
| "smtpServer": {host} | SMTP Server Host |
| "smtpServer": {from} | SMTP Absender Adresse |
| "smtpServer": {fromDisplayName} | SMTP Absender Name |
| "smtpServer": {user} | SMTP Server Benutzer |
| "org.keycloak.storage.UserStorageProvider" : "config" : "usersDn" | Distinguished Names für User (z.B. "ou=users,ou=WebApp,dc=anwendung,dc=de") |
| "org.keycloak.storage.UserStorageProvider" : "config" : "bindDn" | Distinguished Names für Admin (z.B. "cn=admin,dc=anwendung,dc=de") |

Um die JSON-Datei zu importieren muss man einen neuen Realm in Keycloak anlegen.
Dazu öffnet man das DropDownMenü direkt unterhalb des Keycloak-Logos (derzeit ist dort der Master-Realm ausgewählt) und klick auf _"Add realm"_.
In der sich daraufhin öffnenden Maske lädt man die JSON Datei hoch.

### LDAP
Im Anschluss muss noch die Verbindung zu LDAP aktualisiert werden, da in dem Realm-Export das Passwort nicht mit exportiert wird.
Dazu geht man auf _"User Federation"_ und wählt dort _"ldap"_ aus. In den sich daraufhin öffnenden Konfigurationsfeldern aktualisiert man das Feld _"Bind Credential"_ mit dem für den LDAP-Admin gesetzten Passwort (Initial-Passwort: admin).
Die Funktionstüchtigkeit kann mit _"Test authentication"_ geprüft werden.
Zum Schluss das ganze noch mit dem _"save"_ Button ganz unten speichern.

### Technischer Benutzer für E-Mail-Prüfung
Für die Überprüfung auf bereits vergebene E-Mail-Adressen in Keycloak muss ein technischer Benutzer über die Benutzerverwaltung von Keycloak eingerichtet werden. Dieser Benutzer benötigt nur einen Namen aber kein Passwort oder sonstige Daten und Einstellungen.

### Technischer Benutzer für Registrierung
Für die Registrierung neuer Ratsuchender in Keycloak muss ein technischer Benutzer über die Benutzerverwaltung von Keycloak eingerichtet werden. Dieser Benutzer benötigt einen Namen, ein Passwort und folgende Rollen-Einstellungen:

1. Unter _"Client Roles"_ → _"realm-management"_ auswählen und unter _"Assigned Roles"_ sollten folgende Rollen stehen:
    * manage-users
    * view-realm
2. Unter _"Client Roles"_ → _"account"_ auswählen und alle unter _"Assigned Roles"_ entfernen

### Password policies
The same password policies that are defined in keycloak are deposited hard-coded in the UserService (UserHelper.java).

## Verbindungen im Nosqlclient einrichten
Damit man sich mit dem Nosqlclient mit der MongoDB verbinden kann müssen entsprechende Verbindungen eingerichtet werden. Dazu muss der Nosqlclient aufgerufen werden und oben rechts _"Connect"_ und im folgenden Dialog _"Create New"_ ausgewählt werden.

Folgende Verbindungsdaten müssen für die Rocket.Chat-DB verwendet werden:

| Name        | Host    | Port  | Database name | Authentication type | Username    | Passwort    | Authentication DB |
| ----------- | ------- | ----- | ------------- | ------------------- | ----------- | ----------- | ----------------- |
| Rocket.Chat | mongodb | 27017 | rocketchat    | Scram-Sha-1         | rocketchat* | rocketchat* | rocketchat        |

\* Es handelt sich hierbei um das initiale Passwort bei der Erstinstallation. Dieses muss ggf. noch angepasst werden.

## AgencyService
Die Konfiguration des Services auf dem Server erfolgt in der AgencyService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden.

Folgende Werte müssen zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| SPRING_DATASOURCE_URL | Connection URL: jdbc:mariadb://<host>:<port>/agencyservice |
| SPRING_DATASOURCE_USERNAME | Username for AgencyService database user |
| SPRING_DATASOURCE_PASSWORD | Password for AgencyService database user |
| SPRING_LIQUIBASE_USER | Username for AgencyService liquibase database user |
| SPRING_LIQUIBASE_PASSWORD | Password for AgencyService liquibase database user |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://<host>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | agency-service |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |
| [CONSULTING_TYPE_NAME]_WHITE_SPOT_AGENCY_ID | Define the white spot agency IDs where needed for every consulting type |

## MailService
Die Konfiguration des Services auf dem Server erfolgt in der MailService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden.

Folgende Werte müssen zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| APP_IMPRINT_URL | Imprint URL |
| APP_DATAPRIVACY_URL | Data privacy URL |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| SPRING_MAIL_HOST | SMTP server host |
| SPRING_MAIL_PORT | SMTP server port |
| SPRING_MAIL_USERNAME | SMTP server username |
| SPRING_MAIL_PASSWORD | SMTP server password |
| MAIL_SENDER | Mail sender address |
| MAIL_FIX_RECIPIENT | For testing: enter e-mail address to which every e-mail is send instead of original recipient |
| MAIL_ERROR_RECIPIENTS | e-mail address for mail failures |
| MAIL_USESMTP | true for STMP, false for MS Exchange Server |
| MAIL_EXCHANGE_USER | MS Exchange Server username |
| MAIL_EXCHANGE_PASSWORD | MS Exchange Server password |
| MAIL_EXCHANGE_URL | MS Exchange Server URL |
| MAIL_EXCHANGE_VERSION | MS Exchange Server version (from enum microsoft.exchange.webservices.data.core.enumeration.misc.ExchangeVersion) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## MessageService
Die Konfiguration des Services auf dem Server erfolgt in der MessageService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden.

Folgende Werte müssen zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| APP_BASE_URL | Application host, e.g. _https://anwendung.local_ |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: _http://<host>/auth_ |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | agency-service |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://<host>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-technischen-benutzer-und-rolle-anlegen)) |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-benutzer-und-rolle-für-system-nachrichten-anlegen))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| USER_SERVICE_API_URL | URL to the UserService REST API, e.g. _http://<host>/service/users_ |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## UserService
Die Konfiguration des Services auf dem Server erfolgt in der UserService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden. Die User-ID des technischen Keycloak Benutzers kann direkt in Keycloak eingesehen werden (Menüpunkt _"Users"_).
Die Rocket.Chat User-ID für den Rocket.Chat Systemuser muss direkt in der MongoDB über den NoSqlClient ermittelt werden. Dazu im NoSqlClient an der Rocket.Chat-Datenbank anmelden und folgende Suchabfrage auf die Collection _users_ ausführen:

```
{"username":"<GESUCHTER USERNAME>"}
```

Folgende Werte müssen in der UserService.env zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| APP_BASE_URL | Application host, e.g. _https://anwendung.local_ |
| CONSULTANT_IMPORT_FILENAME | Path to consultant import file, e.g. _import/consultants.csv_ |
| CONSULTANT_IMPORT_PROTOCOL_FILENAME | Path to consultant import log file, e.g. _import/consultants-import.txt_ |
| ASKER_IMPORT_FILENAME | Path to asker import file, e.g. _import/askers.csv_ |
| ASKER_IMPORT_WITHOUTSESSION_FILENAME | Path to asker without session import file, e.g. _import/askers-without-session.csv_ |
| ASKER_IMPORT_PROTOCOL_FILENAME |  Path to asker import log file, e.g. _import/askers-import.txt_ |
| ASKER_IMPORT_WELCOME_MESSAGE_FILENAME | Path to welcome messages (enquiry response), e.g. _import/welcome_consulting_type_[ConsultingType].txt_ |
| ASKER_IMPORT_WELCOME_MESSAGE_FILENAME_REPLACE_VALUE | Replacement value for welcome message files, e.g. _[ConsultingType]_ |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| SPRING_DATASOURCE_URL | Connection URL: jdbc:mariadb://<host>:<port>/agencyservice |
| SPRING_DATASOURCE_USERNAME | Username for AgencyService database user |
| SPRING_DATASOURCE_PASSWORD | Password for AgencyService database user |
| SPRING_LIQUIBASE_USER | Username for AgencyService liquibase database user |
| SPRING_LIQUIBASE_PASSWORD | Password for AgencyService liquibase database user |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://<host>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | agency-service |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| KEYCLOAKSERVICE_TECHUSER_ID | Keycloak technical user ID (see [here](#-technischer-benutzer-für-e-mail-prüfung)) |
| KEYCLOAKSERVICE_ADMIN_USERNAME | Keycloak technical user username (see [here](#-technischer-benutzer-für-registrierung)) |
| KEYCLOAKSERVICE_ADMIN_PASSWORD | Keycloak technical user password |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://<host>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-technischen-benutzer-und-rolle-anlegen)) |
| ROCKET_TECHNICAL_PASSWORD | Rocket.Chat technical user password |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-benutzer-und-rolle-für-system-nachrichten-anlegen))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| ROCKET_SYSTEMUSER_ID | Rocket.Chat system user ID |
| AGENCY_SERVICE_API_URL | URL to the AgencyService REST API, e.g. _http://<host>/service/agencies_ |
| MESSAGE_SERVICE_API_URL | URL to the MessageService REST API, e.g. _http://<host>/service/messages_ |
| MAIL_SERVICE_API_MAILS_SEND | URL to the MailService send mails endpoint, e.g. _http://<host>/service/mails/send_ |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## Restart aller Services
Nachdem Änderungen gemacht wurden, sollten alle Services erneut durch *docker-compose restart* neugestartet werden.