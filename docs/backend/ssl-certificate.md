---
id: ssl-certificate
title: SSL certificate
---

Nachfolgend wird beschrieben wie ein SSL-Zertifikat von Let's Encrypt eingerichtet wird. Alternative Zertifikatsanbieter sind natürlich auch für den Einsatz in der Caritas Online-Beratung möglich.

## acme.sh

Das Anfordern und Erneuern des Zertifikats erfolgt über **acme.sh**:

https://github.com/Neilpang/acme.sh \
https://github.com/Neilpang/Run-acme.sh-in-docker \
https://hub.docker.com/r/neilpang/acme.sh

Der acme.sh-Container ist für das Anfordern und Erneuern des Zertifikats zuständig.

### SSL-Zertifikat anfordern

Das Zertifikat wird über folgenden Befehl bei Let's Encrypt erzeugt und abgeholt:

`docker-compose exec acme-sh --issue --standalone -d <Host> --keylength ec-256 --force`

Dieser Befehl ist i.d.R. nur einmal durchzuführen.

### SSL-Zertifikat installieren

Das Installieren des Zertifikats erfolgt über folgenden Befehl:

`docker-compose exec acme-sh --install-cert -d <Host> --ecc --reloadcmd "cp /acme.sh/<Host>_ecc/<Host>.key /var/ssl/proxy && cp /acme.sh/<Host>_ecc/<Host>.cer /var/ssl/proxy"`

Hierbei werden die Zertifikatsdatei sowie die zugehörige Schlüssel-Datei in den Backend-Order /ssl kopiert. Auf diesen Ordner hat auch der nginx Zugriff, so dass darüber das Zertifikat eingebunden ist.

### SSL-Zertifikat erneuern

**acme.sh** kümmert sich normalerweise selbstständig um das Erneuern des SSL-Zertifikats bevor dieses abläuft. Allerdings muss der nginx neu gestartet werden damit das erneuterte Zertifikat geladen wird.

Der Befehl für das erneute Laden der Konfiguration beim nginx kann dem Befehl für das Installieren des Zertifikats hinzugefügt werden, z.B.

`docker-compose exec acme-sh --install-cert -d <Host> --ecc --reloadcmd "cp /acme.sh/<Host>_ecc/<Host>.key /var/ssl/proxy && cp /acme.sh/<Host>_ecc/<Host>.cer /var/ssl/proxy && <HIER EINFÜGEN>"`

Die nginx-Konfiguration wird derzeit allerdings über einen cron-Befehl wöchentlich erneuert, indem der Container neu gestartet wird:

`0 0 7 * * docker restart nginx >/dev/null 2>&1`
