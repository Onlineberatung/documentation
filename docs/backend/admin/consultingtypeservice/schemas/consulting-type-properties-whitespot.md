# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/whiteSpot
```

Behavior regarding the white spots agencies

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## whiteSpot Type

`object` ([Details](consulting-type-properties-whitespot.md))

# whiteSpot Properties

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [whiteSpotAgencyAssigned](#whitespotagencyassigned) | `boolean` | Required | cannot be null | [Consulting type](consulting-type-properties-whitespot-properties-whitespotagencyassigned.md "https://onlineberatung/consultingtype#/properties/whiteSpot/properties/whiteSpotAgencyAssigned") |
| [whiteSpotAgencyId](#whitespotagencyid)             | `integer` | Optional | cannot be null | [Consulting type](consulting-type-properties-whitespot-properties-whitespotagencyid.md "https://onlineberatung/consultingtype#/properties/whiteSpot/properties/whiteSpotAgencyId")             |

## whiteSpotAgencyAssigned

If true, agency with id in property 'whiteSpotAgencyId' will be proposed if no agency was found via given postcode in registration form

`whiteSpotAgencyAssigned`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-whitespot-properties-whitespotagencyassigned.md "https://onlineberatung/consultingtype#/properties/whiteSpot/properties/whiteSpotAgencyAssigned")

### whiteSpotAgencyAssigned Type

`boolean`

## whiteSpotAgencyId

The id the of the white spot agency

`whiteSpotAgencyId`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-whitespot-properties-whitespotagencyid.md "https://onlineberatung/consultingtype#/properties/whiteSpot/properties/whiteSpotAgencyId")

### whiteSpotAgencyId Type

`integer`
