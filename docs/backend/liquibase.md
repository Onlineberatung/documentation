---
id: liquibase
title: Database versioning with liquibase
---
## Database versioning with liquibase
As for the Spring properties, there are separate Liquibase properties or changelog files for the different development systems.
These can be found in the resources under _/db/changelog/_ (_userservice-local-master.xml_, _userservice-dev-master.xml_, etc.).

Each new database change is written to a separate ChangeSet file (in its own subfolder) and numbered consecutively.
It is important not to use Spring variables for e.g. folder paths, as these cannot be interpreted in commands via the Maven Liquibase plugin.

When the service is started, any changes that have not yet been made to the database are automatically executed.

### Rollback
To perform a rollback, a Maven (Liquibase Plugin) command must be issued.

Example of a rollback back to a specific point in time:

```
liquibase:rollback -Dliquibase.rollbackDate=2019-04-17T15:00:00 -Dliquibase.url=jdbc:mariadb://onlineberatung.localhost:3306/test -Dliquibase.username=test -Dliquibase.password=test -Dliquibase.#driver=org.mariadb.jdbc.Driver -Dliquibase.changeLogFile=db/changelog/userservice-local-master.xml
```

### Further Commands
Further information can be found at: http://www.liquibase.org/documentation/maven/index.html#using_configuration_property_files

### Do not execute InitSql
To ensure that the initial statements are not executed, the table for changelog changes must be created manually by Liquibase and filled with the initial logs:

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