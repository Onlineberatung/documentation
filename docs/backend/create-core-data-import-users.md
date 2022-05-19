---
id: create-core-data-import-users
title: Create core data and import users
---
## AgencyService: Create master data

For the AgencyService, master data (consulting offices, etc.) must be created. For this purpose, the following SQL statements can be executed in the admin (note the order):

### Create dioceses
``use agencyservice;``\
``INSERT INTO agencyservice.diocese (id, name, create_date, update_date) values (NEXTVAL(sequence_diocese), `<dioceseName>`, now(), now());``\

### Create agencies
``use agencyservice;``\
``INSERT INTO `agency` (`id`, `diocese_id`, `name`, `description`, `postcode`, `city`, `is_team_agency`, `consulting_type`, `is_offline`, `create_date`, `update_date`) VALUES``\
``(NEXTVAL(sequence_agency),	1,	'<agencyName>',	'<agencyDescription>',	'<postcode>',	'<city>',	<isTeamAgency>,	<consultingType>,	<isOffline>, now(), now());``\

## UserService: Consultant Import

Consultants can be imported via the UserService. Consultants can be created from scratch or additional consultants can be assigned to existing consultants. The import is currently not designed to change further data for existing consultants.

During the import, the corresponding accounts are created in Keycloak, in Rocket.Chat and in the application database. It also assigns the specified consulting locations to the consultants and adds the consultants to the necessary Rocket.Chat rooms for existing initial requests.

The import is done via a CSV file with the following format (__Headlines must be removed for import__):

### Example import (new creation)

```
consultant_id,old_id,username,first_name,last_name,email,is_absent,absence_message,"agency_id;roleset,agency_id;roleset"
,1,mueller,Max,Müller,max.meuller@domain.de,nein,"","300;main,301;main"
,2,meier,Werner,meier,werner.meier@domain.de,ja,"I am currently not available.","300;main"
```

### Update example

```
consultant_id,old_id,username,first_name,last_name,email,is_absent,absence_message,"agency_id;roleset,agency_id;roleset"
KSJDD88-0339393-9999DDD,,mueller,,max.meuller@domain.de,,,,,"304;main,305;main"
```
__Note__: Currently, only the named consulting offices are assigned during an update. There is no update in the user name or email address.

### Description of the fields
| Field | Description |
|------|--------------|
| consultant_id | Keycloak-ID |
| id_old | ID from the old consulting platform |
| username | Username |
| first_name | First name |
| last_name | Last name |
| email | E-mail address |
| is_absent | Specifies whether a consultant should be set to absent. Permitted values: yes/no |
| absence_message | Absence note |
| agency_rolesets | Consulting center ID; role in the consulting center (can be taken from the consulting type settings in the service). Multiple consulting centers can be specified comma-separated |

The name and location of the CSV file is set in the _application.properties_ via the ``consultant.import.filename``.

## Start import

The import of the consultants can be done by calling the endpoint __/users/consultants/import__ at the UserService (e.g. with Postman). It should be noted that a valid keycloak token of a technical user with the role _"technical"_ must be passed. The call is possible 1x per minute.

### Import log

During the import, a log is written to a file. This file is also located in the root directory of the UserService and has the name 
"consultants-import.txt". In addition, a timestamp is appended so that the file is not overwritten during multiple runs.

The file contains all necessary data to generate e.g. e-mails to the consultants:

- First name
- Last name
- E-mail address
- Username

## UserService: Import of advice seekers with advice

UserService can be used to import advice seekers with advice. During the import, the corresponding accounts are created in Keycloak, in Rocket.Chat and in the application database. In addition, an initial consultation with welcome message is created. The consultation is assigned to the specified consultation center and the specified consultant.

The import is done via a CSV file with the following format (__The headlines must be removed for the import__):

```
id_old,username,email,consultant_id,postcode,agency_id,pw
219344,helpseeker,asker@problem.com,fc68b24e-bc0f-4cb5-a215-7bef0d79ee2d,53111,168,jjuasd8§$jk!
,helpseeker2,asker2@problem.com,fc68b24e-bc0f-4cb5-a215-7bef0d79ee2d,53111,168,
```

### Fields description
| Field         | Description                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| id_old        | ID from the old consulting platform                                                                   |
| username      | Username                                                                                              |
| email         | E-Mail address                                                                                        |
| consultant_id | keycloak ID of the consultant to be assigned                                                          |
| postcode      | postal code to be assigned to the consultant (usually comes from the registration)                    |
| agency_id     | ID of the consultant to be assigned                                                                   |
| pw            | password (optional). If no password is specified, a generated one will be assigned.                   |

The name and location of the CSV file is specified in the _application.properties_ via the ``asker.import.filename``.

The welcome default system message file is also specified in the _application.properties_. Here the consulting type PLatzhalter is replaced with the respective ID of the resort. The files must be located in the same directory as the import file. Here it is important to note that this text file has the same encoding as specified in the import (currently: UTF-8).

## Start import

The import of the advice seekers with advice can be done by calling the endpoint __/users/askers/import__ at the UserService (e.g. with Postman). It should be noted that a valid keycloak token of a technical user with the role "technical" must be passed.

### Import log

During the import, a log is written to a file (name and path as specified in _application.properties_). Additionally, a timestamp is appended so that the file is not overwritten during multiple runs.

## UserService: Advice import without advice

UserService can be used to import advice seekers without consultations. During the import, the corresponding accounts are created in Keycloak, in Rocket.Chat and in the application database and the link to the advice center is established. 

The import is done via a CSV file with the following format (__The headlines must be removed for the import__):

```
id_old,username,email,agency_id,pw
,asker1,asker1@domain.de,1332,
1234,asker2,asker2@domain.de,1555,
```

### Fields description
| Field         | Description                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| id_old        | ID from the old consulting platform                                                                   |
| username      | Username                                                                                              |
| email         | E-Mail address                                                                                        |
| agency_id     | ID of the consultant to be assigned                                                                   |
| pw            | password (optional). If no password is specified, a generated one will be assigned.                   |

The name and location of the CSV file is set in the _application.properties_ via the ``asker.import.withoutsession.filename``.

The import of the advice seekers with advice can be done by calling the endpoint __/users/askersWithoutSession/import__ at the UserService (e.g. with Postman). It should be noted that a valid keycloak token of a technical user with the role "technical" must be passed.

### Import log

During the import, a log is written to a file (name and path as specified in _application.properties_). Additionally, a timestamp is appended so that the file is not overwritten during multiple runs.