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

| Property                                                                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [multitenancyWithSingleDomainEnabled](#multitenancywithsingledomainenabled)                       | `object` | Required | cannot be null | [Application settings](application-settings-properties-multitenancywithsingledomainenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyWithSingleDomainEnabled")                       |
| [multitenancyEnabled](#multitenancyenabled)                                                       | `object` | Required | cannot be null | [Application settings](application-settings-properties-multitenancyenabled.md "https://onlineberatung/consultingtype#/properties/multitenancyEnabled")                                                       |
| [useTenantService](#usetenantservice)                                                             | `object` | Optional | cannot be null | [Application settings](application-settings-properties-usetenantservice.md "https://onlineberatung/consultingtype#/properties/useTenantService")                                                             |
| [enableTenantTheming](#enabletenanttheming)                                                       | `object` | Optional | cannot be null | [Application settings](application-settings-properties-enabletenanttheming.md "https://onlineberatung/consultingtype#/properties/enableTenantTheming")                                                       |
| [enableWalkthrough](#enablewalkthrough)                                                           | `object` | Optional | cannot be null | [Application settings](application-settings-properties-enablewalkthrough.md "https://onlineberatung/consultingtype#/properties/enableWalkthrough")                                                           |
| [disableVideoAppointments](#disablevideoappointments)                                             | `object` | Optional | cannot be null | [Application settings](application-settings-properties-disablevideoappointments.md "https://onlineberatung/consultingtype#/properties/disableVideoAppointments")                                             |
| [mainTenantSubdomainForSingleDomainMultitenancy](#maintenantsubdomainforsingledomainmultitenancy) | `object` | Optional | cannot be null | [Application settings](application-settings-properties-maintenantsubdomainforsingledomainmultitenancy.md "https://onlineberatung/consultingtype#/properties/mainTenantSubdomainForSingleDomainMultitenancy") |

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

## enableTenantTheming



`enableTenantTheming`

*   is optional

*   Type: `object` ([Details](application-settings-properties-enabletenanttheming.md))

*   cannot be null

*   defined in: [Application settings](application-settings-properties-enabletenanttheming.md "https://onlineberatung/consultingtype#/properties/enableTenantTheming")

### enableTenantTheming Type

`object` ([Details](application-settings-properties-enabletenanttheming.md))

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
