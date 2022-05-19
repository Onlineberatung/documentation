---
id: ssl-certificate
title: SSL certificate
---

## Integrate own certificates

The following describes how to integrate an SSL certificate.

# Configuration

The certificate data must be stored on the server, a .pem file and the corresponding key file (.key) are required. Furthermore you should create an individual Diffie-Hellman parameter file. This can be done via `openssl` with the following command:

```openssl dhparam -out <filename> 4096```

The paths (`<path_to_pem_file>`, `<path_to_key_file>`, `path_to_dhparam_file`) to the corresponding files must then be stored in the file `./nginx/conf/ssl-default.conf`.

## Let's encrypt

The following describes how to set up an SSL certificate from Let's Encrypt.

### acme.sh

Requesting and renewing the certificate is done via **acme.sh**:

https://github.com/Neilpang/acme.sh \
https://github.com/Neilpang/Run-acme.sh-in-docker \
https://hub.docker.com/r/neilpang/acme.sh

The acme.sh container is responsible for requesting and renewing the certificate.

#### Request SSL certificate

The certificate is generated and retrieved from Let's Encrypt using the following command:

`docker-compose exec acme-sh --issue --standalone -d <Host> --keylength ec-256 --force`

This command usually needs to be performed only once.

#### Install SSL certificate

The certificate is installed using the following command:

`docker-compose exec acme-sh --install-cert -d <Host> --ecc --reloadcmd "cp /acme.sh/<Host>_ecc/<Host>.key /var/ssl/proxy && cp /acme.sh/<Host>_ecc/<Host>.cer /var/ssl/proxy"`

The certificate file and the associated key file are copied to the /ssl backend folder. The nginx also has access to this folder, so that the certificate is included via it.

#### Renew SSL certificate

**acme.sh** normally takes care of renewing the SSL certificate on its own before it expires. However, the nginx must be restarted for the renewed certificate to be loaded.

The command for reloading the configuration at the nginx can be added to the command for installing the certificate, e.g.

`docker-compose exec acme-sh --install-cert -d <Host> --ecc --reloadcmd "cp /acme.sh/<Host>_ecc/<Host>.key /var/ssl/proxy && cp /acme.sh/<Host>_ecc/<Host>.cer /var/ssl/proxy && <HIER EINFÜGEN>"`

However, the nginx configuration is currently renewed weekly via a cron command by restarting the container:

`0 0 7 * * docker restart nginx >/dev/null 2>&1`