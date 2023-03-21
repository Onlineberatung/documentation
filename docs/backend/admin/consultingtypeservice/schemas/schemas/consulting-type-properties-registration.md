# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/registration
```

Settings for the registration process

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## registration Type

`object` ([Details](consulting-type-properties-registration.md))

# registration Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :---------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [minPostcodeSize](#minpostcodesize)       | `integer` | Optional | cannot be null | [Consulting type](consulting-type-properties-registration-properties-minpostcodesize.md "https://onlineberatung/consultingtype#/properties/registration/properties/minPostcodeSize")       |
| [autoSelectAgency](#autoselectagency)     | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-registration-properties-autoselectagency.md "https://onlineberatung/consultingtype#/properties/registration/properties/autoSelectAgency")     |
| [autoSelectPostcode](#autoselectpostcode) | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-registration-properties-autoselectpostcode.md "https://onlineberatung/consultingtype#/properties/registration/properties/autoSelectPostcode") |
| [notes](#notes)                           | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-registration-properties-notes.md "https://onlineberatung/consultingtype#/properties/registration/properties/notes")                           |
| [mandatoryFields](#mandatoryfields)       | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-registration-properties-mandatoryfields.md "https://onlineberatung/consultingtype#/properties/registration/properties/mandatoryFields")       |

## minPostcodeSize

The minimum number of digits for the postal code that must be entered during registration.

`minPostcodeSize`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration-properties-minpostcodesize.md "https://onlineberatung/consultingtype#/properties/registration/properties/minPostcodeSize")

### minPostcodeSize Type

`integer`

### minPostcodeSize Default Value

The default value is:

```json
5
```

## autoSelectAgency

For consulting types to which only one agency is assigned: if true the assigned agency is automatically selected

`autoSelectAgency`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration-properties-autoselectagency.md "https://onlineberatung/consultingtype#/properties/registration/properties/autoSelectAgency")

### autoSelectAgency Type

`boolean`

## autoSelectPostcode

If true postcode is automatically taken over from agency in the registration form

`autoSelectPostcode`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration-properties-autoselectpostcode.md "https://onlineberatung/consultingtype#/properties/registration/properties/autoSelectPostcode")

### autoSelectPostcode Type

`boolean`

## notes

Additional info to display in agency selection and password accordion (optional)

`notes`

*   is required

*   Type: `object` ([Details](consulting-type-properties-registration-properties-notes.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration-properties-notes.md "https://onlineberatung/consultingtype#/properties/registration/properties/notes")

### notes Type

`object` ([Details](consulting-type-properties-registration-properties-notes.md))

## mandatoryFields

Control of mandatory fields for registration

`mandatoryFields`

*   is required

*   Type: `object` ([Details](consulting-type-properties-registration-properties-mandatoryfields.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration-properties-mandatoryfields.md "https://onlineberatung/consultingtype#/properties/registration/properties/mandatoryFields")

### mandatoryFields Type

`object` ([Details](consulting-type-properties-registration-properties-mandatoryfields.md))
