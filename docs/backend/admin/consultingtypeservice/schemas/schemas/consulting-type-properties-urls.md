# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/urls
```

Forwarding urls

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## urls Type

`object` ([Details](consulting-type-properties-urls.md))

# urls Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [requiredAidMissingRedirectUrl](#requiredaidmissingredirecturl)     | `string` | Optional | cannot be null | [Consulting type](consulting-type-properties-urls-properties-requiredaidmissingredirecturl.md "https://onlineberatung/consultingtype#/properties/urls/properties/requiredAidMissingRedirectUrl")     |
| [registrationPostcodeFallbackUrl](#registrationpostcodefallbackurl) | `string` | Optional | cannot be null | [Consulting type](consulting-type-properties-urls-properties-registrationpostcodefallbackurl.md "https://onlineberatung/consultingtype#/properties/urls/properties/registrationPostcodeFallbackUrl") |

## requiredAidMissingRedirectUrl

If no `aid` query parameter (agency ID) is passed to the respective registration page as get parameter, the UI will redirect to this URL.

`requiredAidMissingRedirectUrl`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-urls-properties-requiredaidmissingredirecturl.md "https://onlineberatung/consultingtype#/properties/urls/properties/requiredAidMissingRedirectUrl")

### requiredAidMissingRedirectUrl Type

`string`

## registrationPostcodeFallbackUrl

If no white spot agency provided for this consulting type a note is display with a link to this url, in case no matching agency for the given postcode was found

`registrationPostcodeFallbackUrl`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-urls-properties-registrationpostcodefallbackurl.md "https://onlineberatung/consultingtype#/properties/urls/properties/registrationPostcodeFallbackUrl")

### registrationPostcodeFallbackUrl Type

`string`
