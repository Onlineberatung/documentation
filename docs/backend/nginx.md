---
id: nginx
title: NGINX configuration
---

## App domain

In several files of the nginx configuration is a placeholder for the app domain. Please replace the placeholde `<app_domain>` with your domain name.

## IP restrictions

Some critical application parts (e.g. Keycloak) should only be accessible from authorized organizations and should only be reachable from specific IP addresses.

A whitelist with ip addresses have to be inserted in these files:

`./nginx/conf/ip-restrictions.conf` \
`./nginx/conf/nginx.conf`

__These whitelists have to contain also the ip address ranges of the docker network and the internal server ip address.__

The following services or third party applications do have whitelist restrictions:
- AgencyService (`./nginx/conf/locations/agencyservice.conf`)
- Keycloak (`./nginx/conf/locations/keycloak.conf`)
- MessageService (`./nginx/conf/locations/messageservice.conf`)
- Rocket.Chat (`./nginx/conf/locations/rocketchat.conf`)
- UploadService (`./nginx/conf/locations/uploadservice.conf`)
- UserService (`./nginx/conf/locations/userservice.conf`)

These define that only paths needed by the client are allowed for external access. All other paths can only be accessed by IP adresses listed in `./nginx/conf/ip-restrictions.conf`.

## Logrotate configuration

The configuration file nginx-logroate for lograte is placed in the hosts filesystem and mounted into the docker container.

The permissions for the configuration file have to be 640 (owner root, no permission for the world). Otherwise lograte will skip the execution.
