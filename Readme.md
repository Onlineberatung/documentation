# Caritas Online-Beratung Documentation

This is the repository containing the Caritas Online-Beratung Documentation.

## Hints

### Local start

To run the documentation locally you need to do the following steps:

1. switch to `website`directory
2. run `npm install`
3. run `npm start`

This will start a local webserver with hot-reloading so you can view your changes directly in the automatically opened webpage.

### Sidebar changes (new Pages / new Categories)

Pages and categories of the sidebar are defined in `website\sidebars.json`.

Notes:

- This changes require a server-restart
- If you add a page, the structure is `<folder>/<page-id>`

### New page

New pages need a header which defines a id and a title for the page like the following:

`---`\
`id: keycloak`\
`title: 3rd party - Keycloak`\
`---`

## Publish the documentation

This documentation is automatically published to github pages on any merges to `master` via github workflow.

## License

The project is licensed under the AGPLv3 which you'll find [here](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend/blob/master/LICENSE.md).

## Code of Conduct

Please have a look at our [Code of Conduct](https://github.com/CaritasDeutschland/.github/blob/master/CODE_OF_CONDUCT.md) before participating in the community.

## Contributing

Please read our [contribution guidelines](https://github.com/CaritasDeutschland/.github/blob/master/CONTRIBUTING.md) before contributing to this project.
