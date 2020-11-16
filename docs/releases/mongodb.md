---
id: mongodb
title: 3rd party - MongoDB
---

## General description

This page describes changes/updates for the MongoDB component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the project page at https://www.mongodb.com.

### Unreleased

_Before_ updating tag to `4.0.5` in the `docker-compose.yml` file the following changes are necessary:

⚠️If you are running these commands on a productive system please be sure to backup your data before⚠️

Create the oplog user with the following command:

`docker exec mongodb bash -c "mongo -u <ADMIN_USER> -p <ADMIN_PASSWORD> --authenticationDatabase admin admin /setup/init-oplog-user.js"`

To be able to use a replica set (mandatory!) within MongoDB the `docker-compose.yml` needs to be changed. Adapt the command option for the MongoDB container with the following configuration:

`command: --smallfiles --oplogSize 128 --replSet rs0 --storageEngine mmapv1`

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