---
id: videobackend
title: Backend stack - VideoBackend
---

## General description

This page describes changes/updates for the VideoBackend.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-videoBackend/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2022-05-05

Update the files on the server to the latest of the master branch or checkout `release-2022-05-05` via git.

Modify the `XMPP_MUC_MODULE`property in your .env from `Von:XMPP_MUC_MODULES=token_moderation,close_room` 
to `XMPP_MUC_MODULES=token_moderation,close_room,create_room`  

### 2022-02-10

Pull the latest changes from master branch.

### 2022-02-08

Pull the latest changes from master branch.

### 2021-12-14

Update the following file from the master branch or checkout the release branch `release-2021-12-14` via git: `videoBackendConfig\prosody\prosody-plugins-custom\mod_close_room.lua`

Add the following file from the master branch or checkout the release branch via git and replace the placeholders in the file: `videoBackendConfig\prosody\config\conf.d\statistics.cfg.lua` \
More information about the configuration is available under [Installing and running the videoBackend](videobackend.md)

### 2021-09-01

Update the files on the server to the latest of the master branch or checkout `release-2021-09-01` via git.

### 2021-05-04

Update the files on the server to the latest of the master branch or checkout `release-2021-05-04` via git. This updates Jitsi from version `5142-4` to `5390-3` and adds the moderator role support.

### 2020-02-09

Configure the backend initially like documented under [Installing and running the videoBackend](../backend/videobackend.md).
Please be aware that the video call functionality is currently hidden in the frontend.
