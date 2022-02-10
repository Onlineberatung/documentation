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
|[AgencyService](../releases/agencyservice.md)|`dockerimage.v.49.release-2021-12-14`|
|[Frontend](../releases/frontend.md)|`dockerImage.v.251.develop`|
|[LiveService](../releases/liveservice.md)|`dockerImage.v.35.release-2021-12-14`|
|[MailService](../releases/mailservice.md)|`dockerImage.v.27.release-2022-02-03`|
|[MessageService](../releases/messageservice.md)|`dockerImage.v.40.release-2021-12-14`|
|[NGINX](../releases/nginx.md)|`dockerImage.v.6.release-2021-06-22`|
|[UploadService](../releases/uploadservice.md)|`dockerImage.v.31.release-2021-12-14`|
|[UserService](../releases/userservice.md)|`dockerImage.v.209.hotfix-2022-02-09`|
|[VideoService](../releases/videoservice.md)|`dockerImage.v.22.release-2021-12-14`|
|[StatisticsService](../releases/statisticsservice.md)|`dockerImage.v.3.release-2021-12-14`|
|[ConsultingTypeService](../releases/consultingtypeservice.md)|`dockerImage.v.18.release-2021-12-14`|
 
### 3rd party components
|Component|Current image version|
|--- |--- |
|[Adminer](../releases/adminer.md)|`4.8.1`|
|[Keycloak](../releases/keycloak.md)|`13.0.1`|
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
