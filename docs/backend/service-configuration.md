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

* Rocket.Chat muss noch mit dem LDAP verbunden werden - dazu folgende Einstellungen im Administrationsbereich, 
Menüpunkt _LDAP_, übernehmen:

| Feld                           | Wert                                                          | Bemerkung                                                                                                |
|--------------------------------|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **Basic Settings**                 |                                                               |                                                                                                          |
| Enable                         | True                                                          |                                                                                                          |
| Login Fallback                 | True                                                          | Wichtig, da sich der initiale Admin sich ansonsten nicht mehr einloggen kann, da nicht im LDAP vorhanden |
| Find user after login          | False                                                         |                                                                                                          |
| Host                           | openldap                                                      |                                                                                                          |
| Port                           | 389                                                           |                                                                                                          |
| Reconnect                      | True                                                          |                                                                                                          |
| Encryption                     | No Encryption                                                 |                                                                                                          |
| CA Cert                        |                                                               |                                                                                                          |
| Reject Unauthorized            | True                                                          |                                                                                                          |
| Base DN                        | ou=users,ou=cob,dc=❌onlineberatung,dc=de                              |                                                                                                          |
| Internal Log Level             | INFO                                                          |                                                                                                          |
| **Authentication                 **|                                                               |                                                                                                          |
| Enable                         | True                                                          |                                                                                                          |
| User DN                        | cn=admin,dc=❌onlineberatung,dc=de                                     |                                                                                                          |
| Password                       | <PASSWORT>                                                    | → Standard-PW: admin                                                                                     |
| **Sync / Import**                  |                                                               |                                                                                                          |
| Username Field                 | uid                                                           |                                                                                                          |
| Unique Identifier Field        | objectGUID,ibm-entryUUID,GUID,dominoUNID,nsuniqueId,uidNumber |                                                                                                          |
| Default Domain                 |                                                               |                                                                                                          |
| Merge Existing Users           | True                                                          |                                                                                                          |
| Sync User Data                 | False                                                         |                                                                                                          |
| User Data Field Map            | {"cn":"name", "mail":"email"}                                 |                                                                                                          |
| Sync User Avatar               | False                                                         |                                                                                                          |
| Background Sync                | False                                                         |                                                                                                          |
| **Timeouts**|                                                               |                                                                                                          |
| Timeout (ms)                   | 60000                                                         |                                                                                                          |
| Connection Timeout (ms)        | 1000                                                          |                                                                                                          |
| Idle Timeout (ms)              | 1000                                                          |                                                                                                          |
| **User Search**                    |                                                               |                                                                                                          |
| Filter                         | (objectclass=*)                                               |                                                                                                          |
| Scope                          | sub                                                           |                                                                                                          |
| Search Field                   | uid,mail                                                      |                                                                                                          |
| Search Page Size               | 250                                                           |                                                                                                          |
| Search Limit Size              | 1000                                                          |                                                                                                          |
| **User Search (Group Validation)** |                                                               |                                                                                                          |
| Enable LDAP User Group Filter  | False                                                         |                                                                                                          |

