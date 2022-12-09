---
id: create-core-data-import-users
title: Create core data and import users
---

# Entering Data
In order to enter master data (consulting offices, consultants, etc.) for the online counselling
service, the following REST API endpoints needs to be used.
By default, one example consulting agency and one consultant are created in the system at
setup, those can be deleted or disabled.

## Obtaining an Authorization Token
In order to use the REST APIs to populate the system with data, one has to obtain an authorization
bearer token first.
For this, use can use the `admin` <u>user</u> (**NOT** the keycloak admin).

```bash
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

### Getting all Agencies

Use the optional URL parameters for searching/filtering.

```bash
curl --location --request GET '<baseUrl>/service/agencyadmin/agencies?q=<string>&page=<integer>&perPage=<integer>&field=<string>&order=<string>' \
--header 'Accept: application/hal+json' \
--header 'Authorization: Bearer <API Key>'
```

### Getting an Agency by ID

```bash
curl --location --request GET '<baseUrl>/service/agencyadmin/agencies/<agencyId>' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <API Key>'
```

### Creating and Updating Agencies

```bash
curl --location --request POST '<baseUrl>/service/agencyadmin/agencies' \
--header 'Content-Type: application/json' \
--header 'Accept: application/hal+json' \
--header 'Authorization: Bearer <API Key>' \
--data-raw '{
  "dioceseId": 0,
  "name": "<string>",
  "teamAgency": "<boolean>",
  "consultingType": 1,
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

Use the same format with `PUT '<baseUrl>/agencyadmin/agencies/<agencyId>'` to update an existing agency.

#### Description of the Fields

| Name               | Type        | Description                                    | Notes                        |
|--------------------|-------------|------------------------------------------------|------------------------------|
| **dioceseId**      | **Long**    | ID of the administrative division, should be 0 | [default to null]            |
| **name**           | **String**  | Name of the agency                             | [default to null]            |
| **description**    | **String**  | Description of the agency                      | [optional] [default to null] |
| **postcode**       | **String**  | Postcode of the agency                         | [optional] [default to null] |
| **city**           | **String**  | City of the agency                             | [optional] [default to null] |
| **teamAgency**     | **Boolean** | Is a team agency                               | [default to null]            |
| **consultingType** | **Integer** | ID of the consulting type, should be 1         | [default to null]            |
| **url**            | **String**  | Leave empty                                    | [optional] [default to null] |
| **external**       | **Boolean** | Is external                                    | [default to null]            |
| **topicIds**       | **List**    | Leave empty                                    | [optional] [default to null] |
| **demographics**   | **Object**  | Demographics object                            | [optional] [default to null] |
| **ageFrom**        | **Integer** | From Age                                       | [optional] [default to null] |
| **ageTo**          | **Integer** | To Age                                         | [optional] [default to null] |
| **genders**        | **List**    | List of genders (MALE,FEMALE,DIVERS)           | [optional] [default to null] |
| **tenantId**       | **Long**    | ID of the tenant, should be 1                  | [optional] [default to null] |

### Flagging an Agency for Deletion

```bash
curl --location --request DELETE '<baseUrl>/agencyadmin/agencies/<agencyId>' \
--header 'Authorization: Bearer <API Key>'
```

## UserService: Consultants

### Getting all Consultants

Use the optional URL parameters for searching/filtering.

```bash
curl --location --request GET '<baseUrl>/useradmin/consultants?username=<string>&lastname=<string>&email=<string>&agencyId=<long>&absent=<boolean>&page=<integer>&perPage=<integer>&field=<string>&order=<string>' \
--header 'Accept: application/hal+json' \
--header 'Authorization: Bearer <API Key>'
```

### Getting a Consultant by ID

```bash
curl --location --request GET '<baseUrl>/useradmin/consultants/<consultantId>' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <API Key>'
```

### Creating a Consultant
```bash
curl --location --request POST '<baseUrl>/useradmin/consultants' \
--header 'Content-Type: application/json' \
--header 'Accept: application/hal+json' \
--header 'Authorization: Bearer <API Key>' \
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

Use the same format with `PUT '<baseUrl>/useradmin/consultants/<consultantId>'` to update an existing consultant.

#### Description of the Fields

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

### Flagging a Consultant for Deletion

```bash
curl --location --request DELETE '<baseUrl>/useradmin/consultants/<consultantId>' \
--header 'Authorization: Bearer <API Key>'
```