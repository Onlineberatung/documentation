---
id: setup-frontend
title: Setting up the frontend
---

## Setup

### Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager and is used to install all packages.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.
4. Open your command line / terminal / bash
5. Navigate to the project folder
6. Run `npm install`

> IMPORTANT NOTE ON PERMISSIONS: If you experience permission problems while installing Node.js (especially on Mac or Linux machines), never use `sudo` to install packages with `npm`.
> Please ask your IT Admins to give you proper permissions or let them do the installation. See <https://docs.npmjs.com/getting-started/fixing-npm-permissions> for instructions.

### Setup Backend

To run the application locally you'll need to setup the backend first.

Please follow these steps:
 
1. [Setup the backend locally](../backend/install-and-running-locally)
2. [Create core data and import users](../backend/create-core-data-import-users)
3. Provide the master key for message encryption to the services by running `node masterkey.js`. If you experience timeouts while trying to set the masterkeys please check that the services are able to reach Keycloak (and vice versa) in your firewall settings.

## Starting

After you're are finished with the setup steps and all services work, run these steps to get your project on the road:

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. [Start the backend first](../backend/starting-and-stopping-the-services)
4. Afterwards you can start the frontend with `npm start`

## Build

Run the boilerplate with `npm run build`. If everything is correct, you will find a build version of your code in the dist directory. This contains among others a minified and concatenated version of your js and css files.
