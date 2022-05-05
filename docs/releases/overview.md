---
id: overview
title: Overview
---

## General Description

In this section we will describe the current status and changes for a given release.

Be aware that some are as simple as changing version numbers while others need some extra configuration and some might even need some tweaking inside a docker container.

## Most recent versions

Below is the list of most recent versions split into own services and 3rd party components.

If you want to check what services/components need changes for a given release please see our [version history](../releases/versionhistory.md).

If you want to check the individual service/component please klick on the corresponding link.

### Own services
|Service|Current image version|
|--- |--- |
|[AgencyService](../releases/agencyservice.md)|`dockerImage.v.51.release-2022-03-29`|
|[Frontend](../releases/frontend.md)|`dockerImage.v.296-release-2022-03-29`|
|[LiveService](../releases/liveservice.md)|`dockerImage.v.38.release-2022-03-29`|
|[MailService](../releases/mailservice.md)|`dockerImage.v.28.release-2022-05-05`|
|[MessageService](../releases/messageservice.md)|`dockerImage.v.46.release-2022-03-29`|
|[NGINX](../releases/nginx.md)|`dockerImage.v.6.release-2021-06-22`|
|[UploadService](../releases/uploadservice.md)|`dockerImage.v.36.release-2022-03-29`|
|[UserService](../releases/userservice.md)|`dockerImage.v.274.release-2022-05-05`|
|[VideoService](../releases/videoservice.md)|`dockerImage.v.26.release-2022-05-05`|
|[StatisticsService](../releases/statisticsservice.md)|`dockerImage.v.5.release-2022-03-29`|
|[ConsultingTypeService](../releases/consultingtypeservice.md)|`dockerImage.v.22.release-2022-05-05`|
 
### 3rd party components
|Component|Current image version|
|--- |--- |
|[Adminer](../releases/adminer.md)|`4.8.1`|
|[Keycloak](../releases/keycloak.md)|`17.0.0`|
|[MariaDB](../releases/mariadb.md)|`10.5.10`|
|[MongoDB](../releases/mongodb.md)|`4.0.5`|
|[Nosqlclient](../releases/nosqlclient.md)|`4.0.1`|
|[OpenLDAP](../releases/openldap.md)|`1.4.0`|
|[RabbitMQ](../releases/rabbitmq.md)|`3.8.18`|
|[Rocket.Chat](../releases/rocketchat.md)|`3.14.4`|

 
### Backend stacks
To tie the services and components together we use a repository called ```backend```.\
For the VideoBeratung we have a dedicated backend: ```videoBackend```.

|Backend-Component|
|--- |
|[Backend](../releases/backend.md)|
|[VideoBackend](../releases/videobackend.md)|
