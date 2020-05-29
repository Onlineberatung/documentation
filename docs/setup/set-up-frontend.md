---
id: setupfrontend
title: Setting up the frontend
---

## Setup

### Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager and is used to install all packages.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

> IMPORTANT NOTE ON PERMISSIONS: If you experience permission problems while installing Node.js (especially on Mac or Linux machines) never use `sudo` to install packages with `npm`
> Please ask your IT Admins to give you proper permissions or let them do the installation. See <https://docs.npmjs.com/getting-started/fixing-npm-permissions> for instructions.

## Starting

After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `npm install`
4. After starting the backend set the [masterkey](//TODO LINK TO BE DOCU) for agency- and userService:
   - **initial setup** override username and password in masterkey.js by your [local technical user in keycloak](//TODO LINK TO BE DOCU)  
   - **set masterkey** by running `npm run mk`
5. To
   - **start** the development environment run `npm start`
   - **build** the code for production use run `npm build`

## Build

run the boilerplate with `npm run build` If everything is correct, you will find a build version of your code in the dist directory. This contains among others a min and concat version of your js and css files

## Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

### projectConfig.json

This file lets you override any settings of biotope-build that are exposed in its `config.js` file such as enabling or disabling of certain tasks as well as specifying additional resource folders. Find biotope-build's `config.js` file [here](https://github.com/biotope/biotope-build/blob/master/config.js).

**resource folders**
To add additional resource folders, create the folders and add the paths to the global.resources array.
The path needs to be prepended with a "/" and relative to the src folder.
The default resource folder is "/resources"

**component folders**
To add additional component folders, create the folders and add the paths to the global.components array.
The path needs to be prepended with a "/" and relative to the src folder.
The default components folder is "/components"
If an additinal component folder is added create an additional resource Folder since every components folder nees its own corresponding resource folder.

**tasks**
To disable certain tasks, simply set the specific task to false.
At the moment the tasks that can be disabled are: "linting", "iconfont", "handlebars", "uglify", "cleanCss", "favicons", "cssStats".
Per default all tasks are enabled.

**uglifyExceptions**
You can add files which should not be uglified during the uglify task (e.g. files that are already uglified)

**externalResources**
Add file paths of files that are needed for the build package. The path must be relative to each package inside node_modules.

## Patterns

We use different boilerplates to keep our code structure as homogeneous as possible.

### JavaScript / TypeScript

We also provide the possibility to compile to ES5 or ES6. Depending on the projects browser matrix.

### CSS / SASS

We compile the CSS stylesheets with a SASS compiler. We use the [BEM](http://getbem.com/naming/) methodology to ensure that the component based approach is also reflected in the css (sass) code we write.

### Folder structure

- `/src` is where all of the actual frontend code is stored
- `/src/_assets` holds static placeholder files like images, audio- and video files.
- `/src/_mock` holds files that would be generated dynamically by the cms implementing the frontend and not explicitly corresponding to a component
- `/src/_config` holds the js configuration file
- `/src/pages` holds the base html files to create the index preview
- `/src/resources` holds global resources: JavaScript, TypeScript, SASS/CSS and other files
- `/src/components` holds reusable components and the corresponding resource files
- `/test` is where we put automated tests for Travis CI

## Handlebars

Biotope comes with Handlebars for templating and demonstrating different component scenarios.

### Handlebar Helpers

- `{{> partial}}` - include a handlebars partial. Partials are automatically created from components and partial folders. The partials can be _.hbs or _.html. Example: For the file components/foldername/handlebarsfile.html use the partial identifier foldername/handlebarsfile.
- `{{bioInclude 'partial'}}` - custom partial helper, allows the use of json data as files or a string
- `{{bioDef variable 'default value'}}` - set a default value for a variable
- `{{bioText count max}}` - a filler text with a variable count of letters and an added variance (max)
- `{{bioImg width height src}}` - creates the image src path for generated assets. This helper only creates the path and the image itself. Example: {{bioImg 300 400 srcName.jpg}} gets to '\_assets/generated/srcName_300x400.jpg'
- `{{#bioCompare left, operator, right, options}}` – block helper to compare two values (left, right) with a variable operator.
- `{{bioMath left, operator, right, options}}` – allows math operations between two values (left, right) and a variable operator. Example: {{bioMath 10 '+' 15}} returns 25
- `{{bioCode content}}` – defines a code block to allow curly brackets for other frameworks. Use with {{{{code}}}} {{{{/code}}}} (4 curly brackets for literal string contents)
- `{{bioStringify object}}` – Convert a JSON/JavaScript Object into a string for debugging
- `{{bioParseJSON data options}}` – block helper to parse a String to JSON for debugging

## Troubleshooting

### Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git. Try to check out the repo again.
To prevent this check the git config "core.autocrlf".

### gulp serve malloc error (Unix Only)

******\*\******* gulp(975,0x104c15000) malloc: **_ error for object 0x10164201c: pointer being freed was not allocated _** set a breakpoint in malloc_error_break to debug ******\*\*******

This is caused by missing sass files. Be sure you've done a bower install before `npm start`.