---
id: video-backend
title: Installing and running the videoBackend
---

In this page we will show how to configure and start a videoBackend.

## Prerequisites
You need some of the same prerequisite as for the [backend](../backend/install-and-running-locally.md):
 - docker-compose
 - a url like ```onlineberatung.local``` or ```onlineberatung.de```
 - your local IP-Address (for local usage)
 
## Steps
 
### Get the files
You have two way's to get the files:
 - checkout with git
 - download as a zip-file

For both way's you need to go to the [videoBackend GitHub Repository](https://github.com/CaritasDeutschland/caritas-onlineBeratung-videoBackend)

### Create the .env (Configuration)
To make our lives easier there is a sample file ```.env.sample```

Copy or rename this file to ```.env```. After that you can customize the file for your needs i.e. :
 - Passwords
 - Port's
 - URL
 - local IP (for local usage)

### Generate passwords
Generally speaking: we need strong passwords everywhere

The Jitsi Community knows that and therefore created a script to support us in that Task: ```gen-passwords.sh```

So just run this file in the directory with the ```.env``` file if you can.

After that check the ```.env``` file to make sure all 6 password variables are set:
 - ```JICOFO_COMPONENT_SECRET```
 - ```JICOFO_AUTH_PASSWORD```
 - ```JVB_AUTH_PASSWORD```
 - ```JIGASI_XMPP_PASSWORD```
 - ```JIBRI_RECORDER_PASSWORD```
 - ```JIBRI_XMPP_PASSWORD```

Alternatively: \
Create password's of your own (i.e. with a Password Manager) and update the above mentioned variables yourself.

### Change port's (if necessary)
There are two Port's configured in ```.env```:
 - ```HTTP_PORT``` for HTTP traffic (unsecure)
 - ```HTTPS_PORT```  for HTTPS traffic (secure)

For local usage you don´t need to change the default port's. 

If you want to use the videoBackend outside of your local machine you might want to change the Port's to 
 - 80 for ```HTTP_PORT```
 - 443 for ```HTTPS_PORT```

### Update URL
You need to configure a URL where your videoBackend is reachable at ```PUBLIC_URL``` in ```.env```.

For local development you can re-use the URL from the backend ```onlineberatung.local``` with the default port's.

ℹ You need to ensure that this URL points to the machine where you intent to start the videoBackend.
 - for ```onlineberatung.local``` you might need to edit your ```hosts``` file and add ```onlineberatung.local``` pointing to ```127.0.0.1``` or the ```ip-address``` of your machine.
 - for ```onlineberatung.de``` (or your Domain) you need to add a DNS record pointing to the ```ip-address``` of the machine running the videoBackend.

### Set local IP (for local usage)
If you run your videoBackend on a local machine you need to put your local IP at ```DOCKER_HOST_ADDRESS``` in ```.env``` and uncomment that specific line by removing the leading ```#```.

## videoBackend Startup
After you configured your videoBackend you can start it by running the command ```docker-compose up -d``` in the directory containing the ```.env``` and ```docker-compose.yml``` files.
 
## Known difficulties
 
### Self-Signed Certificate with Chrome
If you can't access the Jitsi-Page because of a Warning about an unvalid certificate in Chrome, you can try this Tipp:\
Just click anywhere on the screen (to select the tab/page) and type ```thisisunsafe```

This is especially true for Chrome on Mac since it treats things differently than the Windows Version.

See [Stackoverflow](https://stackoverflow.com/questions/58802767/no-proceed-anyway-option-on-neterr-cert-invalid-in-chrome-on-macos/58957322#58957322)
 
 