# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/definitions/RadioButton
```

A group of values where only one can be selected.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## RadioButton Type

`object` ([Details](consulting-type-definitions-radiobutton.md))

# RadioButton Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-radiobutton-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/componentType") |
| [radioButtons](#radiobuttons)   | `array`  | Required | cannot be null | [Consulting type](consulting-type-definitions-radiobutton-properties-radiobuttons.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/radioButtons")   |

## componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-radiobutton-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/componentType")

### componentType Type

`string`

### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"RadioButton"
```

## radioButtons

Individual values that can be selected.

`radioButtons`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-radiobutton-properties-radiobuttons.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/radioButtons")

### radioButtons Type

unknown\[]
