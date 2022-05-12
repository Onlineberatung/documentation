---
id: first-start
title: First start
---

> ⚠️ Safety instruction ⚠️
> 
> The configuration described here is used to set up a developer system.
>
> When setting up as a productive system, individual users and passwords must be assigned instead of those described here!

The following steps must be carried out in sequence.

## Set Keycloak Hostname

In the environment file for Keycloak (`./Keycloak/Keycloak.env`) the hostname and database access information must be specified:

`# Host/address to MariaDB inside Docker`\
`DB_ADDR=mariadb`\
`# Database name (from the ./MariaDB/init.sql)`\
`DB_DATABASE=keycloak`\
`# Password for the database (from the ./MariaDB/init.sql)`\
`DB_USER=keycloak`\
`# Password for the database (from the ./MariaDB/init.sql)`\
`DB_PASSWORD=keycloak`\
`# Host/address to MariaDB inside Docker`\
`KEYCLOAK_HOSTNAME=<host>`

Hostname for local development e.g. ``onlineberatung.local``

## Customize MariaDB Config

In the folder ``./MariaDB/config/`` there is the file ``config-file.cnf``.
This file contains a time zone configuration which causes problems when MariaDB is started for the first time.
Therefore this configuration must be commented out with `#` at the first start.

In the environment file (`./MariaDB/MariaDB.env`) the root password must be set:

`# Password for the user root`\
`MYSQL_ROOT_PASSWORD=root`

## Customize nginx configuration

In the nginx configuration, the server_name must be changed to the hostname in the following files:

- `./nginx/server.conf`
- `./nginx/adminer.conf`
- `./nginx/server-sll.conf` (not for local development)

`server_name <host>;`

In the environment file (`./nginx/nginx.env`) the application URL must be specified:

