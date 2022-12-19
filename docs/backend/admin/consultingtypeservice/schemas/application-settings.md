# Application settings Schema

```txt
https://onlineberatung/consultingtype
```

Settings for application instance

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [application-settings.json](application-settings.json "open original schema") |

## Application settings Type

`object` ([Application settings](application-settings.md))

# Application settings Properties

| Property                                                                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [multitenancyWithSingleDomainEnabled](#multitenancywithsingledomainenabled)                       | `object`      | Required | cannot be null | [Application settings](application-settings-properties-multitenancywithsingledomainenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyWithSingleDomainEnabled")                       |
| [multitenancyEnabled](#multitenancyenabled)                                                       | `object`      | Required | cannot be null | [Application settings](application-settings-properties-multitenancyenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyEnabled")                                                       |
| [useTenantService](#usetenantservice)                                                             | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-usetenantservice.md "https://onlineberatung/consultingtype#/properties/useTenantService")                                                             |
| [enableWalkthrough](#enablewalkthrough)                                                           | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-enablewalkthrough.md "https://onlineberatung/consultingtype#/properties/enableWalkthrough")                                                           |
| [disableVideoAppointments](#disablevideoappointments)                                             | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-disablevideoappointments.md "https://onlineberatung/consultingtype#/properties/disableVideoAppointments")                                             |
| [mainTenantSubdomainForSingleDomainMultitenancy](#maintenantsubdomainforsingledomainmultitenancy) | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-maintenantsubdomainforsingledomainmultitenancy.md "https://onlineberatung/consultingtype#/properties/mainTenantSubdomainForSingleDomainMultitenancy") |
| [useOverviewPage](#useoverviewpage)                                                               | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-useoverviewpage.md "https://onlineberatung/consultingtype#/properties/useOverviewPage")                                                               |
| [calcomUrl](#calcomurl)                                                                           | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-calcomurl.md "https://onlineberatung/consultingtype#/properties/calcomUrl")                                                                           |
| [budibaseAuthClientId](#budibaseauthclientid)                                                     | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-budibaseauthclientid.md "https://onlineberatung/consultingtype#/properties/budibaseAuthClientId")                                                     |
| [budibaseUrl](#budibaseurl)                                                                       | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-budibaseurl.md "https://onlineberatung/consultingtype#/properties/budibaseUrl")                                                                       |
| [calendarAppUrl](#calendarappurl)                                                                 | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-calendarappurl.md "https://onlineberatung/consultingtype#/properties/calendarAppUrl")                                                                 |
| [legalContentChangesBySingleTenantAdminsAllowed](#legalcontentchangesbysingletenantadminsallowed) | `object`      | Optional | cannot be null | [Application settings](application-settings-properties-legalcontentchangesbysingletenantadminsallowed.md "https://onlineberatung/consultingtype#/properties/legalContentChangesBySingleTenantAdminsAllowed") |
| [required](#required)                                                                             | Not specified | Optional | cannot be null | [Application settings](application-settings-properties-required.md "https://onlineberatung/consultingtype#/properties/required")                                                                             |

## multitenancyWithSingleDomainEnabled



`multitenancyWithSingleDomainEnabled`

*   is required

*   Type: `object` ([Details](application-settings-properties-multitenancywithsingledomainenabled.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-multitenancywithsingledomainenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyWithSingleDomainEnabled")

### multitenancyWithSingleDomainEnabled Type

`object` ([Details](application-settings-properties-multitenancywithsingledomainenabled.md))

## multitenancyEnabled



`multitenancyEnabled`

*   is required

*   Type: `object` ([Details](application-settings-properties-multitenancyenabled.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-multitenancyenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyEnabled")

### multitenancyEnabled Type

`object` ([Details](application-settings-properties-multitenancyenabled.md))

## useTenantService



`useTenantService`

*   is optional

*   Type: `object` ([Details](application-settings-properties-usetenantservice.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-usetenantservice.md "https://onlineberatung/consultingtype#/properties/useTenantService")

### useTenantService Type

`object` ([Details](application-settings-properties-usetenantservice.md))

## enableWalkthrough



`enableWalkthrough`

*   is optional

*   Type: `object` ([Details](application-settings-properties-enablewalkthrough.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-enablewalkthrough.md "https://onlineberatung/consultingtype#/properties/enableWalkthrough")

### enableWalkthrough Type

`object` ([Details](application-settings-properties-enablewalkthrough.md))

## disableVideoAppointments



`disableVideoAppointments`

*   is optional

*   Type: `object` ([Details](application-settings-properties-disablevideoappointments.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-disablevideoappointments.md "https://onlineberatung/consultingtype#/properties/disableVideoAppointments")

### disableVideoAppointments Type

`object` ([Details](application-settings-properties-disablevideoappointments.md))

## mainTenantSubdomainForSingleDomainMultitenancy



`mainTenantSubdomainForSingleDomainMultitenancy`

*   is optional

*   Type: `object` ([Details](application-settings-properties-maintenantsubdomainforsingledomainmultitenancy.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-maintenantsubdomainforsingledomainmultitenancy.md "https://onlineberatung/consultingtype#/properties/mainTenantSubdomainForSingleDomainMultitenancy")

### mainTenantSubdomainForSingleDomainMultitenancy Type

`object` ([Details](application-settings-properties-maintenantsubdomainforsingledomainmultitenancy.md))

## useOverviewPage



`useOverviewPage`

*   is optional

*   Type: `object` ([Details](application-settings-properties-useoverviewpage.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-useoverviewpage.md "https://onlineberatung/consultingtype#/properties/useOverviewPage")

### useOverviewPage Type

`object` ([Details](application-settings-properties-useoverviewpage.md))

## calcomUrl



`calcomUrl`

*   is optional

*   Type: `object` ([Details](application-settings-properties-calcomurl.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-calcomurl.md "https://onlineberatung/consultingtype#/properties/calcomUrl")

### calcomUrl Type

`object` ([Details](application-settings-properties-calcomurl.md))

## budibaseAuthClientId



`budibaseAuthClientId`

*   is optional

*   Type: `object` ([Details](application-settings-properties-budibaseauthclientid.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-budibaseauthclientid.md "https://onlineberatung/consultingtype#/properties/budibaseAuthClientId")

### budibaseAuthClientId Type

`object` ([Details](application-settings-properties-budibaseauthclientid.md))

## budibaseUrl



`budibaseUrl`

*   is optional

*   Type: `object` ([Details](application-settings-properties-budibaseurl.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-budibaseurl.md "https://onlineberatung/consultingtype#/properties/budibaseUrl")

### budibaseUrl Type

`object` ([Details](application-settings-properties-budibaseurl.md))

## calendarAppUrl



`calendarAppUrl`

*   is optional

*   Type: `object` ([Details](application-settings-properties-calendarappurl.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-calendarappurl.md "https://onlineberatung/consultingtype#/properties/calendarAppUrl")

### calendarAppUrl Type

`object` ([Details](application-settings-properties-calendarappurl.md))

## legalContentChangesBySingleTenantAdminsAllowed



`legalContentChangesBySingleTenantAdminsAllowed`

*   is optional

*   Type: `object` ([Details](application-settings-properties-legalcontentchangesbysingletenantadminsallowed.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-legalcontentchangesbysingletenantadminsallowed.md "https://onlineberatung/consultingtype#/properties/legalContentChangesBySingleTenantAdminsAllowed")

### legalContentChangesBySingleTenantAdminsAllowed Type

`object` ([Details](application-settings-properties-legalcontentchangesbysingletenantadminsallowed.md))

## required



`required`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Application settings](application-settings-properties-required.md "https://onlineberatung/consultingtype#/properties/required")

### required Type

unknown

# Application settings Definitions

## Definitions group Setting

Reference this group by using

```json
{"$ref":"https://onlineberatung/consultingtype#/definitions/Setting"}
```

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                               |
| :-------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)       | `boolean` | Optional | cannot be null | [Application settings](application-settings-definitions-setting-properties-value.md "https://onlineberatung/consultingtype#/definitions/Setting/properties/value")       |
| [readOnly](#readonly) | `boolean` | Optional | cannot be null | [Application settings](application-settings-definitions-setting-properties-readonly.md "https://onlineberatung/consultingtype#/definitions/Setting/properties/readOnly") |

### value

Value of the setting.

`value`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Application settings](application-settings-definitions-setting-properties-value.md "https://onlineberatung/consultingtype#/definitions/Setting/properties/value")

#### value Type

`boolean`

### readOnly

Information if setting is read only.

`readOnly`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Application settings](application-settings-definitions-setting-properties-readonly.md "https://onlineberatung/consultingtype#/definitions/Setting/properties/readOnly")

#### readOnly Type

`boolean`
