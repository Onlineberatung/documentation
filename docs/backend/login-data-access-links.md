---
id: login-data-access-links
title: Login data and access links
---
## Adressen
Die einzelnen Komponenten sind unter folgenden Adressen erreichbar:

* Rocket.Chat: http://`<HOST>`:3000
* Nosqlclient: http://`<HOST>`:3001
* Keycloak: http://`<HOST>`/auth
* Adminer: http://`<HOST>`:3002
    * Init-Benutzer: root
    * Init-Passwort: root

Die Anwendung selbst ist unter http://`<HOST>` erreichbar

## REST API documentation
The REST API documentation of the single services can be found under the following locations. Please note that the locations on the server should normally be blocked for external access. This access can be configured within the nginx location configurations (e.g. location `/service/agencies/docs` within `./nginx/conf/locations/agencyservice`. Change `deny all` to e.q. `include ip-restrictions.conf;` to allow access for authorized IP addresses only. See [NGINX configuration](../backend/nginx.md) for more details on path whitelisting.

* AgencyService: https://`<HOST>`/service/agencies/docs/
* LiveService: https://`<HOST>`/service/liveevent/docs/
* MailService: https://`<HOST>`/service/mails/docs/
* MessageService: https://`<HOST>`/service/messages/docs/
* UserService: https://`<HOST>`/service/users/docs/
* UploadService: https://`<HOST>`/service/uploads/docs/
* VideoService: https://`<HOST>`/service/videos/docs/