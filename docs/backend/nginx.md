---
id: nginx
title: NGINX configuration
---

## App domain

Please replace the placeholder `<app_domain>` with your domain name and `<app_ip_address>` with your (if reachable from the outside) external IP address in the following files:

`./nginx/conf/server/server-adminer.conf` \
`./nginx/conf/server/server-default.conf` \
`./nginx/conf/server/server-nosqlclient.conf` \
`./nginx/conf/server/server-rocketchat.conf`

## IP restrictions

Some critical application parts (e.g. Keycloak or during maintenance mode) should only be accessible from authorized organizations and should only be reachable from specific IP addresses.
A whitelist with IP addresses has to be inserted in these files:

`./nginx/conf/ip-restrictions.conf` \
`./nginx/conf/maintenance.conf`

__Important: These whitelists must contain the IP address ranges of the docker network and the internal server IP address.__

The following services or third party applications do have whitelist restrictions:
- AgencyService (`./nginx/conf/locations/agencyservice.conf`)
- Keycloak (`./nginx/conf/locations/keycloak.conf`)
- LiveService (`./nginx/conf/locations/liveservice.conf`)
- MessageService (`./nginx/conf/locations/messageservice.conf`)
- Rocket.Chat (`./nginx/conf/locations/rocketchat.conf`)
- UploadService (`./nginx/conf/locations/uploadservice.conf`)
- UserService (`./nginx/conf/locations/userservice.conf`)
- VideoService (`./nginx/conf/locations/videoservice.conf`)

These define that only paths needed by the client are allowed for external access. All other paths can only be accessed by IP addresses listed in `./nginx/conf/ip-restrictions.conf`.

## Rocket.Chat CORS settings

The standard configuration of Rocket.Chat returns multiple `access-control-allow-origin'` header values in the OPTIONS call which is not conform to the HTTP header specifications and therefore can't be handled from several applications. To set only one allowed origin in the OPTIONS call you can insert a list of IP addresses/ranges or host names for which this action should take place in the following file: `./nginx/conf/cors-rocketchat.conf`.

## Rate limiting

There are already four predefined rate limiting zones contained in the file `./nginx/conf/rate-limit.conf`. These zones are being included in the different location files (e.g. `./nginx/conf/locations/messageservice.conf`) for the rate limiting to take place.
If you want to exclude some services or external applications from rate limiting insert the corresponding IP adresses in the IP whitelist.

__Important: This whitelist also must contain the IP address ranges of the docker network and the internal server IP address.__

Please keep in mind to adjust these rate limits with the ones defined in Rocket.Chat!

## SSL/TLS

Please note that this application is pre-defined to only use TLS version 1.2 and 1.3! For admin endpoints such as Keycloak, adminer, NoSQLClient and Rocket.Chat only browsers supporting TLS 1.3 are supported. If you are sure your users only use the latest browser versions you can even remove the support of TLS 1.2 (which is recommended) in the following file: `./nginx/conf/ssl-default.conf`. \
The setup of a SSL certificate is described [here](../backend/ssl-certificate.md).

__All locations are configured to redirect to HTTPS if HTTP or the host IP address is requested.__

This behaviour is (among others) defined in the configuration files under `./nginx/conf/server/`.

## Logging

### Logrotate configuration

The configuration file `nginx-logroate` for log rotation is placed in the hosts filesystem and mounted into the docker container.
The permissions for the configuration file have to be 640 (owner root, no permission for the world). Otherwise lograte will skip the execution.

### Log format

The format of the NGINX access log can be defined in the file `./nginx/conf/log-format.conf`. It is configured to _not_ log IP addresses for the greatest possible anonymity of the user. 

### Anonymous error log format

Because NGINX does not support a log format definition for error logs specific HTTP errors are being intercepted and logged in the same format as the access log to the error log. You can find the full definition in the file `./nginx/conf/custom-error-logging.conf`. This is also necessary for the user's anonymity.