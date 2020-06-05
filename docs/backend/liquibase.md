---
id: liquibase
title: Database versioning with liquibase
---
## Datenbankversionierung mit Liqubase
Wie auch für die Spring-Properties gibt es für die unterschiedlichen Entwicklungssysteme eigene Liquibase-Properties bzw -Changelog Dateien.
Diese sind in den Ressourcen unter _/db/changelog/_ zu finden (_userservice-local-master.xml_, _userservice-dev-master.xml_, etc.)

Jede neue Datenbank-Änderung wird ein ein eigenes ChangeSet-File (in einem eigenen Unterordner) geschrieben und fortlaufend durchnummeriert.
Dabei ist zu beachten, keine Spring-Variablen für z.B. Ordnerpfade zu verwenden, da diese in Commands über das Maven Liquibase Plugin nicht interpretiert werden können.

Bei Start des Services werden noch nicht durchgeführte Änderungen an der Datenbank automatisch ausgeführt.

### Rollback
Um einen Rollback durchzuführen, muss ein Maven (Liquibase Plugin) Command abgesetzt werden.

Beispiel für einen Rollback zurück zu einem bestimmen Zeitpunkt:

```
liquibase:rollback -Dliquibase.rollbackDate=2019-04-17T15:00:00 -Dliquibase.url=jdbc:mariadb://caritas.local:3306/test -Dliquibase.username=test -Dliquibase.password=test -Dliquibase.#driver=org.mariadb.jdbc.Driver -Dliquibase.changeLogFile=db/changelog/userservice-local-master.xml
```

### Weitere Commands
Weitere Informationen finden sich unter: http://www.liquibase.org/documentation/maven/index.html#using_configuration_property_files

### InitSql nicht ausführen
Damit die initialen Statements nicht ausgeführt werden, muss die Tabelle für Changelogänderungen von Liquibase manuell angelegt und mit den initialen Logs gefüllt werden:

```
CREATE TABLE `DATABASECHANGELOG` (
  `ID` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `AUTHOR` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `FILENAME` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `DATEEXECUTED` datetime NOT NULL,
  `ORDEREXECUTED` int(11) NOT NULL,
  `EXECTYPE` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `MD5SUM` varchar(35) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DESCRIPTION` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `COMMENTS` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TAG` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LIQUIBASE` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CONTEXTS` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LABELS` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `DATABASECHANGELOG` (`ID`, `AUTHOR`, `FILENAME`, `DATEEXECUTED`, `ORDEREXECUTED`, `EXECTYPE`, `MD5SUM`, `DESCRIPTION`, `COMMENTS`, `TAG`, `LIQUIBASE`, `CONTEXTS`, `LABELS`, `DEPLOYMENT_ID`) VALUES
('initSql-tables',	'initialSetup',	'db/changelog/changeset/0001_initsql/initSql.xml',	'2019-04-18 10:24:14',	1,	'EXECUTED',	'8:f1c3c6345f4fba82df58559dbf68d026',	'sqlFile',	'',	NULL,	'3.6.3',	NULL,	NULL,	'5575853522'),
('initSql-trigger',	'initialSetup',	'db/changelog/changeset/0001_initsql/initSql.xml',	'2019-04-18 10:24:14',	2,	'EXECUTED',	'8:bde546e00bcb5de62e5a1253ea884558',	'sqlFile',	'',	NULL,	'3.6.3',	NULL,	NULL,	'5575853522');
```