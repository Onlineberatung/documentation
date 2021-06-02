---
id: cors-configuration
title: CORS configuration
---
## CORS settings for local frontend development
To be able to develop locally (Node server running locally) you have to enable CORS for multiple components:

1. Rocket.Chat: Go to the administration. Go to `General` → `REST API` and set `Enable CORS` to `true`. Allowed `CORS Origin` can be set to `*`.
2. Keycloak: Select your realm, go to `Clients` and select your apps Client ID. Under `Settings` -> `Web Origins` insert a new wildcard entry `*`.
3. UserService, MessageService, AgencyService, VideoService, UploadService, ConsultingTypeService: In the corresponding service settings, e.g. `./UserService/UserService.env` add or set the following environment variable: `KEYCLOAK_CORS=true`.

It could also be necessary to install a CORS plugin in your browser to make CORS work correctly.

## CORS settings for production
The CORS settings on the production server need to be more strict:

1. Rocket.Chat: Go to the administration. Go to `General` → `REST API` and set `Enable CORS` to `true`. Allowed `CORS Origin` should only be set to the host domain where your application is running. You also need to add the host of where you set the masterkey from.
2. Keycloak: Select your realm, go to `Clients` and select your apps Client ID. Under `Settings` -> `Web Origins` insert only the host domain where your application is running. If you want to use the Admin API you also need to add the corresponding host here.
3. UserService, MessageService, AgencyService, VideoService, UploadService, ConsultingTypeService: In the corresponding service settings, e.g. `./UserService/UserService.env` add or set the following environment variable: `KEYCLOAK_CORS=false`. If you want to use the Admin API you need to set CORS to `true` **only** for UserService and AgencyService.