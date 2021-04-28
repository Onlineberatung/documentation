---
id: setup-frontend
title: Setting up the frontend
---

The frontend app for the Caritas Online Beratung has two responsibilities:

1. Be the executable frontend app for the Caritas Online Beratung
2. Provide build tools and app code as a library, so this app can be developed and published in a themed setup

## General setup

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

## App setup

### Setup backend

To run the application locally you'll need to setup the backend first.

Please follow these steps:
 
1. [Setup the backend locally](../backend/install-and-running-locally)
2. [Create core data and import users](../backend/create-core-data-import-users)
3. Open `masterkey.js` and make sure the `postData` and `options` are correct. The master key itself needs to be set as the `MASTERKEY` environment parameter in `.env`. Afterwards you can provide the key for message encryption to the services by running `node masterkey.js`. If you experience timeouts while trying to set the master keys please check that the services are able to reach Keycloak (and vice versa) in your firewall settings.

### Starting

After you're are finished with the setup steps and all services work, run these steps to get your project on the road:

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Adjust the [CORS configuration](../backend/cors-configuration)
4. Afterwards you can start the frontend with `npm start`
5. Adjust the backend setup to use the local frontend. For this you can edit `nginx/conf/locations/common.conf` and modify the line mentioning `proxy_pass` to point to your frontend host, including the port.
6. [Start the backend](../backend/starting-and-stopping-the-services)
7. The frontend opens at your configured host. To avoid CORS issues during the login, remove the port and login by just using the host.

### Test

With `npm test` you can run the Cypress end-to-end tests with a mocked backend.

### Build

By running `npm run build`, you can build the app for production. The built assets are copied to the `build` folder.

## Library setup

### Theming and configuration

When this project is used as a dependency, the consumer needs to fork these files from this repository into the consuming repository:

```
src
  pages
    app.html
    under-construction.html
  resources
    scripts
      i18n
        defaultLocale.ts
        informalLocale.ts
      config.ts
    styles
      settings.scss
  initApp.tsx
  initError.tsx
  initLogin.tsx
```

They can be used to provide the necessary configuration and theming to the consuming app.

In `settings.scss` you should replace the file content with `@import '~@caritasdeutschland/caritas-online-beratung-frontend/defaults';` to use the current defaults and only override what's necessary. By defining a `setup-fonts` mixin, you can import custom fonts from the stylesheet.

### CLI scripts

Additionally, these scripts are available:

```sh
# Run the dev server
@caritasdeutschland/caritas-online-beratung-frontend start

# Build the app for production
@caritasdeutschland/caritas-online-beratung-frontend build
```

