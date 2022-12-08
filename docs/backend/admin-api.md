---
id: admin-api
title: Admin API
---

There are several endpoints included in Agency- and UserService to perform administrative operations.
Please be sure to disable them through access restriction if you don't need them!
You need CSRF header and cookie together with the roles `agency-admin` (AgencyService) respectively `user-admin` (UserService) to be able to call these endpoints.

You can get an overview of these API endpoints via the known Swagger GUI:
* AgencyService: https://`<HOST>`/service/agencies/docs/
* UserService: https://`<HOST>`/service/users/docs/

or access the generated overview here:
* [AgencyService Admin API root entry-point](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/agencyservice/RootControllerApi.md)
* [AgencyService Admin API endpoints](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/agencyservice/AdminAgencyControllerApi.md)
* [UserService Admin API root entry-point](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/userservice/RootControllerApi.md)
* [UserService Admin API endpoints](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/userservice/AdminUserControllerApi.md)
* [ConsultingTypeService Admin API root entry-point](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/consultingtypeservice/RootControllerApi.md)
* [ConsultingTypeService Admin API endpoints](https://github.com/Onlineberatung/documentation/tree/master/docs/backend/admin/conultingtypeservice/AdminUserControllerApi.md)