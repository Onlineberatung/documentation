# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/welcomeMessage
```

Settings for the welcome message

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## welcomeMessage Type

`object` ([Details](consulting-type-properties-welcomemessage.md))

# welcomeMessage Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :---------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sendWelcomeMessage](#sendwelcomemessage) | `boolean` | Required | cannot be null | [Consulting type](consulting-type-properties-welcomemessage-properties-sendwelcomemessage.md "https://onlineberatung/consultingtype#/properties/welcomeMessage/properties/sendWelcomeMessage") |
| [welcomeMessageText](#welcomemessagetext) | `string`  | Required | can be null    | [Consulting type](consulting-type-properties-welcomemessage-properties-welcomemessagetext.md "https://onlineberatung/consultingtype#/properties/welcomeMessage/properties/welcomeMessageText") |

## sendWelcomeMessage

Indicates whether if the system should send an automatic reply message to all enquiries for this consulting type or not

`sendWelcomeMessage`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-welcomemessage-properties-sendwelcomemessage.md "https://onlineberatung/consultingtype#/properties/welcomeMessage/properties/sendWelcomeMessage")

### sendWelcomeMessage Type

`boolean`

## welcomeMessageText

The welcome message text for this consulting type -> null, if sendWelcomeMessage is false

`welcomeMessageText`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Consulting type](consulting-type-properties-welcomemessage-properties-welcomemessagetext.md "https://onlineberatung/consultingtype#/properties/welcomeMessage/properties/welcomeMessageText")

### welcomeMessageText Type

`string`
