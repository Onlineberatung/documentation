---
id: build
title: Build
---

## Create React App

From frontend version `2.0.0` the project is completely based on the toolchain of Create-React-App.
It's a development enviroment to use the latest JavaScript features, providing a nice developer experience and the app for production.
You’ll need to have `Node >= 8.10` and `npm >= 5.6` on your machine.

More information to Create React App you can find in the [official documentation](https://create-react-app.dev/docs/documentation-intro).


## HtmlWebpackPlugin

Due to the need of several entry points, we had to make changes to the webpack configuration. Therefore the Create React App had to be ejected.
For the individual entry points (registration pages, login page, main application and error pages) static HTML files are created in the build process with the help of `HtmlWebpackPlugin`.

To generate a new entry point you have to follow these steps:

- Add a new instance of the HtmlWebpackPlugin inside config/webpack.config.js
- Add all necessary information, such as the title of the page, template parameters, the template to be used, etc.
- Add the new entry point inside the config/paths.js file




## Biotope

> ⚠️ **Deprecated**: From Version 2.0.0 on, Biotope isn't used in the project anymore!

In versions `< 2.0.0` the frontend project was based on the Biotope Boilerplate, which was replaced in the course of `version 2.0.0` with the Create React App toolchain.

If you are running an older version of the frontend project, you can find more information about Biotope in the [official documentation](https://boilerplate.biotope.sh/).