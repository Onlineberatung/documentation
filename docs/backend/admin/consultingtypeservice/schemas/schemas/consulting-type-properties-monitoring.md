# Untitled object in Consulting type Schema

```txt
https://onlineberatung/consultingtype#/properties/monitoring
```

Settings for the initializing of the monitoring

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [consulting-type.json*](consulting-type.json "open original schema") |

## monitoring Type

`object` ([Details](consulting-type-properties-monitoring.md))

# monitoring Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [initializeMonitoring](#initializemonitoring)     | `boolean` | Required | cannot be null | [Consulting type](consulting-type-properties-monitoring-properties-initializemonitoring.md "https://onlineberatung/consultingtype#/properties/monitoring/properties/initializeMonitoring")     |
| [monitoringTemplateFile](#monitoringtemplatefile) | `string`  | Optional | can be null    | [Consulting type](consulting-type-properties-monitoring-properties-monitoringtemplatefile.md "https://onlineberatung/consultingtype#/properties/monitoring/properties/monitoringTemplateFile") |

## initializeMonitoring

Indicates whether the monitoring should be initialized for this consulting type

`initializeMonitoring`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Consulting type](consulting-type-properties-monitoring-properties-initializemonitoring.md "https://onlineberatung/consultingtype#/properties/monitoring/properties/initializeMonitoring")

### initializeMonitoring Type

`boolean`

## monitoringTemplateFile

The path to the template file for the initialization of the monitoring for this consulting type

`monitoringTemplateFile`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [Consulting type](consulting-type-properties-monitoring-properties-monitoringtemplatefile.md "https://onlineberatung/consultingtype#/properties/monitoring/properties/monitoringTemplateFile")

### monitoringTemplateFile Type

`string`
