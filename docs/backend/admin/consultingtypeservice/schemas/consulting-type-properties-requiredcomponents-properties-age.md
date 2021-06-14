# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/requiredComponents/properties/age
```

Age of the asker.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## age Type

`object` ([Details](consulting-type-properties-requiredcomponents-properties-age.md))

# age Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isEnabled](#isenabled) | `boolean` | Required | cannot be null | [Consulting type](consulting-type-properties-requiredcomponents-properties-age-properties-isenabled.md "https://onlineberatung/consultingtype#/properties/requiredComponents/properties/age/properties/isEnabled") |
| [options](#options)     | `array`   | Required | cannot be null | [Consulting type](consulting-type-properties-requiredcomponents-properties-age-properties-options.md "https://onlineberatung/consultingtype#/properties/requiredComponents/properties/age/properties/options")     |

## isEnabled

If this is true, the age selection will be displayed.

`isEnabled`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-requiredcomponents-properties-age-properties-isenabled.md "https://onlineberatung/consultingtype#/properties/requiredComponents/properties/age/properties/isEnabled")

### isEnabled Type

`boolean`

### isEnabled Default Value

The default value is:

```json
true
```

## options

Individual values that can be selected.

`options`

*   is required

*   Type: `object[]` ([Details](consulting-type-properties-requiredcomponents-properties-age-properties-options-items.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-requiredcomponents-properties-age-properties-options.md "https://onlineberatung/consultingtype#/properties/requiredComponents/properties/age/properties/options")

### options Type

`object[]` ([Details](consulting-type-properties-requiredcomponents-properties-age-properties-options-items.md))
