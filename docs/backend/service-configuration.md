---
id: service-configuration
title: Service configuration
---
Some components require an initial setup.
These are listed here.

## Rocket.Chat
When logging in for the first time, the administrator account must be set up.
Simply follow the steps in the wizard (http://`<HOST>`:3000).
At step 3 "Server information" the option `Auto opt in new users for Two Factor via Email` should be set to `No`.
As type (Step 4 "Register Server") a local installation (standalone) is selected.

__Further configuration steps:__

### Configure LDAP:
Rocket.Chat still needs to be connected to LDAP - to do this, apply the following settings in the administration area, menu item _LDAP_ (all options not listed should not be changed or left at default values):

| Field | Value | Comment |
|-|-|-|
| **Basic Settings** | | |
| Enable | True | |
| Login Fallback | True | Important, because otherwise the initial admin cannot log in anymore, because it is not available in LDAP. |
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


### Create technical user

The Rocket.Chat technical user is used for every Rocket.Chat action that involves administrative tasks on groups or users. This ensures that a normal user account's permissions can be limited at the greatest possible level.

1. create role/set permissions
* Create the role _"technical"_ with scope _"Global"_ under _"Permissions"_ using the button _"+"_. If the role does not appear in the list, the page must be reloaded manually (F5).
* Add the following rights to the role (check the box):
    * `Add User to Any Private Channel`
    * `Bypass rate limit for REST API`
    * `Clean Channel History`
    * `Delete Private Channels`
    * `Delete User`
    * `Edit Other User Information`
    * `Remove User`
    * `View Other User Channels`
    * `View Room Administration`
    * `View Direct Messages`
2. Create User
* Under _"Users"_ create a new user _"rocket-chat-technical-user"_ and assign the previous created 
  role _"technical"_. ⚠ This user needs to have the exact username 
  _"rocket-chat-technical-user"_, as it´s used for websocket event filtering.
* **Other settings of the technical user:**
    * Verified = yes
    * Require password change = no
    * Join default channels = Not selected
    * Send welcome email = Not selected

### Create system messages user

The Rocket.Chat system messages user is used to write system messages to Rocket.Chat groups. These different message types are defined in the MessageService.

1. create role/set permissions
* Create the role _"system"_ with scope _"Global"_ under _"Permissions"_ using the button _"+"_. If the role does not appear in the list, the page must be reloaded manually (F5).
* Now assign the following permissions to this role:
    * `Bypass rate limit for REST API`
    * `Create Private Channels`
    * `Edit Room`
    * `View Room Administration`
2. create user
*Under _"Users"_ create a new user _"system"_ and assign the roles _"user"_ and _"system"_.
* **Additional settings of the system user:**
    * Verified = yes
    * Require password change = no
    * Join default channels = Not selected
    * Send welcome email = Not selected

### Delete Bot-User
Under _"Users"_ the BOT (Rocket Cat) must be deleted.

### Configure read status
To ensure that the read status for messages is tracked correctly by Rocket.Chat, the following setting must be set under _"Administration"_ → _"General_" → _"Unread Count_": _"All Messages_"

### Configure file upload
The file system is preferred for file uploads. The upload folder can then be kept outside the Docker container via a volume.
To do this, the configuration must be adapted under _"Administration"_ → _"File Upload"_ as follows:

| Field | Value | Comment |
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
| System Path | /app/user_uploads | This directory is mounted on the host system so that the uploaded files are not in the container. Since Rocket.Chat stores them as its own RocketChat user with UID 99999, the owner of the directory on the host system is set to UID 99999. This user does not exist on Linux, but this can be used to restrict the permissions for the directory. Owner: 99999 Group: docker Permissions: 744

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
The realm must be imported from the project directory (directory in the repo: _./Keycloak_).

Before importing the basic settings, the following adjustments must be made manually in the _realm-export.json_ file:

| Name | Value |
| ---- | ----- |
| redirectUris | Enter host with wildcard (z.B. https://anwendung.de/*) |
| webOrigins | Enter allowed Origins (z.B. https://anwendung.de) |
| "clientId": "account" {baseUrl} | Keycloak URL to Keycloak Account GUI (z.B. /auth/realms/<anwendungs_realm_name>/account) |
| "clientId": "account" {redirectUris} | Keycloak Redirect URIs to Keycloak Account GUI (z.B. /auth/realms/<anwendungs_realm_name>/account) |
| "clientId": "security-admin-console" {baseUrl} | Keycloak URL to Keycloak Admin GUI (z.B. "/auth/admin/<anwendungs_realm_name>/console/index.html") |
| "clientId": "security-admin-console" {redirectUris} | Keycloak Redirect URIs to Keycloak Admin GUI (z.B. "/auth/admin/<anwendungs_realm_name>/console/index.html") |
| "smtpServer": {port} | SMTP Server Port |
| "smtpServer": {host} | SMTP Server Host |
| "smtpServer": {from} | SMTP sender address |
| "smtpServer": {fromDisplayName} | SMTP sender name |
| "smtpServer": {user} | SMTP server user |
| "org.keycloak.storage.UserStorageProvider" : "config" : "usersDn" | Distinguished names for User (z.B. "ou=users,ou=WebApp,dc=anwendung,dc=de") |
| "org.keycloak.storage.UserStorageProvider" : "config" : "bindDn" | Distinguished names for Admin (z.B. "cn=admin,dc=anwendung,dc=de") |

To import the JSON file you have to create a new realm in Keycloak.
To do this, open the drop-down menu directly below the Keycloak logo (currently the master realm is selected there) and click on _"Add realm"_.
In the mask that opens, upload the JSON file.

### LDAP
Afterwards the connection to LDAP must be updated, because the password is not exported in the realm export.
To do this, go to _"User Federation"_ and select _"ldap"_. In the configuration fields that open, update the _"Bind Credential"_ field with the password set for the LDAP admin (initial password: admin).
The functionality can be tested with _"Test authentication"_.
Finally, save the whole thing with the _"save"_ button at the bottom.

### Admin user for registrations
To register new advice seekers in Keycloak, an admin user must be set up through Keycloak's user management. This user needs a name, password and the following role settings:

1. under _"Client Roles"_ → select _"realm-management"_ and under _"Assigned Roles"_ should be the following roles:
  * manage-users
  * view-realm
2. under _"Client Roles"_ select → _"account"_ and remove all under _"Assigned Roles"_.

### Technical user for setting the master keys
To set the master keys in the services, a technical user must be set up in Keycloak via the 
user management. This user needs a name, a password and the following role settings:

1. under _"Client Roles"_, select → _"account"_ and remove all under _"Assigned Roles"_.
2. add the role "technical" to the user.

### Password policies
The same password policies are also implemented in the UserService (UserHelper.java).

## Set up connections in the Nosqlclient
To connect to MongoDB with the Nosqlclient you have to set up the appropriate connections. To do this you have to call the Nosqlclient and select _"Connect"_ in the upper right corner and _"Create New"_ in the following dialog.

The following connection data must be used for the Rocket.Chat DB:

| Name        | Host    | Port  | Database name | Authentication type | Username    | Passwort    | Authentication DB |
| ----------- | ------- | ----- | ------------- | ------------------- | ----------- | ----------- | ----------------- |
| Rocket.Chat | mongodb | 27017 | rocketchat    | Scram-Sha-1         | rocketchat* | rocketchat* | rocketchat        |

\* This is the initial password used during the first installation. This password may have to be changed.

## Microservices

For all the following microservices, a hosts entry must be made in the `docker-compose.yml` file. Please replace the `<app_domain>` and `<internal_server_ip_address>` placeholders accordingly with your values at the respective `extra_hosts` property. This ensures that the microservices can make connections to the services on the server.

## AgencyService
The configuration of the service on the server is done in the AgencyService.env. For local development, the corresponding _application-X.properties_ file must be adapted for this.

The following values must be set:

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
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| USER_ADMIN_SERVICE_API_URL | http://userservice:8080 |
| CONSULTING_TYPE_SERVICE_API_URL | http://consultingtypeservice:8080 |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |
| [CONSULTING_TYPE_NAME]_WHITE_SPOT_AGENCY_ID | Define the white spot agency IDs where needed for every consulting type |

## MailService
The configuration of the service on the server is done in the MailService.env. For local development, the corresponding _application-X.properties_ file must be adapted for this.

The following values must be set:

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
| TEMPLATE_USE_CUSTOM_RESOURCES_PATH | True or False. Decides whether the path specified in TEMPLATE_CUSTOM_RESOURCES_PATH should be taken for the mail templates. |
| TEMPLATE_CUSTOM_RESOURCES_PATH | Path to the custom templates |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## MessageService
The configuration of the service on the server is done in MessageService.env. For local development, the corresponding _application-X.properties_ file must be adapted for this.

The following values must be set:

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
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-create-technical-user)) |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-create-system-messages-user))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| ROCKET_SYSTEMUSER_ID | Rocket.Chat system user id |
| USER_SERVICE_API_URL | http://userservice:8080/users |
| USER_SERVICE_API_LIVEPROXY_URL | http://userservice:8080 |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## UserService
The configuration of the service on the server is done in the UserService.env. For local development, the corresponding _application-X.properties_ file must be adapted for this. The user ID of the technical Keycloak user can be viewed directly in Keycloak (menu item _"Users"_).
The Rocket.Chat user ID for the Rocket.Chat system user must be determined directly in MongoDB via the NoSqlClient. To do this, log on to the Rocket.Chat database in the NoSqlClient and execute the following search query on the _users_ collection:

