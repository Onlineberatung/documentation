---
id: mongodb
title: 3rd party - MongoDB
---

## General description

This page describes changes/updates for the MongoDB component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the project page at https://www.mongodb.com.

### Unreleased

No unreleased changes yet.

### 2022-08-17

#### Backup MongoDB:

Add a volume to the docker-compose.yml:
`- ./data/dump:/dump`

Then trigger the dump:\
`> docker exec -it mongodb bash`\
`> mongodump -u <user> -p <password> --archive=/dump --gzip`

Upgrade MMap to WiredTiger\
`> cd <your_backend_path>`\
`> git clone https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration /opt/rocketchat-migration`\
`> cp -r /opt/rocketchat-migration/docker docker`\
`> docker-compose stop`\
`> mv docker-compose.yml docker-compose.mmap.yml`\
`> cp /opt/rocketchat-migration/docker-compose.yml docker-compose.yml`

make the following changes to docker-compose.yml
for 'mongo' and 'migrator' change\
`- ./data/db:/data/db`\
  to\
`- mongodb_data:/data/db`

add\
````
volumes:
  mongodb_data:
````
`> docker-compose up --build -d`

Perform step 3. Upgrade MongoDB 4.0.5 to 4.2, then come back.

`> mv docker-compose.mmap.yml docker-compose.yml`

continue...

Upgrade MongoDB 4.0.5 to 4.2:\
change the mongo version in the docker-compose.yml:\
`image: mongo:4.0.5 -> 4.2.1`

also remove --smallfiles from command:\
`command: --oplogSize 128 --replSet rs0`\
`> docker-compose stop mongodb`\
`> docker-compose rm mongodb`\
`> docker-compose up -d`\
`> docker exec -it mongodb bash`\
`> mongo -u <admin>`\
`> db.adminCommand( { setFeatureCompatibilityVersion: "4.2" } )` → should return "ok": 1

Keyfile Authentication\
`> cd <your_backend_path>`\
`> echo "- $(openssl rand -base64 756)" > mongoDB/keyfile.yml`\
`> cp docker-compose.yml docker-compose.yml.<yyyyMMdd>.<usr>`

remove:\
`command: --oplogSize 128 --replSet rs0 --storageEngine=wiredTiger`

add:\
````
volumes:
  - ./mongoDB/keyfile.yml:/data/replica.key.tmp
````
````
entrypoint:
  - bash
  - -c
  - |
      cp /data/replica.key.tmp /data/replica.key
      chmod 400 /data/replica.key
      chown mongodb:mongodb /data/replica.key
      mongod --bind_ip_all --oplogSize 128 --replSet rs0 --keyFile /data/replica.key
````
  
Upgrade MongoDB 4.2 to 4.4:\
change the mongo version in the docker-compose.yml:\
`image: mongo:4.2 -> 4.4`\
`> docker-compose stop mongodb`\
`> docker-compose rm mongodb`\
`> docker-compose up -d`\
`> docker exec -it mongodb bash`\
`> mongo -u <admin>`\
`> db.adminCommand( { setFeatureCompatibilityVersion: "4.4" } )` → should return "ok": 1

### 2020-11-25

_Before_ updating tag to `4.0.5` in the `docker-compose.yml` file the following changes are necessary:

⚠️If you are running these commands on a productive system please be sure to backup your data before⚠️

Create the oplog user with the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin admin /setup/init-oplog-user.js"`

To be able to use a replica set (mandatory!) within MongoDB the `docker-compose.yml` needs to be changed. Adapt the command option for the MongoDB container with the following configuration:

`command: --smallfiles --oplogSize 128 --replSet rs0 --storageEngine mmapv1`\
⚠️Adapt the storage engine value according to your system settings!⚠️

Restart MongoDB:

`docker-compose up -d --no-deps mongodb`

After restarting initialize the replicat set with the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin local /setup/init-replica-set.js"`

⚠️Now follow the update instructions for Rocket.Chat for this release: [Rocket.Chat](../releases/rocketchat.md) ⚠️

After the Rocket.Chat update succeeded it is necessary to update MongoDB step by step:

- Access MongoDB container: `docker exec -it mongodb bash`
- Authenticate as admin to mongo shell: `mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin`
- Check featureCompatibilityVersion: `db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )`
- If it is _not_ 3.4 set it 3.4: `db.adminCommand( { setFeatureCompatibilityVersion: "3.4" } )`
- Exit mongo shell and MongoDB container
- Update version from `3.4.5` to `3.6` in `docker-compose.yml` for MongoDB
- Start MongoDB to pull new version: `docker-compose up -d --no-deps mongodb`
- Acces MongoDB docker container and login as admin into mongo shell. Then update featureCompatibilityVersion:\
`docker exec -it mongodb bash`\
`mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin`\
`db.adminCommand( { setFeatureCompatibilityVersion: "3.6" } )`
- Exit mongo shell and MongoDB container
- Update version from `3.6` to `4.0.5` in `docker-compose.yml` for MongoDB
- Start MongoDB to pull new version: `docker-compose up -d --no-deps mongodb`
- Acces MongoDB docker container and login as admin into mongo shell. Then update featureCompatibilityVersion:\
`docker exec -it mongodb bash`
`mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin`\
`db.adminCommand( { setFeatureCompatibilityVersion: "4.0" } )`

It may be necessary to adapt the owner, group and rights of the /user_uploads folder within the Rocket.Chat volume on Unix systems. In this case change it to the user and group that is running the docker container and set the rights to 744 (you may need to lookup the ID of the user within the docker container itself).