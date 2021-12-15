---
id: statisticsservice
title: StatisticsService
---

## General description

This page describes changes/updates for the StatisticsService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-videoService/blob/master/CHANGELOG.md).

### Unreleased

No unreleased changes yet.

### 2021-12-14

Configure the service initially like documented under [service configuration](../backend/service-configuration.md#statisticsservice).
Please be aware that the video call functionality is currently hidden in the frontend.

Log in as admin user via the NoSqlClient and create a new MongoDb user for the statistics service and also a new database. You can do this via "Management" -> "Tools" -> "Shell". 

Execute the following commands in the shell:

```
use statistics

db.createUser(
   {
     user: "statistics",
     pwd: "<YOUR_DATABASE_PASSWORD>",
     roles: [ { role: "readWrite", db: "statistics" } ]
   }
)
```

⚠️ Replace <YOUR_DATABASE_PASSWORD> with a strong password for the statistics user. ⚠️

`