❌❌❌❌❌ HIER GEHT'S WEITER
* In Rocket.Chat muss eine neue, technische Rolle und ein technischer Benutzer angelegt werden - die Einstellungen hierzu sind in der readme des UserService beschrieben (https://git.virtual-identity.com/projects/CAR/repos/cob-backend-userservice/browse?at=refs%2Fheads%2FDevelopment).

- In Rocket.Chat muss noch der BOT (Rocket Cat) gelöscht werden.

- In Rocket.Chat muss das Verhalten für den Gelesen-Status konfiguriert werden: https://collaboration.virtual-identity.com/x/ggwkAw

- In Rocket.Chat muss der File-Upload konfiguriert werden: https://collaboration.virtual-identity.com/x/WY7uAg

- Damit die lokale Entwicklungsumgebung auch für die Frontend-Entwicklung, wo ein Node-Server lokal läuft, funktionert, muss in Rocket.Chat in der Administration unter dem Punkt "General" - "REST API" die Einstellung "Enable Cors" auf "true" gesetzt werden.

- Unter den Berechtigungen muss für user, technical und systemuser jeweils das api-bypass-rate-limit angehakt werden. Sowie unter "Rate Limiter" -> API Rate Limiter dieser für Development deaktiviert werden und am besten die erlaubten Calls auf 10k+ hochgesetzt werden.

### Keycloak
#### Realm
Es muss der Realm aus dem Projektverzeichnis importiert werden (Verzeichnis im Repo: caritas-online-beratung-backend\Keycloak).
Um diesen zu importieren muss man einen neuen Realm in Keycloak anlegen.
Dazu öffnet man das "DropDownMenü" direkt unterhalb des Keycloak-Logos (derzeit ist dort der Master-Realm ausgewählt) und klick auf "Add realm".
In der sich daraufhin öffnenden Maske lädt man die JSON Datei hoch.

#### LDAP
Im Anschluss muss noch die Verbindung zum LDAP aktualisiert werden, da in dem Realm-Export das Passwort nicht mit exportiert wird.
Dazu geht man auf "User Federation" und wählt dort "ldap" aus. In den sich daraufhin öffnenden Konfigurationsfeldern aktualisiert man das Feld "Bind Credential" mit dem für den LDAP-Admin gesetzten Passwort (Initial-Passwort: admin).
Die Funktionstüchtigkeit kann mit "Test authentication" geprüft werden.
Zum Schluss das ganze noch mit dem "save" Button ganz unten speichern.

#### Technischer Benutzer für E-Mail-Prüfung
Für die Überprüfung auf bereits vergebene E-Mail-Adressen in Keycloak muss ein technischer Benutzer über die Benutzerverwaltung von Keycloak eingerichtet werden. Dieser Benutzer benötigt nur einen Namen, aber kein Passwort oder sonstige Daten und Einstellungen.

__Wichtig__: Nach der Erstellung des technischen Benutzers muss dessen User-ID aus Keycloak (z.B 68918eb6-442a-4b75-b4fc-b0147c1a6c5a) in der Environment-Datei vom UserService eingetragen werden:

Datei: ``./UserService/UserService.env``

Eintrag: ``KEYCLOAKSERVICE_TECHUSER_ID=<USER-ID>``

#### Technischer Benutzer für Registrierung
Für die Registrierung neuer Ratsuchender in Keycloak muss ein technischer Benutzer über die Benutzerverwaltung von Keycloak eingerichtet werden. Dieser Benutzer benötigt einen Namen, ein Passwort und folgende Rollen:

- realm-management: manage-users
- realm-management: view-realm

![](keycloak-admin-roles.png)

Zusätzlich sollten bei diesem Benutzer alle Account-Rollen entfernt werden:

![](keycloak-admin-roles-2.png)

__Wichtig__: Nach der Erstellung des Benutzers müssen dessen Credentials in der Environment-Datei vom UserService eingetragen werden:

Datei: ``./UserService/UserService.env``

Eintrag: 
```
KEYCLOAKSERVICE_ADMIN_USERNAME=<username>
KEYCLOAKSERVICE_ADMIN_PASSWORD=<password>
``` 

## Verbindungen im Nosqlclient einrichten
Damit man sich mit dem Nosqlclient mit der MongoDB verbinden kann müssen entsprechende Verbindungen eingerichtet werden. Dazu muss der Nosqlclient aufgerufen werden und oben rechts "Connect" und im folgenden Dialog "Create New" ausgewählt werden.

Folgende Verbindungsdaten müssen für die Rocket.Chat-DB verwendet werden:

| Name        | Host    | Port  | Database name | Authentication type | Username    | Passwort    | Authentication DB |
| ----------- | ------- | ----- | ------------- | ------------------- | ----------- | ----------- | ----------------- |
| Rocket.Chat | mongodb | 27017 | rocketchat    | Scram-Sha-1         | rocketchat* | rocketchat* | rocketchat        |

\* Es handelt sich hierbei um das initiale Passwort bei der Erstinstallation. Dieses muss ggf. noch angepasst werden.

## AgencyService: Stammdaten importieren

Für den AgencyService müssen Stammdaten (Beratungsstellen, etc.) importiert werden. Hierzu werden die SQL-Statements aus den folgenden Dateien im Adminer ausgeführt (Reihenfolge beachten):

``./MariaDB/dioceses/import_dioceses.sql``\
``./MariaDB/agencies/import_agencies.sql``\

## Zugangsdaten

### Adminer (MariaDB Frontend)
Adresse: http://localhost:3002\
Benutzer: root\
Passwort: root\
Datenbank: _nicht notwendig_

## Test-Benutzer importieren

Um Berater zu importieren muss der Import des Userservice genutzt werden.
Dazu über z.B. Postman einen POST auf http://caritas.local/service/users/consultants/import ausführen. Der Call benötigt das Bearer Token des technischen Benutzers und im Header den Key "X-CSRF-TOKEN" mit Value "test", sowie ein Cookie mit demselben Value: "CSRF-TOKEN=test; path=/; domain=.caritas.local;".

Um die Ratsuchenden zu importieren müssen nun noch die Statements aus der /UserService/import/askers.txt in Adminer ausgeführt werden.
Das Ergebnis muss im selben import-Verzeichnis als askers.csv abgespeichert werden und dann erneut ein Import-Call vom UserService angestoßen werden:
Dazu über z.B. Postman einen POST auf http://caritas.local/service/users/askerss/import ausführen. Der Call benötigt das Bearer Token des technischen Benutzers und im Header den Key "X-CSRF-TOKEN" mit Value "test", sowie ein Cookie mit demselben Value: "CSRF-TOKEN=test; path=/; domain=.caritas.local;".

Bei den Ratsuchenden ist bereits das Standard-Password "Testtest!12" hinterlegt.
Für die Berater-Accounts muss dies vor Nutzung selbiger noch in Keycloak festgelegt werden.