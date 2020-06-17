---
id: nginx
title: NGINX configuration
---

## App domain

In several files of the nginx configuration is a placeholder for the app domain. Please replace the placeholde `<app_domain>` with your domain name.

## IP restrictions

Some critical application parts (e.g. Keycloak) should only be accessible from authorized organizations and should only be reachable from specific ip addresses.

A whitelist with ip addresses have to be inserted in these files:

`./nginx/conf/ip-restrictions.conf` \
`./nginx/conf/nginx.conf`

__These whitelists have to contain also the ip address ranges of the docker network and the internal server ip address.__

## Logrotate configuration

The configuration file nginx-logroate for lograte is placed in the hosts filesystem and mounted into the docker container.

The permissions for the configuration file have to be 640 (owner root, no permission for the world). Otherwise lograte will skip the execution.