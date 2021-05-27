# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item
```

An individual item that can be selected.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## item Type

`object` ([Details](consulting-type-definitions-selectdropdown-properties-item.md))

# item Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                             | `string`  | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-id.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/id")                             |
| [selectedOptions](#selectedoptions)   | `array`   | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-selectedoptions.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/selectedOptions")   |
| [selectInputLabel](#selectinputlabel) | `string`  | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-selectinputlabel.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/selectInputLabel") |
| [useIconOption](#useiconoption)       | `boolean` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-useiconoption.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/useIconOption")       |
| [isSearchable](#issearchable)         | `boolean` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-issearchable.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/isSearchable")         |
| [menuPlacement](#menuplacement)       | `string`  | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-menuplacement.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/menuPlacement")       |

## id

Identifier of the component.

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-id.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/id")

### id Type

`string`

## selectedOptions

Individual values that can be selected.

`selectedOptions`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-selectedoptions.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/selectedOptions")

### selectedOptions Type

unknown\[]

## selectInputLabel

Human readable label for the component.

`selectInputLabel`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-selectinputlabel.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/selectInputLabel")

### selectInputLabel Type

`string`

## useIconOption

Can be enabled to show an icon beside individual options.

`useIconOption`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-useiconoption.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/useIconOption")

### useIconOption Type

`boolean`

## isSearchable

Allow the user to search for options by their label.

`isSearchable`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-issearchable.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/isSearchable")

### isSearchable Type

`boolean`

## menuPlacement

Eiter 'top' or 'bottom' (default: 'bottom').

`menuPlacement`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item-properties-menuplacement.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item/properties/menuPlacement")

### menuPlacement Type

`string`
