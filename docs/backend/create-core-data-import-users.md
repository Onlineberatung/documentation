---
id: create-core-data-import-users
title: Create core data and import users
---
## AgencyService: Stammdaten anlegen

Für den AgencyService müssen Stammdaten (Beratungsstellen, etc.) angelegt werden. Hierzu können beispielhaft folgende SQL-Statements im Adminer ausgeführt werden (Reihenfolge beachten):

### Create dioceses
``use agencyservice;``\
``INSERT INTO agencyservice.diocese (id, name, create_date, update_date) values (NEXTVAL(sequence_diocese), `<dioceseName>`, now(), now());``\

### Create agencies
``use agencyservice;``\
``INSERT INTO `agency` (`id`, `diocese_id`, `name`, `description`, `postcode`, `city`, `is_team_agency`, `consulting_type`, `is_offline`, `create_date`, `update_date`) VALUES``\
``(NEXTVAL(sequence_agencies),	1,	'<agencyName>',	'<agencyDescription>',	'<postcode>',	'<city>',	<isTeamAgency>,	<consultingType>,	<isOffline>, now(), now());``\

## UserService: Berater-Import

Über den UserService können Berater importiert werden. Es können Berater komplett neu angelegt werden oder bestehenden Beratern weitere Beratungsstellen zugewiesen werden. Der Import ist derzeit nicht dafür ausgelegt weitere Daten bei bestehenden Beratern zu ändern.

Beim Import werden die entsprechenden Accounts in Keycloak, in Rocket.Chat und in der Applikations-Datenbank angelegt. Außerdem werden den Beratern die  angegeben Beratungsstellen zugewiesen und die Berater bei vorhandenen Erstanfragen den notwendigen Rocket.Chat-Räumen hinzugefügt.

Der Import erfolgt über eine CSV-Datei mit folgendendem Format (__Die Headlines müssen für den Import entfernt werden__):

### Beispiel Import (Neuanlage)

```
consultant_id,old_id,username,first_name,last_name,email,is_absent,absence_message,"agency_id;roleset,agency_id;roleset"
,1,mueller,Max,Müller,max.meuller@domain.de,nein,"","300;main,301;main"
,2,meier,Werner,meier,werner.meier@domain.de,ja,"Ich bin zur Zeit nicht erreichbar.","300;main"
```

### Beispiel Update

```
consultant_id,old_id,username,first_name,last_name,email,is_absent,absence_message,"agency_id;roleset,agency_id;roleset"
KSJDD88-0339393-9999DDD,,mueller,,max.meuller@domain.de,,,,,"304;main,305;main"
```
__Hinweis__: Bei einem Update werden derzeit nur die genannten Beratungsstellen zugewiesen. Es findet kein Update beim Benutzernamen oder der E-Mail-Adresse statt.

### Beschreibung der Felder
| Feld | Beschreibung |
|------|--------------|
| consultant_id | Keycloak-ID |
| id_old | ID aus der alten Beratungsplattform |
| username | Benutzername |
| first_name | Vorname |
| last_name | Nachname |
| email | E-Mail-Adresse |
| is_absent | Gibt an, ob ein Berater auf abwesend gesetzt werden soll. Zulässige Werte: ja/nein |
| absence_message | Abwesenheitsnotiz |
| agency_rolesets | Beratungstellen-ID;Rolle in der Beratungsstelle (kann den consulting type settings im Service entnommen werden). Mehrere Beratungsstellen können komma-separiert angegeben werden |

Der Name und Speicherort der CSV-Datei wird in den _application.properties_ über die ``consultant.import.filename`` festgelegt.

Der Import der Berater kann durch einen Aufruf des Endpoints __/users/consultants/import__ beim UserService (z.B. mit Postman) erfolgen. Hierbei ist zu beachten, dass ein gültiger Keycloak-Token eines technischen Benutzers mit der Rolle _"technical"_ zu übergeben ist. Der Aufruf ist 1x pro Minute möglich.

### Import-Protokoll

Während des Imports wird ein Protokoll in eine Datei geschrieben. Diese Datei liegt auch im Root-Verzeichnis des UserService und hat den Namem 
"consultants-import.txt". Zusätzlich wird ein Timestamp angehängt, damit die Datei bei mehreren Durchläufen nicht überschrieben wird.

Die Datei enthält alle notwendigen Daten um z.B. E-Mails an die Berater zu generieren:

- Vorname
- Nachname
- E-Mail-Adresse
- Benutzername

## UserService: Ratsuchenden-Import mit Beratung

