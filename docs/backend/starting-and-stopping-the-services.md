---
id: starting-and-stopping-the-services
title: Starting and stopping the services
---
## Starting all services
Start all services by running `docker-compose up -d` in the base folder of your backend (where `docker-compose.yml` is located).

### Set master keys
After the start of Message-, User- and UploadService one has to provide the master key for message encryption to the services.
Therefore you need to call the [REST API endpoints](../backend/login-data-access-links.md) to set the master key with the technical (Keycloak) user and correct CSRF header and cookie key value pairs. In the body you should provide the key, e.q.:

__Note: The master key for UserService, UploadService and MessageService must be the same__!

``{
	"masterKey": "<masterKey>"
}``

* MessageService: POST on https://<host>/service/messages/key
* UploadService: POST on https://<host>/service/uploads/messages/key
* UserService: POST on https://<host>/service/users/messages/key

## Stopping all services
Stop all services by running `docker-compose down` in the base folder of your backend (where `docker-compose.yml` is located).

### Troubleshooting
* Start all services by running `docker-compose up` (without *-d*). All log outputs of the single components will then be printed to console.
* Alternatively you can inspect the logs of a specific container by calling `docker logs <container name>`
* If you experience timeouts while trying to set the master keys please check that the services are able to reach Keycloak (and vice versa) in your firewall settings.
