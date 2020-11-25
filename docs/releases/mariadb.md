---
id: mariadb
title: 3rd party - MariaDB
---

## General description

This page describes changes/updates for the MariaDB component.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the project page at https://mariadb.org.

### Unreleased

No unreleased changes yet.

### 2020-11-25

Update tag to `10.5.6` in the `docker-compose.yml` file - the following changes are necessary:
 - update the tables after restart with `docker exec -it mariadb bash -c "mysql_upgrade -u <ROOT_USER> -p <ROOT_PW>"`