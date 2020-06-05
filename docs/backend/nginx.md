---
id: nginx
title: NGINX configuration
---
## Logrotate configuration

The configuration file nginx-logroate for lograte is placed in the hosts filesystem and mounted into the docker container.

The permissions for the configuration file have to be 640 (owner root, no permission for the world). Otherwise lograte will skip the execution.