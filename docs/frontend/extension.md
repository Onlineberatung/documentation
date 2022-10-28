---
id: extension
title: Extension
---

## Application based extension

By rendering the `<App>` component you can pass an object with some extra routes inside the `extraRoutes` property which will render before all other routes.
Because react router routes are wrapped with the `<switch>` component the first route which matches will be rendered which gives you the ability 
to override already existing routes. For example passing a extraRoute with the path `/registration`


## Code based overrides (webpack)

> ⚠️ **Attention**: Handle with feature with care. If you override huge components you won't get any updates for it anymore

For easier extending/overriding small components this directory reflects the structure of the src folder.

If you wan't to override a file from the src folder just create the same folder structure inside the `/src/extensions` directory and add your custom file.
Webpack will check this directory for files matching the /src directory structure and will completely replace the original component from the `/src` folder 

Example:

To override the Login.tsx file create a file in:

`/src/extensions/components/login/Login.tsx`

This will override the file in:

`/src/components/login/Login.tsx`

#### Best practice

If you want to override only a small part of a file it would be better to create a small component for it in the component you want to override and then override only this small part.
