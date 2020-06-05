---
id: tools
title: Tools
---

## Prettier

We use [Prettier](https://prettier.io/) to format all files inside the src directory. This is done on every commit and on every pull request using github actions. The exact Prettier configuration can be found in the .prettierrc.yml file in the root directory of the frontend repository.

## ESLint
We use [ESLint](https://eslint.org/) to identify problematic patterns found in JavaScript and Typescript code. We have extended the recommended ESlint and React rules with some further rules which can be found in the .eslintrc.js file in the root directory of the frontend repository.

The linter is executed on every pull request using github actions. This will highlight potential errors that need to be adjusted before a merge to the target branch is allowed.