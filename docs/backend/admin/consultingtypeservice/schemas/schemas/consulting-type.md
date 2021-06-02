# Consulting type Schema

```txt
https://onlineberatung/consultingtype
```

Settings for a consulting type

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json](consulting-type.json "open original schema") |

## Consulting type Type

`object` ([Consulting type](consulting-type.md))

# Consulting type Properties

| Property                                                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                               |
| :-------------------------------------------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                                               | `integer` | Required | cannot be null | [Consulting type](consulting-type-properties-id.md "https://onlineberatung/consultingtype#/properties/id")                                                                               |
| [slug](#slug)                                                                           | `string`  | Required | cannot be null | [Consulting type](consulting-type-properties-slug.md "https://onlineberatung/consultingtype#/properties/slug")                                                                           |
| [excludeNonMainConsultantsFromTeamSessions](#excludenonmainconsultantsfromteamsessions) | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-excludenonmainconsultantsfromteamsessions.md "https://onlineberatung/consultingtype#/properties/excludeNonMainConsultantsFromTeamSessions") |
| [lockedAgencies](#lockedagencies)                                                       | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-lockedagencies.md "https://onlineberatung/consultingtype#/properties/lockedAgencies")                                                       |
| [whiteSpot](#whitespot)                                                                 | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-whitespot.md "https://onlineberatung/consultingtype#/properties/whiteSpot")                                                                 |
| [groupChat](#groupchat)                                                                 | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-groupchat.md "https://onlineberatung/consultingtype#/properties/groupChat")                                                                 |
| [consultantBoundedToConsultingType](#consultantboundedtoconsultingtype)                 | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-consultantboundedtoconsultingtype.md "https://onlineberatung/consultingtype#/properties/consultantBoundedToConsultingType")                 |
| [welcomeMessage](#welcomemessage)                                                       | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-welcomemessage.md "https://onlineberatung/consultingtype#/properties/welcomeMessage")                                                       |
| [sendFurtherStepsMessage](#sendfurtherstepsmessage)                                     | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-sendfurtherstepsmessage.md "https://onlineberatung/consultingtype#/properties/sendFurtherStepsMessage")                                     |
| [sendSaveSessionDataMessage](#sendsavesessiondatamessage)                               | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-sendsavesessiondatamessage.md "https://onlineberatung/consultingtype#/properties/sendSaveSessionDataMessage")                               |
| [isSetEmailAllowed](#issetemailallowed)                                                 | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-issetemailallowed.md "https://onlineberatung/consultingtype#/properties/isSetEmailAllowed")                                                 |
| [sessionDataInitializing](#sessiondatainitializing)                                     | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-sessiondatainitializing.md "https://onlineberatung/consultingtype#/properties/sessionDataInitializing")                                     |
| [monitoring](#monitoring)                                                               | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-monitoring.md "https://onlineberatung/consultingtype#/properties/monitoring")                                                               |
| [initializeFeedbackChat](#initializefeedbackchat)                                       | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-initializefeedbackchat.md "https://onlineberatung/consultingtype#/properties/initializeFeedbackChat")                                       |
| [languageFormal](#languageformal)                                                       | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-languageformal.md "https://onlineberatung/consultingtype#/properties/languageFormal")                                                       |
| [roles](#roles)                                                                         | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-roles.md "https://onlineberatung/consultingtype#/properties/roles")                                                                         |
| [notifications](#notifications)                                                         | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-notifications.md "https://onlineberatung/consultingtype#/properties/notifications")                                                         |
| [registration](#registration)                                                           | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-registration.md "https://onlineberatung/consultingtype#/properties/registration")                                                           |
| [titles](#titles)                                                                       | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-titles.md "https://onlineberatung/consultingtype#/properties/titles")                                                                       |
| [urls](#urls)                                                                           | `object`  | Required | cannot be null | [Consulting type](consulting-type-properties-urls.md "https://onlineberatung/consultingtype#/properties/urls")                                                                           |
| [showAskerProfile](#showaskerprofile)                                                   | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-showaskerprofile.md "https://onlineberatung/consultingtype#/properties/showAskerProfile")                                                   |
| [isSubsequentRegistrationAllowed](#issubsequentregistrationallowed)                     | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-issubsequentregistrationallowed.md "https://onlineberatung/consultingtype#/properties/isSubsequentRegistrationAllowed")                     |
| [isAnonymousConversationAllowed](#isanonymousconversationallowed)                       | `boolean` | Optional | cannot be null | [Consulting type](consulting-type-properties-isanonymousconversationallowed.md "https://onlineberatung/consultingtype#/properties/isAnonymousConversationAllowed")                       |
| [voluntaryComponents](#voluntarycomponents)                                             | `array`   | Optional | cannot be null | [Consulting type](consulting-type-properties-voluntarycomponents.md "https://onlineberatung/consultingtype#/properties/voluntaryComponents")                                             |
| [requiredComponents](#requiredcomponents)                                               | `object`  | Optional | cannot be null | [Consulting type](consulting-type-properties-requiredcomponents.md "https://onlineberatung/consultingtype#/properties/requiredComponents")                                               |

## id

The unique identifier for the consulting type

`id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-id.md "https://onlineberatung/consultingtype#/properties/id")

### id Type

`integer`

### id Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## slug

The unique slug for the consulting type

`slug`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-slug.md "https://onlineberatung/consultingtype#/properties/slug")

### slug Type

`string`

## excludeNonMainConsultantsFromTeamSessions

True, if only consultants with role main-consultant should be added to all team sessions

`excludeNonMainConsultantsFromTeamSessions`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-excludenonmainconsultantsfromteamsessions.md "https://onlineberatung/consultingtype#/properties/excludeNonMainConsultantsFromTeamSessions")

### excludeNonMainConsultantsFromTeamSessions Type

`boolean`

## lockedAgencies

If true, no agency with this consulting type can be deleted or set offline via the admin api

`lockedAgencies`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-lockedagencies.md "https://onlineberatung/consultingtype#/properties/lockedAgencies")

### lockedAgencies Type

`boolean`

## whiteSpot

Behavior regarding the white spots agencies

`whiteSpot`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-whitespot.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-whitespot.md "https://onlineberatung/consultingtype#/properties/whiteSpot")

### whiteSpot Type

`object` ([Details](consulting-type-properties-whitespot.md))

## groupChat

Group chat settings

`groupChat`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-groupchat.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-groupchat.md "https://onlineberatung/consultingtype#/properties/groupChat")

### groupChat Type

`object` ([Details](consulting-type-properties-groupchat.md))

## consultantBoundedToConsultingType

True, if a consultant may only be assigned to agencies with this consulting type

`consultantBoundedToConsultingType`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-consultantboundedtoconsultingtype.md "https://onlineberatung/consultingtype#/properties/consultantBoundedToConsultingType")

### consultantBoundedToConsultingType Type

`boolean`

## welcomeMessage

Settings for the welcome message

`welcomeMessage`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-welcomemessage.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-welcomemessage.md "https://onlineberatung/consultingtype#/properties/welcomeMessage")

### welcomeMessage Type

`object` ([Details](consulting-type-properties-welcomemessage.md))

## sendFurtherStepsMessage

Indicates whether if the system should send an automatic further steps message to all enquiries for this consulting type or not

`sendFurtherStepsMessage`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-sendfurtherstepsmessage.md "https://onlineberatung/consultingtype#/properties/sendFurtherStepsMessage")

### sendFurtherStepsMessage Type

`boolean`

### sendFurtherStepsMessage Default Value

The default value is:

```json
true
```

## sendSaveSessionDataMessage

Indicates whether if the system should send an automatic message with a prompt for the user to enter optional information to the session

`sendSaveSessionDataMessage`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-sendsavesessiondatamessage.md "https://onlineberatung/consultingtype#/properties/sendSaveSessionDataMessage")

### sendSaveSessionDataMessage Type

`boolean`

### sendSaveSessionDataMessage Default Value

The default value is:

```json
true
```

## isSetEmailAllowed

Asker is allowed to set his email when he is registered for at least one consultingType with this setting 'true'

`isSetEmailAllowed`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-issetemailallowed.md "https://onlineberatung/consultingtype#/properties/isSetEmailAllowed")

### isSetEmailAllowed Type

`boolean`

### isSetEmailAllowed Default Value

The default value is:

```json
true
```

## sessionDataInitializing

Settings to control which optional fields for consultation should be initialized for this consultation type.

`sessionDataInitializing`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-sessiondatainitializing.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-sessiondatainitializing.md "https://onlineberatung/consultingtype#/properties/sessionDataInitializing")

### sessionDataInitializing Type

`object` ([Details](consulting-type-properties-sessiondatainitializing.md))

## monitoring

Settings for the initializing of the monitoring

`monitoring`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-monitoring.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-monitoring.md "https://onlineberatung/consultingtype#/properties/monitoring")

### monitoring Type

`object` ([Details](consulting-type-properties-monitoring.md))

## initializeFeedbackChat

Indicates whether the feedback chat should be initialized for every session of this consulting type

`initializeFeedbackChat`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-initializefeedbackchat.md "https://onlineberatung/consultingtype#/properties/initializeFeedbackChat")

### initializeFeedbackChat Type

`boolean`

## languageFormal

Indicates whether the feedback chat should be initialized for every session of this consulting type

`languageFormal`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-languageformal.md "https://onlineberatung/consultingtype#/properties/languageFormal")

### languageFormal Type

`boolean`

### languageFormal Default Value

The default value is:

```json
true
```

## roles

Role definitions

`roles`

*   is required

*   Type: `object` ([Details](consulting-type-properties-roles.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-roles.md "https://onlineberatung/consultingtype#/properties/roles")

### roles Type

`object` ([Details](consulting-type-properties-roles.md))

## notifications

Settings for the mail notifications

`notifications`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-notifications.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-notifications.md "https://onlineberatung/consultingtype#/properties/notifications")

### notifications Type

`object` ([Details](consulting-type-properties-notifications.md))

## registration

Settings for the registration process

`registration`

*   is required

*   Type: `object` ([Details](consulting-type-properties-registration.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-registration.md "https://onlineberatung/consultingtype#/properties/registration")

### registration Type

`object` ([Details](consulting-type-properties-registration.md))

## titles

Titles for this consulting type, which are displayed to the user

`titles`

*   is required

*   Type: `object` ([Details](consulting-type-properties-titles.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-titles.md "https://onlineberatung/consultingtype#/properties/titles")

### titles Type

`object` ([Details](consulting-type-properties-titles.md))

## urls

Forwarding urls

`urls`

*   is required

*   Type: `object` ([Details](consulting-type-properties-urls.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-urls.md "https://onlineberatung/consultingtype#/properties/urls")

### urls Type

`object` ([Details](consulting-type-properties-urls.md))

## showAskerProfile

True to show asker profile including monitoring for consultants. False, when asker profile and monitoring should not be viewable.

`showAskerProfile`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-showaskerprofile.md "https://onlineberatung/consultingtype#/properties/showAskerProfile")

### showAskerProfile Type

`boolean`

### showAskerProfile Default Value

The default value is:

```json
true
```

## isSubsequentRegistrationAllowed

If true, askers additionally can register for this consulting type on their profile page at a later date.

`isSubsequentRegistrationAllowed`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-issubsequentregistrationallowed.md "https://onlineberatung/consultingtype#/properties/isSubsequentRegistrationAllowed")

### isSubsequentRegistrationAllowed Type

`boolean`

### isSubsequentRegistrationAllowed Default Value

The default value is:

```json
true
```

## isAnonymousConversationAllowed

Indicates whether anonymous 1:1 chats can be performed.

`isAnonymousConversationAllowed`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-isanonymousconversationallowed.md "https://onlineberatung/consultingtype#/properties/isAnonymousConversationAllowed")

### isAnonymousConversationAllowed Type

`boolean`

## voluntaryComponents

Can be provided to display additional fields in the asker profile.

`voluntaryComponents`

*   is optional

*   Type: an array of merged types ([Details](consulting-type-properties-voluntarycomponents-items.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-voluntarycomponents.md "https://onlineberatung/consultingtype#/properties/voluntaryComponents")

### voluntaryComponents Type

an array of merged types ([Details](consulting-type-properties-voluntarycomponents-items.md))

## requiredComponents



`requiredComponents`

*   is optional

*   Type: `object` ([Details](consulting-type-properties-requiredcomponents.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-requiredcomponents.md "https://onlineberatung/consultingtype#/properties/requiredComponents")

### requiredComponents Type

`object` ([Details](consulting-type-properties-requiredcomponents.md))

# Consulting type Definitions

## Definitions group Component

Reference this group by using

```json
{"$ref":"https://onlineberatung/consultingtype#/definitions/Component"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [headline](#headline) | `string` | Optional | cannot be null | [Consulting type](consulting-type-definitions-component-properties-headline.md "https://onlineberatung/consultingtype#/definitions/Component/properties/headline") |
| [name](#name)         | `string` | Optional | cannot be null | [Consulting type](consulting-type-definitions-component-properties-name.md "https://onlineberatung/consultingtype#/definitions/Component/properties/name")         |

### headline

Human readable label that will be printed along the component.

`headline`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-component-properties-headline.md "https://onlineberatung/consultingtype#/definitions/Component/properties/headline")

#### headline Type

`string`

### name

Identifier for the component.

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-component-properties-name.md "https://onlineberatung/consultingtype#/definitions/Component/properties/name")

#### name Type

`string`

## Definitions group RadioButton

Reference this group by using

```json
{"$ref":"https://onlineberatung/consultingtype#/definitions/RadioButton"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-radiobutton-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/componentType") |
| [radioButtons](#radiobuttons)   | `array`  | Required | cannot be null | [Consulting type](consulting-type-definitions-radiobutton-properties-radiobuttons.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/radioButtons")   |

### componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-radiobutton-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/componentType")

#### componentType Type

`string`

#### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"RadioButton"
```

### radioButtons

Individual values that can be selected.

`radioButtons`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-radiobutton-properties-radiobuttons.md "https://onlineberatung/consultingtype#/definitions/RadioButton/properties/radioButtons")

#### radioButtons Type

unknown\[]

## Definitions group TagSelect

Reference this group by using

```json
{"$ref":"https://onlineberatung/consultingtype#/definitions/TagSelect"}
```

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :-------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype-1) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-tagselect-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/componentType") |
| [tagSelects](#tagselects)         | `array`  | Required | cannot be null | [Consulting type](consulting-type-definitions-tagselect-properties-tagselects.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/tagSelects")       |

### componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-tagselect-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/componentType")

#### componentType Type

`string`

#### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"TagSelect"
```

### tagSelects

Individual values that can be selected.

`tagSelects`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-tagselect-properties-tagselects.md "https://onlineberatung/consultingtype#/definitions/TagSelect/properties/tagSelects")

#### tagSelects Type

unknown\[]

## Definitions group SelectDropdown

Reference this group by using

```json
{"$ref":"https://onlineberatung/consultingtype#/definitions/SelectDropdown"}
```

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [componentType](#componenttype-2) | `string` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/componentType") |
| [item](#item)                     | `object` | Required | cannot be null | [Consulting type](consulting-type-definitions-selectdropdown-properties-item.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item")                   |

### componentType

Identifier for the component.

`componentType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-componenttype.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/componentType")

#### componentType Type

`string`

#### componentType Constraints

**constant**: the value of this property must be equal to:

```json
"SelectDropdown"
```

### item

An individual item that can be selected.

`item`

*   is required

*   Type: `object` ([Details](consulting-type-definitions-selectdropdown-properties-item.md))

*   cannot be null

*   defined in: [Consulting type](consulting-type-definitions-selectdropdown-properties-item.md "https://onlineberatung/consultingtype#/definitions/SelectDropdown/properties/item")

#### item Type

`object` ([Details](consulting-type-definitions-selectdropdown-properties-item.md))
