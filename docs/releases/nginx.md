---
id: nginx
title: NGINX
---

## General description

This page describes changes/updates for the NGINX component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-nginx/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2021-12-14

If you do NOT want to use the RabbitMQ management console (recommended for production) you do NOT need the file `nginx\conf\server\server-rabbitmq.conf`.
  
### 2021-06-23

Update tag to `dockerImage.v.6.release-2021-06-22` in the `.env` file.

Add a new location named `nginx/conf/locations/consultingtypeservice.conf`:
```# ConsultingTypeService
location /service/consultingtypes {
    limit_req zone=by_ip_5rs burst=5;
    proxy_pass http://consultingtypeservice:8080/consultingtypes;
    resolver 127.0.0.11;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto http;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
location /consultingtypeadmin {
    limit_req zone=by_ip_5rs burst=5;
    proxy_pass http://consultingtypeservice:8080/consultingtypeadmin;
    resolver 127.0.0.11;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto http;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
location /service/consultingtypes/docs {
    deny all;
}
```

### 2021-05-04

Endpoints which where reachable without SSL or via IP have been deactivated/ respectively forwarded to the correct HTTPS endpoint.
Furthermore the complete structure of the NGINX configuration has been reorganised, it is suggested to remove all old `.conf` files (please make sure you backup them for comparison!) and replace them with the new versions in the master repository (folder `./nginx/conf`). \
Afterwards please follow the instructions under [NGINX configuration](../backend/nginx.md). \
Furthermore you have to make a few changes to the docker-compose.yml:
- Remove the port assignment from nosqlclient (`ports: - 3001:3000`)
- Remove the port assignment from rocketchat (`ports: - 3000:3000`)
- add the following port definitions to the proxy/nginx:
  - `- 3000:3000`
  - `- 3001:3001`
- remove the following volume mappings from the proxy/nginx:
  - `- ./nginx/conf/nginx.conf:/etc/nginx/nginx.conf`
  - `- ./nginx/conf/ip-restrictions.conf:/etc/nginx/ip-restrictions.conf`
  - `- ./nginx/conf/server.conf:/etc/nginx/server.conf`
  - `- ./nginx/conf/server-ssl.conf:/etc/nginx/server-ssl.conf`
  - `- ./nginx/conf/security-headers.conf:/etc/nginx/security-headers.conf`
  - `- ./nginx/conf/adminer.conf:/etc/nginx/adminer.conf`
- add the following mapping to the proxy/nginx volumes:
  - `- ./nginx/conf/server:/etc/nginx/server`

### 2021-03-23

Add the following line to `conf/security-headers.conf`:  
`add_header Access-Control-Expose-Headers "X-Reason";`

### 2020-11-03

Update tag to `dockerImage.v.4.release-2020-11-03` in the `docker-compose.yml` file - no additional changes necessary.

### 2020-10-13

Whitelist configuration needs to be updated:
 - see `rocketchat.conf` and `keycloak.conf` in [Backend-Repository](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/tree/master/nginx/conf/locations)
