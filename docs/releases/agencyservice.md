---
id: agencyservice
title: AgencyService
---

## General description

This page describes changes/updates for the AgencyService.

Only changes that are necessary to use the requested version are listed in this document.

If you want a changelog please see the [project changelog](https://github.com/CaritasDeutschland/caritas-onlineBeratung-agencyservice/blob/master/CHANGELOG.md).

### Unreleased

1. You need to create an additional role in keycloak (`<app_domain>/auth` -> administration console
) named `agency-admin` and add a user having the
     following role:
     - `agency-admin`
    
    `Note: only this user will have access to the admin interface`

2. Add the NGINX location in agencyservice.conf for new admin paths (see [Backend-Repository
](https://github.com/CaritasDeutschland/caritas-onlineBeratung-backend))

### 2020-11-03

Update tag to `dockerImage.v.6.release-2020-11-03` in the `.env` file - no additional changes necessary 

### 2020-10-13

Update tag to `dockerimage.v.3` in the `.env` file - no additional changes necessary 
