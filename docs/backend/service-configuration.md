---
id: service-configuration
title: Service configuration
---
Für manche Komponenten ist eine Ersteinrichtung erforderlich.
Diese sind hier aufgeführt.

## Rocket.Chat
Bei der ersten Anmeldung muss der Administratoren Account eingerichtet werden.
Dazu wird einfach den Schritten im Assistenten gefolgt (http://`<HOST>`:3000).
Bei Schritt 3 "Serverinformationen" sollte die Option `Auto opt in new users for Two Factor via Email` auf `No` gestellt werden.
Als Typ (Step 4 "Register Server") wird dabei eine lokale Installation (Standalone) gewählt.

__Weitere Konfigurationsschritte:__

### LDAP konfigurieren:
Rocket.Chat muss noch mit LDAP verbunden werden - dazu folgende Einstellungen im Administrationsbereich, Menüpunkt _LDAP_, übernehmen (alle nicht aufgelisteten Optionen sollten nicht geändert bzw. auf den Standartwerten belassen werden):

| Feld | Wert | Bemerkung |
|-|-|-|
| **Basic Settings** | | |
| Enable | True | |
| Login Fallback | True | Wichtig, da sich der initiale Admin ansonsten nicht mehr einloggen kann, da nicht im LDAP vorhanden |
| Find user after login | False | |
| Host | openldap | |
| Port | 389 | |
| Reconnect | True | |
| CA Cert | | |
| Base DN | ou=users,ou=ob,dc=onlineberatung,dc=de | |
| Internal Log Level | INFO | |
| **Authentication **| | |
| Enable | True | |
| User DN | cn=admin,dc=onlineberatung,dc=de | |
| Password | <PASSWORT> | → Standard-PW: admin |
| **Sync / Import** | | |
| Username Field | uid | |
| Unique Identifier Field | objectGUID,ibm-entryUUID,GUID,dominoUNID,nsuniqueId,uidNumber | |
| Merge Existing Users | True | |
| Sync User Data | False | Set this option to _true_ only if the user data of Keycloak and Rocket.Chat are 100% synchronized (especially e-mail address). Otherwise, this can lead to malfunction during password reset process and users won't be able to log in to Rocket.Chat. |
| Sync User Avatar | False | |
| **User Search** | | |
| Search Field | uid,mail | |


### Technischen Benutzer und Rolle anlegen
1. Rolle anlegen/Rechte festlegen
* Unter _"Permissions"_ über den Button _"+"_ die Rolle _"technical"_ mit Scope _"Global"_ anlegen. Falls die Rolle nicht in der Liste auftaucht muss die Seite manuell neugeladen werden (F5).
* Der Rolle folgende Rechte hinzufügen (Haken setzen):
    * _[add-user-to-any-p-room]_
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
* Unter _"Permissions"_ über den Button _"+"_ die Rolle _"system"_ mit Scope _"Global"_ anlegen. Falls die Rolle nicht in der Liste auftaucht muss die Seite manuell neugeladen werden (F5).
* Dieser Rolle nun die folgende Rechte zuweisen:
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
| Rotate images on upload | False | |
| Enable Json Web Tokens protection to file uploads | False | |
| Storage Type | FileSystem | |
| File Uploads Enabled in Direct Messages | True | |
| File System | | |
| System Path | /app/user_uploads | Dieses Verzeichnis wird auf das Host-System gemounted, damit die hochgeladenen Dateien nicht im Container liegen. Da Rocket.Chat die als eigenen RocketChat-Benutzer mit der UID 99999 ablegt, wird der Besitzer des Verzeichnisses auf dem Host-System auf die UID 99999 gesetzt. Diesen Benutzer gibts es auf dem Linux nicht, aber dadurch können die Rechte für das Verzeichnis eingeschränkt werden. Besitzer: 99999 Gruppe: docker Permissions: 744

### Nur lokal: CORS für Frontend-Entwicklung aktivieren
Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss in Rocket.Chat in der Administration unter dem Punkt _"General"_ → _"REST API"_ die Einstellung _"Enable Cors"_ auf _"true"_ gesetzt werden.

### Rate Limiter
For local development both `Rate Limiter` can be deactivated.

⚠️Please be sure to enable rate limiting for production and balance the settings according to the ones within NGINX ⚠️

### General
Disable `UTF8 Names Slugify` under `UTF8`.

### Accounts
Under `Registration` disable the following entries:
  - `Send email to user when user is activated`
  - `Send email to user when user is deactivated`
  - `Verify Email for External Accounts`
  - `Use Default Blocked Domains List`

## Keycloak
### Realm
Es muss der Realm aus dem Projektverzeichnis importiert werden (Verzeichnis im Repo: _./Keycloak_).

Vor dem Import der Basis-Einstellungen müssen folgende Anpassungen manuell in der Datei _realm-export.json_ vorgenommen werden:

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

### Technischer Benutzer für Registrierung und Masterkey
Für die Registrierung neuer Ratsuchender in Keycloak muss ein technischer Benutzer über die Benutzerverwaltung von Keycloak eingerichtet werden. Dieser Benutzer benötigt einen Namen, ein Passwort und folgende Rollen-Einstellungen:

1. Unter _"Client Roles"_ → _"realm-management"_ auswählen und unter _"Assigned Roles"_ sollten folgende Rollen stehen:
    * manage-users
    * view-realm
2. Unter _"Client Roles"_ → _"account"_ auswählen und alle unter _"Assigned Roles"_ entfernen
3. Zuätzlich muss dem Benutzer noch die Rolle "technical" hinzugefügt werden

### Password policies
Die gleichen Password Policies sind auch im UserService implementiert (UserHelper.java).

## Verbindungen im Nosqlclient einrichten
Damit man sich mit dem Nosqlclient mit der MongoDB verbinden kann müssen entsprechende Verbindungen eingerichtet werden. Dazu muss der Nosqlclient aufgerufen werden und oben rechts _"Connect"_ und im folgenden Dialog _"Create New"_ ausgewählt werden.

Folgende Verbindungsdaten müssen für die Rocket.Chat-DB verwendet werden:

| Name        | Host    | Port  | Database name | Authentication type | Username    | Passwort    | Authentication DB |
| ----------- | ------- | ----- | ------------- | ------------------- | ----------- | ----------- | ----------------- |
| Rocket.Chat | mongodb | 27017 | rocketchat    | Scram-Sha-1         | rocketchat* | rocketchat* | rocketchat        |

\* Es handelt sich hierbei um das initiale Passwort bei der Erstinstallation. Dieses muss ggf. noch angepasst werden.

## Microservices

Für alle folgenden Microservices muss ein Hosts-Eintrag in der Datei `docker-compose.yml` erfolgen. Bitte ersetzen Sie die Platzhalter `<app_domain>` und `<internal_server_ip_address>` entsprechend mit Ihren Werten bei der jeweiligen Property `extra_hosts`. Darüber wird sichergestellt, dass die Microservices Verbindungen zu den Services auf dem Server herstellen können.

## AgencyService
Die Konfiguration des Services auf dem Server erfolgt in der AgencyService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden.

Folgende Werte müssen zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| SPRING_DATASOURCE_URL | Connection URL: jdbc:mariadb://\<host\>:\<port\>/agencyservice |
| SPRING_DATASOURCE_USERNAME | Username for AgencyService database user |
| SPRING_DATASOURCE_PASSWORD | Password for AgencyService database user |
| SPRING_LIQUIBASE_USER | Username for AgencyService liquibase database user |
| SPRING_LIQUIBASE_PASSWORD | Password for AgencyService liquibase database user |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
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
| SPRING_DATASOURCE_URL **`!upcoming with release 2020-11-24`** | Connection URL: jdbc:mariadb://\<host\>:\<port\>/messageservice |
| SPRING_DATASOURCE_USERNAME **`!upcoming with release 2020-11-24`** | Username for MessageService database user |
| SPRING_DATASOURCE_PASSWORD **`!upcoming with release 2020-11-24`** | Password for MessageService database user |
| SPRING_LIQUIBASE_USER **`!upcoming with release 2020-11-24`** | Username for MessageService liquibase database user |
| SPRING_LIQUIBASE_PASSWORD **`!upcoming with release 2020-11-24`** | Password for MessageService liquibase database user |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: _http://\<host\>/auth_ |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | agency-service |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-technischen-benutzer-und-rolle-anlegen)) |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-benutzer-und-rolle-für-system-nachrichten-anlegen))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| ROCKET_SYSTEMUSER_ID | Rocket.Chat system user id |
| USER_SERVICE_API_URL | URL to the UserService REST API, e.g. _http://\<host\>/service/users_ |
| USER_SERVICE_API_LIVEPROXY_URL | URL to the UserService live proxy REST API, e.g. _http://\<host\>_ |
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
| SPRING_DATASOURCE_URL | Connection URL: jdbc:mariadb://\<host\>:\<port\>/agencyservice |
| SPRING_DATASOURCE_USERNAME | Username for AgencyService database user |
| SPRING_DATASOURCE_PASSWORD | Password for AgencyService database user |
| SPRING_LIQUIBASE_USER | Username for AgencyService liquibase database user |
| SPRING_LIQUIBASE_PASSWORD | Password for AgencyService liquibase database user |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | agency-service |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| KEYCLOAKSERVICE_TECHUSER_ID | Keycloak technical user ID (see [here](#-technischer-benutzer-für-e-mail-prüfung)) |
| KEYCLOAKSERVICE_ADMIN_USERNAME | Keycloak technical user username (see [here](#-technischer-benutzer-für-registrierung)) |
| KEYCLOAKSERVICE_ADMIN_PASSWORD | Keycloak technical user password |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-technischen-benutzer-und-rolle-anlegen)) |
| ROCKET_TECHNICAL_PASSWORD | Rocket.Chat technical user password |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-benutzer-und-rolle-für-system-nachrichten-anlegen))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| ROCKET_SYSTEMUSER_ID | Rocket.Chat system user ID |
| AGENCY_SERVICE_API_URL | URL to the AgencyService REST API, e.g. _http://\<host\>/service/agencies_ |
| MESSAGE_SERVICE_API_URL | URL to the MessageService REST API, e.g. _http://\<host\>/service/messages_ |
| MAIL_SERVICE_API_MAILS_SEND | URL to the MailService send mails endpoint, e.g. _http://\<host\>/service/mails/send_ |
| LIVE_SERVICE_API_URL | URL to the LiveService REST API, e.g. _http://\<host\>_ |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## UploadService
Die Konfiguration des Services auf dem Server erfolgt in der UploadService.env. Für die lokale Entwicklung muss dafür die entsprechende _application-X.properties_-Datei angepasst werden. 

Folgende Werte müssen in der UploadService.env zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| APP_BASE_URL | Application host, e.g. _https://anwendung.local_ |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_CORS | false for production system! |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-benutzer-und-rolle-für-system-nachrichten-anlegen))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| USER_SERVICE_API_URL | URL to the UserService REST API, e.g. _http://\<host\>/service/users_ |
| USER_SERVICE_API_LIVEPROXY_URL | URL to the UserService live proxy REST API, e.g. _http://\<host\>_ |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## LiveService 

Die Konfiguration des Services auf dem Server erfolgt in der LiveService.env. Für die lokale
Entwicklung muss die application.properties-Datei angepasst werden. 

Folgende Werte müssen in der UploadService.env zwingend gesetzt werden:

| Name | Description |
| ---- | ----------- |
| SPRING_MAIN_ALLOW-BEAN-DEFINITION-OVERRIDING=true | Needed for using keycloak security session bean |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_RESOURCE | Keycloak resource name |
| APP_BASE_URL | Client base URL used for cors restriction: http://\<host\>|

## VideoService
The configuration on the server is located in the `VideoService.env` file. To configure the service for local development you can configure the corresponding `application-X.properties` file.

Following values are mandatory:

| Name | Description |
| ---- | ----------- |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | Keycloak resource name |
| KEYCLOAK_CORS | false for production system! |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## Restart aller Services
Nachdem Änderungen gemacht wurden, sollten alle Services erneut durch *docker-compose restart* neugestartet werden.
