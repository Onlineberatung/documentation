---
id: openldap-configuration
title: Configure OpenLDAP
---

OpenLDAP stores passwords in plain text in the basic configuration. This must be adjusted via a configuration change.

_Note:_ All configuration files of the following sections can be found in the container in the directory `/ob-config`.

_Note:_ For local development, the configuration steps can optionally be skipped, in this case only perform the steps under the item _Create structure_.

## Configuration steps

_Note:_ The setting can only be done by the Config user and not by the Admin user. The default password of the config user is _config_.

All commands must be performed while the Docker container of OpenLDAP is running. This can be started by the following command:

`docker exec -it openldap bash`

(On Windows _winpty_ must be added before _docker_)

**Enable OpenLDAP policy scheme**

`ldapmodify -x -a -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /etc/ldap/schema/ppolicy.ldif`

To check if the changes were successful, the following query can be used:

`ldapsearch -x -s one -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=schema,cn=config cn -LLL`

**Enable OpenLDAP policy overlay**.

_ppolicy-module.ldif:_

```
dn: cn=module{0},cn=config
changeType: modify
add: olcModuleLoad
olcModuleLoad: ppolicy
```

`ldapmodify -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /ob-config/ppolicy-module.ldif`

To check if the changes were successful, the following query can be used:

`ldapsearch -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=config "(objectClass=olcModuleList)" olcModuleLoad -LLL`

**Configure OpenLDAP policy overlay**.

_ppolicy-conf.ldif:_

```
dn: olcOverlay=ppolicy,olcDatabase={1}hdb,cn=config
objectClass: olcPpolicyConfig
olcOverlay: ppolicy
olcPPolicyDefault: cn=ppolicy,dc=ldaptuto,dc=net
olcPPolicyUseLockout: FALSE
olcPPolicyHashCleartext: TRUE
```

`ldapmodify -x -a -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /ob-config/ppolicy-conf.ldif`

To check if the changes were successful, the following query can be used:

`ldapsearch -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=config "(objectClass=olcPpolicyConfig)" -LLL`

## Create structure

The LDAP structure must be created.

_Note:_ Unlike configuration, the LDAP structure must be created with the admin user. The default password of the admin user is _admin_.

`ldapadd -x -D "cn=admin,dc=onlineberatung,dc=de" -w <PASSWORD_ADMIN_USER> -H ldap://localhost -f /ob-config/ou-conf.ldif`

The structure is described in LDAP expressions in the _./openLDAP/ou-conf.ldif_ file:

```
dn: ou=ob,dc=onlineberatung,dc=de
objectClass: organizationalUnit
ou: ob

dn: ou=users,ou=ob,dc=onlineberatung,dc=de
objectClass: organizationalUnit
ou: users
```

This file is already mounted in the container for the execution of the above command.

The structure can also be created from outside this container using this command:
`docker exec openldap bash -c "ldapadd -x -D "cn=admin,dc=onlineberatung,dc=de" -w <PASSWORD_ADMIN_USER> -H ldap://localhost -f /ob-config/ou-conf.ldif"`