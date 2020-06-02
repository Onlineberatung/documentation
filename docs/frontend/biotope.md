---
id: biotope
title: Biotope
---

The project was initially set up with the Biotope Boilerplate Version 5.4.0. Biotope is a framework which enables you to develop scalabale, platform-agnostic frontend component ecosystems. [Here](https://boilerplate.biotope.sh/) you can find the documentation.

The project is based on the Biotope Build version 6.2.1 and the Biotope Resource Loader with version 1.3.

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