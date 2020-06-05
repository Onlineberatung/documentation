---
id: file-permissions
title: File permissions
---
Bei einer Installation des Backends auf einem Server sollten bestimmte Dateiberechtigungen gesetzt werden, damit nicht jeder Benutzer z.B. auf die Konfigurationsdateien mit den Passwörter zugreifen darf.
Die Berechtigungen unterscheidene sich dabei zwischen dem Live-Deploy-/Dev-/Staging-System und dem Production-System. Dies liegt daran, dass für das Live-Deploy-/Dev-/Staging-System ein CD über den Jenkins eingerichtet werden kann. Hierzu sind andere Berechtigungen notwendig, da ein Remote-Zugriff erfolgt.

#### Rechte unter Linux rekursiv getrennt nach Dateien und Verzeichnissen

Die Standard-Rechte können über folgende Befehle gesetzt werden:

_Rechte für Verzeichnisse setzen:_
``find <ProjectRoot> -type d -exec chmod 770 {} +``

_Rechte für Dateien setzen:_
``find <ProjectRoot> -type f -exec chmod 660 {} +``

_Besitzer für alle Dateien setzen:_
``sudo chown -R root <ProjectRoot>``

_Gruppe für alle Dateien setzen:_
``sudo chgrp -R docker <ProjectRoot>``

## Production System
Es wird davon ausgegangen, dass Docker als Benutzer ``root`` ausgeführt wird. In diesem Fall sollten den meisten Dateien nur die Rechte ``660 (rw- rw- ---)`` (Dateien) bzw. ``770 rwx rwx ---`` (Verzeichnisse) zugewiesen werden. Nur ein paar wenigen Dateien benötige erweiterte Rechte, da von Benutzern aus Docker-Containern auf diese zugegriffen wird.

Die Dateien mit den abweichenden Rechten können der Liste unten entnommen werden.

### Gesamter Verzeichnisbaum mit Dateiberechtigungen
Vom System erzeuge Daten sind nicht aufgeführt.

```
_<ProjectRoot>_/:
drwx------ 2 root root 4096 Feb 28 10:14 Adminer
drwx------ 3 root root 4096 Feb 28 13:14 frontend
drwx------ 3 root root 4096 Feb 28 13:14 MailService
drwx------ 4 root root 4096 Feb 28 13:14 OpenLDAP
drwx------ 6 root root 4096 Feb 28 13:14 nginx
drwx------ 4 root root 4096 Mar  1 08:29 mongoDB
drwx------ 4 root root 4096 Mar  1 08:29 MariaDB
-rw------- 1 root root 6869 Mar  1 08:51 docker-compose.yml
drwx------ 3 root root 4096 Mar  1 10:58 UserService
drwx------ 3 root root 4096 Mar  1 10:58 AgencyService
drwx------ 2 root root 4096 Mar  1 10:59 Keycloak
drwx------ 3 root root 4096 Mar  1 11:48 Rocket.Chat
drwx------ 2 root root 4096 Mar  1 11:48 Nosqlclient
drwx------ 3 root root 4096 Mar  1 14:20 MessageService

_<ProjectRoot>_/Adminer:
-rw------- 1 root root 32 Feb 14 15:01 Adminer.env

_<ProjectRoot>_/frontend:
drwx------ 2 root root 4096 Feb 28 13:14 log

_<ProjectRoot>_/MailService:
-rw------- 1 root root  587 Feb 28 10:58 MailService.env
drwx------ 2 root root 4096 Feb 28 13:14 log

_<ProjectRoot>_/OpenLDAP:
-rw------- 1 root root    192 Feb 27 13:47 OpenLDAP.env
drwx------ 3  999 docker 4096 Mar  1 11:49 slapd.d
drwx------ 2 root root   4096 Mar  1 13:59 config

_<ProjectRoot>_/nginx:
drwx------ 2 root root 4096 Feb 28 10:14 conf
drwx------ 2 root root 4096 Feb 28 10:14 ssl
-rw------- 1 root root   44 Feb 28 12:49 nginx.env
drwx------ 2 root root 4096 Feb 28 13:14 www
drwx------ 2 root root 4096 Feb 28 13:14 log

_<ProjectRoot>_/nginx/conf:
-rw------- 1 root root  407 Feb 26 14:59 security-headers.conf
-rw------- 1 root root  409 Feb 27 13:34 ip-restrictions.conf
-rw------- 1 root root  724 Feb 27 13:36 server-ssl.conf
-rw------- 1 root root  177 Feb 27 13:36 server.conf
-rw------- 1 root root 5917 Feb 28 09:59 nginx.conf

_<ProjectRoot>_/nginx/ssl:
-rw------- 1 root root 1988 Feb 14 15:01 USERTrustRSAAddTrustCA.crt
-rw------- 1 root root 9358 Feb 14 15:01 STAR_caritas_de.pfx
-rw------- 1 root root 9962 Feb 14 15:01 star_caritas_de.pem
-rw------- 1 root root 3585 Feb 14 15:01 star_caritas_de.key
-rw------- 1 root root 3076 Feb 14 15:01 STAR_caritas_de.crt
-rw------- 1 root root 2210 Feb 14 15:01 SectigoRSAOrganizationValidationSecureServerCA.crt
-rw------- 1 root root 1546 Feb 14 15:01 AddTrustExternalCARoot.crt
-rw------- 1 root root  769 Feb 22 13:19 dhparam.pem

_<ProjectRoot>_/mongoDB:
-rw------- 1 root root  140 Feb 27 13:46 mongoDB.env
drwxr-xr-x 2 root root 4096 Mar  1 08:29 init-rocketchat-user.js
drwxr-xr-x 2 root root 4096 Mar  1 08:29 init-nosqlclient-user.js

_<ProjectRoot>_/MariaDB:
-rw------- 1 root root   26 Feb 27 13:44 MariaDB.env
drwx---r-- 2 root root 4096 Feb 28 13:36 config
drwxr-xr-x 2 root root 4096 Mar  1 08:29 init.sql

_<ProjectRoot>_/MariaDB/config:
-rwx---r-- 1 root root 42 Feb 28 13:36 config-file.cnf

_<ProjectRoot>_/UserService:
drwx------ 2 root root 4096 Mar  1 08:12 log
-rw------- 1 root root  822 Mar  1 10:58 UserService.env

_<ProjectRoot>_/AgencyService:
drwx------ 2 root root 4096 Mar  1 08:12 log
-rw------- 1 root root  140 Mar  1 10:58 AgencyService.env

_<ProjectRoot>_/Keycloak:
-rw------- 1 root root 368 Mar  1 10:59 Keycloak.env

_<ProjectRoot>_/Rocket.Chat:
drwx------ 2 root root 4096 Feb 28 13:14 avatar_uploads
-rw------- 1 root root  275 Mar  1 11:48 Rocket.Chat.env

_<ProjectRoot>_/Nosqlclient:
-rw------- 1 root root 217 Mar  1 11:48 Nosqlclient.env

_<ProjectRoot>_/MessageService:
drwx------ 2 root root 4096 Mar  1 08:12 log
-rw------- 1 root root  271 Mar  1 14:20 MessageService.env
```

