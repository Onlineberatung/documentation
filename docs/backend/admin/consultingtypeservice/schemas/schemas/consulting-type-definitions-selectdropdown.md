# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/definitions/SelectDropdown
```

A group of values where only one can be selected and is rendered at a time.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## SelectDropdown Type

`object` ([Details](consulting-type-definitions-selectdropdown.md))

# SelectDropdown Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/componentType") |
| [item](#item)                   | `object` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item")                   |

## componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/componentType")

### componentType Type

`string`

### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"SelectDropdown"
```

## item

An individual item that can be selected.

`item`

*   is required

*   Type: `object` ([Details](consulting-type-definitions-selectdropdown-properties-item.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item")

### item Type

`object` ([Details](consulting-type-definitions-selectdropdown-properties-item.md))
