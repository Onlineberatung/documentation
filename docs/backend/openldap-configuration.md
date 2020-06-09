---
id: openldap-configuration
title: OpenLDAP konfigurieren
---
OpenLDAP speichert in der Grundkonfiguration Passwörter im Klartext. Dies muss über eine Konfigurationsänderung angepasst werden.

*Hinweis:* Alle Konfigurationsdateien der folgenden Abschnitte sind im Container im Verzeichnis ```/cob-config``` zu finden.

*Hinweis:* Für die lokale Entwicklung können die Konfigurationsschritte optional übersprungen werden, in diesem Fall nur die Schritte unter dem Punkt _Struktur anlegen_ ausführen.

## Konfigurationsschritte

*Hinweis:* Die Einstellung können nur über den Config-Benutzer und nicht über den Admin-Benutzer durchgeführt werden. Das Standard-Passwort des Config-Benutzers ist _config_.

Alle Befehle müssen im laufenden Docker-Container von OpenLDAP durchgeführt werden. Diese kann durch den folgenden Befehl gestartet werden:

``docker exec -it openldap bash``

(Unter Windows muss noch *winpty* vor *docker* ergänzt werden)

**OpenLDAP ppolicy Schema aktivieren**

 ```ldapmodify -x -a -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /etc/ldap/schema/ppolicy.ldif```

 Zur Überprüfung, ob die Änderungen erfolgreich war, kann folgende Abfrage verwendet werden:

 ```ldapsearch -x -s one -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=schema,cn=config cn -LLL```

**OpenLDAP ppolicy overlay aktivieren**

 *ppolicy-module.ldif:*
 ```
 dn: cn=module{0},cn=config
 changeType: modify
 add: olcModuleLoad
 olcModuleLoad: ppolicy
 ```

 ```ldapmodify -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /cob-config/ppolicy-module.ldif```

 Zur Überprüfung, ob die Änderungen erfolgreich war, kann folgende Abfrage verwendet werden:

  ```ldapsearch -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=config "(objectClass=olcModuleList)" olcModuleLoad -LLL```

**OpenLDAP ppolicy overlay konfigurieren**

  *ppolicy-conf.ldif:*
  ```
  dn: olcOverlay=ppolicy,olcDatabase={1}hdb,cn=config
 objectClass: olcPpolicyConfig
 olcOverlay: ppolicy
 olcPPolicyDefault: cn=ppolicy,dc=ldaptuto,dc=net
 olcPPolicyUseLockout: FALSE
 olcPPolicyHashCleartext: TRUE
  ```

  ```ldapmodify -x -a -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -f /cob-config/ppolicy-conf.ldif```

  Zur Überprüfung, ob die Änderungen erfolgreich war, kann folgende Abfrage verwendet werden:

   ```ldapsearch -x -H ldap://localhost -D cn=admin,cn=config -w <PASSWORD CONFIG USER> -b cn=config "(objectClass=olcPpolicyConfig)" -LLL```

## Struktur anlegen
Die LDAP-Strukur muss angelegt werden.

*Hinweis:* Im Gegensatz zur Konfiguration muss die LDAP-Struktur mit dem Admin-User angelegt werden. Das Standard-Passwort des Admin-User ist _admin_.

```ldapadd -x -D "cn=admin,dc=❌onlineberatung,dc=de" -w <PASSWORD_ADMIN_USER> -H ldap://localhost -f /cob-config/ou-conf.ldif```

Die Struktur ist in der Datei _./openLDAP/ou-conf.ldif_ in LDAP-Ausdrücken beschrieben:

```
dn: ou=cob,dc=❌onlineberatung,dc=de
objectClass: organizationalUnit
ou: cob

dn: ou=users,ou=cob,dc=❌onlineberatung,dc=de
objectClass: organizationalUnit
ou: users
```

Diese Datei ist für die Ausführung des obigen Befehls bereits im Container gemounted.

Die Struktur kann auch von außerhalb dieses Containers über diesen Befehl angelegt werden:
```docker exec openldap bash -c "ldapadd -x -D "cn=admin,dc=❌onlineberatung,dc=de" -w <PASSWORD_ADMIN_USER> -H ldap://localhost -f /cob-config/ou-conf.ldif```