```
{"username":"<SEARCHED USERNAME>"}
```

It is mandatory to set the following values in UserService.env:

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
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| KEYCLOAKSERVICE_ADMIN_USERNAME | Keycloak admin user username (see [here](#-admin-benutzer-für-registrierungen)) |
| KEYCLOAKSERVICE_ADMIN_PASSWORD | Keycloak admin user password |
| KEYCLOAKSERVICE_TECHNICAL_USERNAME | Keycloak technical user username (see [here](#-technischer-benutzer-zum-setzen-der-masterkeys)) |
| KEYCLOAKSERVICE_TECHNICAL_PASSWORD | Keycloak technical user password |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_TECHNICAL_USERNAME | Rocket.Chat technical user username (see [here](#-create-technical-user)) |
| ROCKET_TECHNICAL_PASSWORD | Rocket.Chat technical user password |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-create-system-messages-user))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| ROCKET_SYSTEMUSER_ID | Rocket.Chat system user ID |
| AGENCY_SERVICE_API_URL | http://agencyservice:8080/agencies |
| MESSAGE_SERVICE_API_URL | http://messageservice:8080 |
| MAIL_SERVICE_API_URL | http://mailservice:8080 |
| LIVE_SERVICE_API_URL | http://liveservice:8080 |
| CONSULTING_TYPE_SERVICE_API_URL | http://consultingtypeservice:8080 |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |
| TWOFACTORAUTH_USER_ENABLED | Determines whether the two-factor authentication can be activated for the users (true or false) |
| TWOFACTORAUTH_CONSULTANT_ENABLED | Determines whether the two-factor authentication can be activated for the consultants (true or false) |
| KEYCLOAKAPI_URL_OTP | Path to the two factor authentication keycloak extension
| KEYCLOAKAPI_OTP_SETUP_INFO | Endpoint to get the setup data for the two factor authentication |
| KEYCLOAKAPI_OTP_SETUP | Endpoint to activate the two factor authentication |
| KEYCLOAKAPI_OTP_DELETE | Endpoint to deactivate two factor authentication |

⚠️ Before the first start of the UserService it is mandatory to set `SPRING_ACTIVE_PROFILE` to `dev`. This guarants that the database structure is created correctly. After the first start the value can be changed back to `prod`. ⚠️

### Delete workflows

Within the application the user has the possibility to delete the own account. You can configure additional and automatic delete workflows for data privacy reasons. You find the configuration details [here](delete-workflows.md).

## UploadService
The configuration of the service on the server is done in the UploadService.env. For local development, the corresponding _application-X.properties_ file must be adapted for this. 

The following values must be set in the UploadService.env:

| Name | Description |
| ---- | ----------- |
| APP_BASE_URL | Application host, e.g. _https://anwendung.local_ |
| SPRING_PROFILES_ACTIVE | _local_ for local development, _prod_ for production system |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| KEYCLOAKSERVICE_ADMIN_CLIENTID | Keycloak admin client ID |
| KEYCLOAKSERVICE_APP_CLIENTID | Keycloak app client ID |
| ROCKET_CHAT_API_URL | Rocket.Chat REST API URL, e.q. _http://\<host\>/api/v1_ |
| ROCKET_SYSTEMUSER_USERNAME | Rocket.Chat system user username (see [here](#-create-system-messages-user))|
| ROCKET_SYSTEMUSER_PASSWORD | Rocket.Chat system user password |
| USER_SERVICE_API_URL | http://userservice:8080/users |
| USER_SERVICE_API_LIVEPROXY_URL | http://userservice:8080 |
| SERVICE_ENCRYPTION_APPKEY | Key for message encryption (must match the one defined in the UserService!) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

## LiveService 

The configuration of the service on the server is done in the LiveService.env file.
development, the application.properties file must be adapted. 

The following values must be set in the UploadService.env:

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
| APP_BASE_URL | Application host, e.g. _https://application.local_ |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | Keycloak resource name |
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| VIDEO_CALL_SERVER_URL | Root path to the (Jitsi) VideoBackend instance |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |
| VIDEO_CALL_SECURITY_JWT_AUDIENCE | Audience property (must match one of the JWT_ACCEPTED_AUDIENCES configured in (Jitsi) VideoBackend instance!) |
| VIDEO_CALL_SECURITY_JWT_ISSUER | Issuer property (must match one of the JWT_ACCEPTED_ISSUERS configured in (Jitsi) VideoBackend instance!) |
| VIDEO_CALL_SECURITY_JWT_SUBJECT | Subject property to be used in JWT token |
| VIDEO_CALL_SECURITY_JWT_SECRET | Secret property (must match the JWT_APP_SECRET configured in (Jitsi) VideoBackend instance!) |
| VIDEO_CALL_SECURITY_JWT_VALIDITY_HOURS | Validity time of the token in hours |

The properties `USER_SERVICE_API_URL`, `LIVE_SERVICE_API_URL` and `MESSAGE_SERVICE_API_URL` should point to the corresponding service (docker internal) and should only be changed if necessary.

## ConsultingTypeService
The configuration on the server is located in the `ConsultingTypeService.env` file. To configure the service for local development you can configure the corresponding `application-X.properties` file.

Following values are mandatory:

| Name | Description |
| ---- | ----------- |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |

Following values are optional:

| Name | Description |
| ---- | ----------- |
| consulting.types.json.path | The relative path to the directory on the host system to the consulting type settings files (default: consulting-type-settings) |
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |

## StatisticsService
The configuration on the server is located in the `StatisticsService.env` file. To configure the service for local development you can configure the corresponding `application-X.properties` file.

Before you start create a new user for the RabbitMQ connections from the services in the management console or via shell set read and write permissions:

__Virtual host permissions__
| Virtual host | Configure regexp | Write regexp | Read regexp |
| ------------ | ---------------- | ------------ | ----------- |
| / | .* | .* | .* | .* |

__Topic permissions__
| Virtual host | Exchange | write regexp | Read regexp |
| ------------ | -------- | ------------ | ----------- |
| / | statistics.exchange | .* | .* |

⚠️ Important: The topic permission can only be set after the StatisticsService has been started for the first time. ⚠️
⚠️ Important: The user must have the tag `administrator`. This is necessary, because the RabbitMQ API is only accessible with this tag (need for VideoBackend). ⚠️

Following values are mandatory:
| Name | Description |
| ---- | ----------- |
| KEYCLOAK_AUTH_SERVER_URL | Keycloak authentication server URL: http://\<host\>/auth |
| KEYCLOAK_REALM | Keycloak realm name |
| KEYCLOAK_PRINCIPAL-ATTRIBUTE | Keycloak principal attribute: preferred_username |
| KEYCLOAK_RESOURCE | Keycloak resource name |
| KEYCLOAK_CORS | false for production system! Further information about [CORS](../backend/cors-configuration.md) |
| CSRF_HEADER_PROPERTY | CSRF header property name (must match the frontend header name!) |
| CSRF_COOKIE_PROPERTY | CSRF cookie property name (must match the frontend cookie name!) |
| SPRING_RABBITMQ_USERNAME | The RabbitMQ username for the connection |
| SPRING_RABBITMQ_PASSWORD | The RabbitMQ password for the connection |
| SPRING_DATA_MONGODB_URI | The connection uri for the MongoDD, e.g. mongodb://\<USERNAME\>:\<PASSWORD\>@mongodb:27017/statistics?retryWrites=false |

You can also customize the following RabbitMQ settings if desired:
| Name | Description | Default |
| ---- | ----------- | ------- |
| SPRING_RABBITMQ_LISTENER_SIMPLE_RETRY_ENABLED | Enable/Disabling automatic retries for message process failures  | true |
| SPRING.RABBITMQ_LISTENER_SIMPLE_RETRY_MAX-ATTEMPTS | The processing should be retried maximum of n times after that it will be sent to dead letter Queue. | 3 |
| SPRING.RABBITMQ_LISTENER_SIMPLE_RETRY_INITIAL-INTERVAL |  The processing should be retried after an interval of n ms. | 2000 |
| SPRING.RABBITMQ_LISTENER_SIMPLE_RETRY_MAX-INTERVAL | The maximum time interval between two retries. It should never exceed 10s. | 10000 |
| SPRING.RABBITMQ_LISTENER_SIMPLE_RETRY_MULTIPLIER | The interval between second retry gets multiplied by this multiplier. But this interval can never exceed the max-interval. | 2 |

During the first start of the service the required exhanges and queues will be applied in RabbitMQ.

### Definition of the consulting type settings
You need to define the settings of all your consulting types in single json files and put them into the directory specified in the property `consulting.types.json.path`:

* [Consulting type schema](https://github.com/CaritasDeutschland/documentation/blob/master/docs/backend/admin/consultingtypeservice/schemas/consulting-type.md)
* [Consulting type schema json file](https://github.com/CaritasDeutschland/documentation/blob/master/docs/backend/admin/consultingtypeservice/schemas/consulting-type.json)
* [Example consulting type settings json files](https://github.com/CaritasDeutschland/caritas-onlineBeratung-consultingTypeService/tree/master/consulting-type-settings)

__Please be aware that the properties id and slug have to be unique.__

__If the ConsultingTypeService does not start, please check the log file for indications of configuration errors.__

⚠️ Please keep in mind that after making changes to the consulting type settings you need to restart Agency- and UserService (settings are being cached)! ⚠️

## ELK Services
The services Elasticsearch, Logstash, and Kibana are also called [ELK Stack](https://www.elastic.co/what-is/elk-stack). 
They form the centralized logging inside the microservice architecture that can aggregate logs from each service 
instance. Developers can search and analyze the logs.

The stack is pre-configured with the privileged bootstrap user *elastic* (password: *changeme*.) Please increase 
security by using the unprivileged 
[built-in users](https://www.elastic.co/guide/en/elasticsearch/reference/current/built-in-users.html) instead:

1. Initialize passwords for built-in users

   ```console
   $ docker-compose exec -T elasticsearch bin/elasticsearch-setup-passwords auto --batch
   ```
   
   Passwords for all 6 built-in users will be randomly generated. Take note of them.

1. Replace usernames and passwords in configuration files 
 
   Use the `kibana_system` user inside the Kibana configuration file (`kibana/config/kibana.yml`) and the 
   `logstash_system` user inside the Logstash configuration file (`logstash/config/logstash.yml`) in place of the 
   existing `elastic` user. Replace the password for the `elastic` user inside the Logstash pipeline file 
   (`logstash/pipeline/logstash.conf`). Do NOT use the `logstash_system` user inside the Logstash pipeline file, it does
   not have sufficient permissions to create indices.

After restart in the following section, you should be able to visit http://*host*:3004 and log in with the *elastic* 
user and the new password.

## (Optional) Configure 2 factor authentication via OTP
1. Build a jar file with maven install of the repository https://github.com/CaritasDeutschland/caritas-onlineberatung-keycloak-otp
2. Add the generated .jar file to the folder ./Keycloak of your environment
3. Add a volume mapping for the keycloak service in your `docker-compose.yaml` e.g. 
   `- ./Keycloak/keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar:/opt/jboss/keycloak/standalone/deployments/keycloak-otp-config-spi-1.0-SNAPSHOT-keycloak.jar`
4. Restart the keycloak compose service with `docker-compose up -d --no-deps keycloak`
5. Go to the administration console of keycloak to `Authentication` -> `Flows` and copy the existing Flow named `Direct Grant`
6. Under `Direct Grant - Direct-grant-validate-otp - Conditional` click the actions dropdown and add a execution
7. Select the `OTP Parameter Validator` and click on save to finally add the execution to your flow
8. Change the order of the added execution so hat it´s directly located above `OTP`
9. Under the tab `Bindings` set your new flow for `Direct Grant Flow`
10. Ensure your admin user configured in `UserService.env` for keycloak has the role `technical` assigned

## Restart of all services
After changes have been made, all services should be restarted again by *docker-compose restart*.