---
id: rocketchat 
title: 3rd party - Rocket.Chat 
---

## General description

This page describes changes/updates for the Rocket.Chat component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the project page at https://rocket.chat.

### Unreleased

No unreleased changes yet.

### 2021-06-23

Update tag to `3.14.4` in the `docker-compose.yml` file - no other actions necessary.

### 2021-03-23

Check if the following permission is set for the technical user and if not activate it:  
`Edit Other User Information`

### 2020-11-25

_Before_ updating tag to `3.7.1` in the `docker-compose.yml` file the following changes are necessary:

⚠️If you are running these commands on a productive system please be sure to backup your data before⚠️

⚠️ Before updating please follow the update instructions for [MongoDB](../releases/mongodb.md) for this release ⚠️

- After the initialization of the MongoDB replica set update the tag to `3.7.1` in the `docker-compose.yml` for Rocket.Chat.
- Extend the `RocketChat.env` file with the following Oplog connection url:\
  `MONGO_OPLOG_URL=mongodb://<oplog_user>:<oplog_user_password>@<db_host>:<db_port>/local?authSource=admin&replicaSet=rs0`
- Restart Rocket.Chat. If everything works as expected Rocket.Chat shows replica set information after start (ReplicaSet OpLog: Enabled).

Because of new functionality and changes due to the update you need to manually change some Rocket.Chat settings so the system still works as expected:
- `General` -> `UTF8`: disable `UTF8 Names Slugify`
- `Accounts` -> `Registration`: disable the following entries:
  - `Send email to user when user is activated`
  - `Send email to user when user is deactivated`
  - `Verify Email for External Accounts`
  - `Use Default Blocked Domains List`
- `File Upload`: disable `Rotate images on upload` and `Enable Json Web Tokens protection to file uploads`
- For local development you can deactive both `Rate Limiter` ⚠️Please be sure to enable rate limiting for production and balance the settings according to the ones within NGINX ⚠️
