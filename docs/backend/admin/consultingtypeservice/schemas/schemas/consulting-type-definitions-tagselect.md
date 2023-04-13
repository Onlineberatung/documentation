# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/definitions/TagSelect
```

A group of values where multiple can be selected.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## TagSelect Type

`object` ([Details](consulting-type-definitions-tagselect.md))

# TagSelect Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-tagselect-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/componentType") |
| [tagSelects](#tagselects)       | `array`  | Required | cannot be null | [Consulting type](consulting-type-definitions-tagselect-properties-tagselects.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/tagSelects")       |

## componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-tagselect-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/componentType")

### componentType Type

`string`

### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"TagSelect"
```

## tagSelects

Individual values that can be selected.

`tagSelects`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-tagselect-properties-tagselects.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/tagSelects")

### tagSelects Type

unknown\[]
