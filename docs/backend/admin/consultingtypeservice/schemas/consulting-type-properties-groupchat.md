# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/groupChat
```

Group chat settings

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## groupChat Type

`object` ([Details](consulting-type-properties-groupchat.md))

# groupChat Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                   |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isGroupChat](#isgroupchat)       | `boolean` | Required | cannot be null | [Consulting type](consulting-type-properties-groupchat-properties-isgroupchat.md "https://onlineberatung/consultingtype#/properties/groupChat/properties/isGroupChat")       |
| [groupChatRules](#groupchatrules) | `array`   | Optional | can be null    | [Consulting type](consulting-type-properties-groupchat-properties-groupchatrules.md "https://onlineberatung/consultingtype#/properties/groupChat/properties/groupChatRules") |

## isGroupChat

True, if group chats are provided for this consulting type

`isGroupChat`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-groupchat-properties-isgroupchat.md "https://onlineberatung/consultingtype#/properties/groupChat/properties/isGroupChat")

### isGroupChat Type

`boolean`

## groupChatRules

Rules for the group chat which are displayed to the user

`groupChatRules`

*   is optional

*   Type: `string[]`

*   can be null

*   defined in: [Consulting type](consulting-type-properties-groupchat-properties-groupchatrules.md "https://onlineberatung/consultingtype#/properties/groupChat/properties/groupChatRules")

### groupChatRules Type

`string[]`