`APPLICATION_URL=<applikations-url-inkl-protokoll>` (e.g. https://onlineberatung.de)

Hostname for local development e.g. ``onlineberatung.local``

In addition, SSL must be disabled locally. To do this, make the following adjustments:

1. remove the `server-ssl.conf` volume from `proxy` in `docker-compose.yml`.
2. in `adminer.conf` remove the `ssl` parameter at `listen` and all lines below regarding SSL.
3. in `nginx.conf` remove the include of `server-ssl.conf`.
4. in `security-headers.conf`, additionally allow the `ws:` protocol in the CSP.

Now the rate limiting of Keycloak must be deactivated. To do this, remove all lines with `limit_req` in `keycloak.conf`. Additionally remove the line `include ip-restrictions.conf;`.

Also in `rocketchat.conf` the line `include ip-restrictions.conf;` must be removed.

## Customize MongoDB configuration

In the environment file for MongoDB (`./mongoDB/mongoDB.env`) the initial access data must be defined:

`# Admin user name for the MongoDB connection`\
`MONGO_INITDB_ROOT_USERNAME=admin`\
`# Admin user password for MongoDB connection`\
`MONGO_INITDB_ROOT_PASSWORD=admin`\
`# Initial database of MongoDB`\
`MONGO_INITDB_DATABASE=nosqlclient`

## Customize Nosqlclient configuration

In the environment file for the Nosqlclient (`./Nosqlclient/Nosqlclient.env`) the hostname and the MongoDB connection URL must be specified:

`# MongoDB connection with the data from ./mongoDB/init-nosqlclient-user.js`\
`MONGO_URL=mongodb://<db_user>:<db_password>@<db_host>:<db_port>/<nosqlclient_db_name>`\
`ROOT_URL=<host>:3001`

Hostname for local development e.g. ``onlineberatung.local``

## Customize Rocket.Chat configuration

In the environment file for Rocket.Chat (`./Rocket.Chat/Rocket.Chat.env`) the hostname and MongoDB connection URLs must be specified:

`# MongoDB connection with the data from ./mongoDB/init-rocketchat-user.js`\
`MONGO_URL=mongodb://<db_user>:<db_password>@<db_host>:<db_port>/<rocketchat_db_name>`\
`ROOT_URL=<host>:3000`\
`MONGO_OPLOG_URL=mongodb://<oplog_user>:<oplog_user_password>@<db_host>:<db_port>/local?authSource=admin&replicaSet=rs0`

Hostname for local development e.g. ``onlineberatung.local``

## Customize OpenLDAP configuration

In the environment file for OpenLDAP (`./OpenLDAP/OpenLDAP.env`) the LDAP configuration must be specified:

`# Organization in which the users are created`\
`LDAP_ORGANISATION=Onlineberatung`\
`# Domain with which the users are created`\
`LDAP_DOMAIN=onlineberatung.de`\
`# The administrator password for the LDAP connection`\
`LDAP_ADMIN_PASSWORD=admin`\
`# The password for configuring OpenLDAP`\
`LDAP_CONFIG_PASSWORD=config`

## Optional: Set the restart-policy of all services to "no

In order not to get a constantly restarting system in case of problems, the restart policy of all services can be set to `"no"`.

This allows problems to be fixed and the services to be started in a controlled manner.

## RabbitMQ configuration

Open the file `RabbitMQ/conf/rabbitmq.conf` and change the following values:

`vm_memory_high_watermark.relative` - memory usage, read [official documentation](https://www.rabbitmq.com/production-checklist.html#resource-limits-ram) for correct setting depending on your production system. Can be changed to e.g. `vm_memory_high_watermark.absolute = 1GB` for development.\
`disk_free_limit.relative` - does not implicitly need to be changed. Refer to [official documentation](https://www.rabbitmq.com/production-checklist.html#resource-limits-disk-space) for further information.\
`default_user` - default username (will be created on first start)\
`default_pass` - password for default user

⚠️ Please be sure not to put environment variables within your `docker-compose.yml` inside the RabbitMQ container section because this will overwrite all values within the `rabbitmq.conf` file. ⚠️

### RabbitMQ management UI

__Activating the management UI on production is not recommended!__\
If you want to use the RabbitMQ management UI you need to use another Docker image. Therefore open the `docker-compose.yml` and change the RabbitMQ image from `image: rabbitmq:x.x.x-alpine` to `image: rabbitmq:x.x.x-management-alpine` (where x.x.x represent the latest version numbers). Furthermore you need to add the line `- '3003:3003'` to the proxy (NGINX) ports section and assign the RabbitMQ container the network `frontend_network` additional to the `service_network`.

You will also need to add `loopback_users.<username> = true` (where username represents the RabbitMQ default user) to the file `RabbitMQ/conf/rabbitmq.conf`. In this folder you also need to add a file `enabled_plugins` with the content `[rabbitmq_management].`.

Finally you need to add `include server/server-rabbitmq.conf;` to the `http` section of the file `nginx/conf/nginx.conf`.

If you want to use the management UI in production mode please follow the [official documentation](https://www.rabbitmq.com/management.html#configuration) to secure this endpoint.

## Start all services

All services are started with the following command in the (main) directory where the _docker-compose.yml_ file is located: _docker-compose up -d_ (without -d to display the log output in the terminal).
The system now needs a short time to perform the keycloak initialization. Please wait a few minutes.

At the first start it is normal that several services show errors in the log or cannot start. These will be fixed with the next configuration steps.

## Create Keycloak Administrator account

Creating the administrator account for Keycloak:\
`docker exec keycloak /opt/jboss/keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>`

## Anlegen der Rocket.Chat-Datenbank in der mongoDB

The Rocket.Chat database and the associated user must be created manually with the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin rocketchat /setup/init-rocketchat-user.js"`

(On Windows you still have to add _winpty_ in front of _docker_).

Initial admin user data are in the `mongoDB/mongoDB.env`: `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD`.

Then the oplog user must be created using the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin admin /setup/init-oplog-user.js"`

To be able to use a replica set (mandatory) in MongoDB, the docker-compose.yml must be adapted. To do this, the command option for the MongoDB container is changed as follows:

`command: --smallfiles --oplogSize 128 --replSet rs0 --storageEngine mmapv1`.

Now MongoDB has to be restarted to initialize the replica set:

`docker-compose up -d --no-deps mongodb`.

Once MongoDB is started the replica set is initialized with the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin local /setup/init-replica-set.js"`

## Configure LDAP

**Note:** At the first start on a Linux system there was a problem with the directory `./OpenLDAP/slap.d`. This had the wrong user rights. The rights have to be changed accordingly or the folder has to be created again. After that the container can be started:

`docker start openldap`

### Configure OpenLDAP

- [OpenLDAP configuration](../backend/openldap-configuration.md)

## Reset MariaDB Config

Reset the changes made above to the time zone configuration.

## Configuration

Afterwards the [Services configured](../backend/service-configuration.md) should be set.  
Also do not forget to set the correct [CORS](../backend/cors-configuration.md) settings.

## Known bugs and their fixes

This section describes the known errors and how to fix them

### OpenLDAP does not start

The message `Error: the database directory (/var/lib/ldap) is empty but not the config directory (/etc/ldap/slapd.d)` means that in the folder `./OpenLDAP` the folder `slapd.d` must be deleted. In this case, Docker should also be restarted on Windows after deleting the folder, otherwise there is still a reference to the folder.

The exact cause for the messages `could not stat config file "/etc/ldap/slapd.conf": No such file or directory (2)` and `daemon: bind(8) failed errno=99 (Cannot assign requested address)` could not be determined yet. These errors have also only occurred so far when installing on a MAC and are fixed by using a newer version of the Docker image for openLDAP.

### Keycloak login not possible

#### No login as admin possible - login form not accessible

If it is not possible to log in as admin (Keycloak blocks the login form with the note that a local admin is required), the admin must be created again (see above: "Create Keycloak Administrator Account") and the container restarted:

`docker restart keycloak`

#### No login possible without HTTPS

At the first start Keycloak prohibits access to the master realm without SSL. This setting can be overridden via the database.

To do this, call the admin and change to the database "keycloak". There you edit the master record in the table "realm" and set the column "ssl_required" to "NONE".

The keycloak container must be restarted for the setting to take effect:

`docker restart keycloak`