## Live-Deploy/Dev/Staging system
Es wird davon ausgegangen, dass Docker als Benutzer ``root`` ausgeführt wird und ein Benutzer für das Deployment über einen Jenkins Mitglied der Gruppe ``docker`` ist. Für die Dateien sind dann die Rechte ``660 (rw- rw- ---)`` (Dateien) bzw. ``700 rwx rwx ---`` (Verzeichnisse) notwendig.

### Gesamter Verzeichnisbaum mit Dateiberechtigungen
Vom System erzeuge Daten sind nicht aufgeführt.

```
_<ProjectRoot>_/:
drwxrwx--- 3 root docker 4096 Jan 18 15:18 frontend
drwxrwx--- 2 root docker 4096 Jan 18 15:18 Adminer
drwxrwx--- 3 root docker 4096 Jan 21 10:51 MariaDB
drwxrwx--- 4 root docker 4096 Jan 21 12:01 OpenLDAP
drwxrwx--- 2 root docker 4096 Jan 22 08:25 mongoDB
drwxrwx--- 3 root docker 4096 Jan 24 10:24 AgencyService
drwxrwx--- 2 root docker 4096 Jan 24 10:25 Keycloak
drwxrwx--- 2 root docker 4096 Jan 24 11:11 Nosqlclient
drwxrwx--- 3 root docker 4096 Jan 24 13:33 Rocket.Chat
-rw-rw---- 1 root docker 6219 Feb 21 09:04 docker-compose.yml
drwxrwx--- 3 root docker 4096 Feb 27 10:38 MessageService
drwxrwx--- 6 root docker 4096 Feb 27 10:40 nginx
drwxrwx--- 3 root docker 4096 Feb 27 10:42 UserService
drwxrwx--- 3 root docker 4096 Feb 27 10:44 MailService

_<ProjectRoot>_/frontend:
drwxrwx--- 2 root docker 4096 Jan 18 15:18 log

_<ProjectRoot>_/Adminer:
-rw-rw---- 1 root docker 32 Jan 18 15:18 Adminer.env

_<ProjectRoot>_/MariaDB:
-rw-rw---- 1 root docker   26 Jan 18 15:18 MariaDB.env
-rw-rw---- 1 root docker 7239 Jan 18 15:18 init.sql
drwxrwx--- 2 root docker 4096 Jan 22 08:14 config

_<ProjectRoot>_/MariaDB/config:
-rw-rw---- 1 root docker 43 Jan 22 08:14 config-file.cnf

_<ProjectRoot>_/OpenLDAP:
-rw-rw---- 1 root docker  192 Jan 18 15:18 OpenLDAP.env
drwxrwx--- 2 root docker 4096 Jan 24 11:37 config
drwxrwx--- 3  999 docker 4096 Feb 21 09:17 slapd.d

_<ProjectRoot>_/OpenLDAP/config:
-rw-rw---- 1 root docker 155 Jan 18 15:18 ou-conf.ldif
-rw-rw---- 1 root docker 173 Jan 18 15:18 ppolicy-conf.ldif
-rw-rw---- 1 root docker 181 Jan 18 15:18 ppolicy-default.ldif
-rw-rw---- 1 root docker  92 Jan 18 15:18 ppolicy-module.ldif
-rw-rw---- 1 root docker 262 Jan 24 11:37 newpasswds.ldif

_<ProjectRoot>_/mongoDB:
-rw-rw---- 1 root docker 142 Jan 18 15:18 init-nosqlclient-user.js
-rw-rw---- 1 root docker 139 Jan 18 15:18 init-rocketchat-user.js
-rw-rw---- 1 root docker 140 Jan 18 15:18 mongoDB.env

_<ProjectRoot>_/AgencyService:
-rw-rw---- 1 root docker  130 Jan 24 10:24 AgencyService.env
drwxrwx--- 2 root docker 4096 Feb 27 12:51 log

_<ProjectRoot>_/Keycloak:
-rw-rw---- 1 root docker 61468 Jan 18 15:18 realm-export.json
-rw-rw---- 1 root docker   379 Jan 24 10:25 Keycloak.env

_<ProjectRoot>_/Nosqlclient:
-rw-rw---- 1 root docker 216 Jan 24 11:11 Nosqlclient.env

_<ProjectRoot>_/Rocket.Chat:
drwxrwx--- 2 root docker 4096 Jan 18 15:18 avatar_uploads
-rw-rw---- 1 root docker  274 Jan 24 13:33 Rocket.Chat.env

_<ProjectRoot>_/MessageService:
-rw-rw---- 1 root docker  289 Feb 18 14:10 MessageService.env
drwxrwx--- 2 root docker 4096 Mar  1 08:32 log

_<ProjectRoot>_/nginx:
drwxrwx--- 2 root docker 4096 Jan 18 15:18 www
drwxrwx--- 2 root docker 4096 Feb 22 13:29 ssl
drwxrwx--- 2 root docker 4096 Feb 26 14:41 log
drwxrwx--- 2 root docker 4096 Feb 27 09:51 conf
-rw-rw---- 1 root docker   53 Feb 27 10:40 nginx.env

_<ProjectRoot>_/nginx/ssl:
-rw-rw---- 1 root docker 1546 Jan 18 15:18 AddTrustExternalCARoot.crt
-rw-rw---- 1 root docker 2210 Jan 18 15:18 SectigoRSAOrganizationValidationSecureServerCA.crt
-rw-rw---- 1 root docker 3076 Jan 18 15:18 STAR_caritas_de.crt
-rw-rw---- 1 root docker 1988 Jan 18 15:18 USERTrustRSAAddTrustCA.crt
-rw-rw---- 1 root docker 9358 Jan 21 12:46 STAR_caritas_de.pfx
-rw-rw---- 1 root docker 9808 Jan 22 07:44 star_caritas_de.pem
-rw-rw---- 1 root docker 3526 Jan 22 07:44 star_caritas_de.key
-rw-rw---- 1 root docker  769 Feb 22 13:19 dhparam.pem

_<ProjectRoot>_/nginx/conf:
-rw-rw---- 1 root docker  407 Feb 25 09:56 security-headers.conf
-rw-rw---- 1 root docker  185 Feb 25 13:43 server.conf
-rw-rw---- 1 root docker  732 Feb 25 13:43 server-ssl.conf
-rw-rw---- 1 root docker  407 Feb 26 08:56 ip-restrictions.conf
-rw-rw---- 1 root docker 5575 Feb 27 09:51 nginx.conf

_<ProjectRoot>_/UserService:
-rw-rw---- 1 root docker  825 Feb 18 14:07 UserService.env
drwxrwx--- 2 root docker 4096 Mar  1 11:34 log

_<ProjectRoot>_/MailService:
drwxrwx--- 2 root docker 4096 Feb 26 10:55 log
-rw-rw---- 1 root docker  561 Feb 27 10:37 MailService.env
```