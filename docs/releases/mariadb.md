---
id: mariadb
title: 3rd party - MariaDB
---

## General description

This page describes changes / updates for the MariaDB component.

We will list only changes / updates, which we done to use the component.

If you want a changelog, please see the project page at https://mariadb.org.

### Unreleased

Update tag to `10.5.6` - the following changes are necessary:
 - update the tables after restart with `docker exec -it mariadb bash -c "mysql_upgrade -u<ROOT_USER> -p<ROOT_PW>"`