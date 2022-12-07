---
id: create-core-data-import-users
title: Create core data and import users
---

# Entering Data
For the online counselling service, master data (consulting offices, consultants, etc.) need to be
created. By default, one example consulting agency and one consultant are created in the system at
setup. For this purpose, the following REST API endpoints should be used.

## Obtaining an authorization token
In order to use the REST APIs to populate the system with data, one has to obtain an authorization
bearer token first.

```
curl --location --request POST '<baseUrl>/auth/realms/online-beratung/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=app' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=<admin_user>' \
--data-urlencode 'password=<admin_password>'
```

This POST will return a json with a field called `access_token` which has the needed authorization
token.

## AgencyService: Agencies

### Create agencies

```
curl --location --request POST '<baseUrl>/agencyadmin/agencies' \
--header 'Content-Type: application/json' \
--header 'Accept: application/hal+json' \
--header 'Authorization: <API Key>' \
--data-raw '{
  "dioceseId": 1,
  "name": "<string>",
  "teamAgency": "<boolean>",
  "consultingType": "<integer>",
  "external": "<boolean>",
  "description": "<string>",
  "postcode": "<string>",
  "city": "<string>",
  "url": "<string>",
  "topicIds": [
    "<long>",
    "<long>"
  ],
  "demographics": {
    "ageFrom": "<integer>",
    "ageTo": "<integer>",
    "genders": [
      "<string>",
      "<string>"
    ]
  },
  "tenantId": 1
}'
```

#### Description of the fields

| Name               | Type        | Description                                    | Notes                        |
|--------------------|-------------|------------------------------------------------|------------------------------|
| **dioceseId**      | **Long**    | ID of the administrative division, should be 1 | [default to null]            |
| **name**           | **String**  | Name of the agency                             | [default to null]            |
| **description**    | **String**  | Description of the agency                      | [optional] [default to null] |
| **postcode**       | **String**  | Postcode of the agency                         | [optional] [default to null] |
| **city**           | **String**  | City of the agency                             | [optional] [default to null] |
| **teamAgency**     | **Boolean** | Is a team agency?                              | [default to null]            |
| **consultingType** | **Integer** | TODO?                                          | [default to null]            |
| **url**            | **String**  | Leave empty                                    | [optional] [default to null] |
| **external**       | **Boolean** |                                                | [default to null]            |
| **topicIds**       | **List**    | Leave empty                                    | [optional] [default to null] |
| **demographics**   | **Object**  |                                                | [optional] [default to null] |
| **ageFrom**        | **Integer** |                                                | [optional] [default to null] |
| **ageTo**          | **Integer** |                                                | [optional] [default to null] |
| **genders**        | **List**    |                                                | [optional] [default to null] |
| **tenantId**       | **Long**    | ID of the tenant, should be 1                  | [optional] [default to null] |

## UserService: Consultants

### Creating a Consultant
```
curl --location --request POST 'https://dev.caritas.dev.virtual-identity.com/useradmin/consultants' \
--header 'Content-Type: application/json' \
--header 'Accept: application/hal+json' \
--header 'Authorization: <API Key>' \
--header 'Cookie: CSRF-TOKEN=test' \
--data-raw '{
"username": "<string>",
"firstname": "<string>",
"lastname": "<string>",
"email": "<string>",
"formalLanguage": "<boolean>",
"absent": "<boolean>",
"absenceMessage": "<string>",
"tenantId": 1
}'
```

#### Description of the fields

| Name               | Type        | Description               | Notes                        |
|--------------------|-------------|---------------------------|------------------------------|
| **username**       | **String**  | Username                  | [default to null]            |
| **firstname**      | **String**  | First name                | [default to null]            |
| **lastname**       | **String**  | Last name                 | [default to null]            |
| **email**          | **String**  | E-mail address            | [default to null]            |
| **formalLanguage** | **Boolean** | Is formal language wanted | [default to null]            |
| **absent**         | **Boolean** | Is absent                 | [default to null]            |
| **absenceMessage** | **String**  | Absence note              | [optional] [default to null] |
| **tenantId**       | **Integer** | Tenant ID, should be 1    | [optional] [default to null] |