Über den UserService können Ratsuchende mit Beratungen importiert werden. Beim Import werden die entsprechenden Accounts in Keycloak, in Rocket.Chat und in der Applikations-Datenbank angelegt. Darüber hinaus wird eine initiale Beratung mit Willkommensnachricht angelegt. Die Beratung wird der angegeben Beratungsstelle und dem angegeben Berater zugeordnet.

Der Import erfolgt über eine CSV-Datei mit folgendendem Format (__Die Headlines müssen für den Import entfernt werden__):

```
id_old,username,email,consultant_id,postcode,agency_id,pw
219344,helpseeker,asker@problem.com,fc68b24e-bc0f-4cb5-a215-7bef0d79ee2d,53111,168,jjuasd8§$jk!
,helpseeker2,asker2@problem.com,fc68b24e-bc0f-4cb5-a215-7bef0d79ee2d,53111,168,
```

### Beschreibung der Felder
| Feld          | Beschreibung                                                                                          |
|---------------|-------------------------------------------------------------------------------------------------------|
| id_old        | ID aus der alten Beratungsplattform                                                                   |
| username      | Benutzername                                                                                          |
| email         | E-Mail-Adresse                                                                                        |
| consultant_id | Keycloak-ID des Beraters, der zugewiesen werden soll                                                  |
| postcode      | Postleitzahl, die bei der Beratung hinterlegt werden soll (kommt normalerweise aus der Registrierung) |
| agency_id     | ID dee Beratungstelle, die zugewiesen werden soll                                                     |
| pw            | Passwort (optional). Wird kein Passwort angegeben wird ein generiertes vergeben.                      |

Der Name und Speicherort der CSV-Datei wird in den _application.properties_ über die ``asker.import.filename`` festgelegt.

Das Willkommens-Standard-Systemnachrichten-File wird ebenfalls in der _application.properties_ angegeben. Dabei wird der Consulting Type PLatzhalter mit der jeweiligen ID des Resorts ersetzt. Die Dateien müssen im selben Verzeichnis wie das Import-File liegen. Hier gilt es zu beachten, dass diese Textdatei die selbe Kodierung, wie im Import angegeben, besitzt (momentan: UTF-8).

Der Import der Ratsuchenden mit Beratung kann durch einen Aufruf des Endpoints __/users/askers/import__ beim UserService (z.B. mit Postman) erfolgen. Hierbei ist zu beachten, dass ein gültiger Keycloak-Token eines technischen Benutzers mit der Rolle "technical" zu übergeben ist.

### Import-Protokoll

Während des Imports wird ein Protokoll in eine Datei geschrieben (Name und Pfad wie in der _application.properties_ angegeben). Zusätzlich wird ein Timestamp angehängt, damit die Datei bei mehreren Durchläufen nicht überschrieben wird.

## UserService: Ratsuchenden-Import ohne Beratung

Über den UserService können Ratsuchende ohne Beratungen importiert werden. Beim Import werden die entsprechenden Accounts in Keycloak, in Rocket.Chat und in der Applikations-Datenbank angelegt und die Verknüpfung zur Beratungsstelle hergestellt. 

Der Import erfolgt über eine CSV-Datei mit folgendendem Format (__Die Headlines müssen für den Import entfernt werden__):

```
id_old,username,email,agency_id,pw
,asker1,asker1@domain.de,1332,
1234,asker2,asker2@domain.de,1555,
```

### Beschreibung der Felder
| Feld          | Beschreibung                                                                                          |
|---------------|-------------------------------------------------------------------------------------------------------|
| id_old        | ID aus der alten Beratungsplattform                                                                   |
| username      | Benutzername                                                                                          |
| email         | E-Mail-Adresse                                                                                        |
| agency_id     | ID dee Beratungstelle, die zugewiesen werden soll                                                     |
| pw            | Passwort (optional). Wird kein Passwort angegeben wird ein generiertes vergeben.                      |

Der Name und Speicherort der CSV-Datei wird in den _application.properties_ über die ``asker.import.withoutsession.filename`` festgelegt.

Der Import der Ratsuchenden mit Beratung kann durch einen Aufruf des Endpoints __/users/askersWithoutSession/import__ beim UserService (z.B. mit Postman) erfolgen. Hierbei ist zu beachten, dass ein gültiger Keycloak-Token eines technischen Benutzers mit der Rolle "technical" zu übergeben ist.

### Import-Protokoll

Während des Imports wird ein Protokoll in eine Datei geschrieben (Name und Pfad wie in der _application.properties_ angegeben). Zusätzlich wird ein Timestamp angehängt, damit die Datei bei mehreren Durchläufen nicht überschrieben wird.