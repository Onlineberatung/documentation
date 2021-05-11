# AdminUserControllerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeAgencyType**](AdminUserControllerApi.md#changeAgencyType) | **POST** /useradmin/agency/{agencyId}/changetype | Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. This endpoint must be used only internally from AgencyService to ensure the regarding agency has been flagged correctly too. [Authorization: Role: user-admin]
[**createConsultant**](AdminUserControllerApi.md#createConsultant) | **POST** /useradmin/consultants | Creates a new consultant [Authorization: Role: consultant-admin]
[**createConsultantAgency**](AdminUserControllerApi.md#createConsultantAgency) | **POST** /useradmin/consultants/{consultantId}/agencies | Create a consultant-agency relation [Authorization: Role: user-admin]
[**deleteConsultantAgency**](AdminUserControllerApi.md#deleteConsultantAgency) | **DELETE** /useradmin/consultants/{consultantId}/agencies/{agencyId} | Delete a consultant-agency relation [Authorization: Role: user-admin]
[**generateViolationReport**](AdminUserControllerApi.md#generateViolationReport) | **GET** /useradmin/report | Returns an generated report containing data integration violations. [Authorization: Role: user-admin]
[**getConsultant**](AdminUserControllerApi.md#getConsultant) | **GET** /useradmin/consultants/{consultantId} | Get a consultant by given id [Authorization: Role: consultant-admin]
[**getConsultantAgency**](AdminUserControllerApi.md#getConsultantAgency) | **GET** /useradmin/consultants/{consultantId}/agencies | Returns the list of consultant-agency connections for a given consultant Id. [Authorization: Role: user-admin]
[**getConsultants**](AdminUserControllerApi.md#getConsultants) | **GET** /useradmin/consultants | Returns the list of consultants by filter query parameter. [Authorization: Role: consultant-admin]
[**getConsultingTypes**](AdminUserControllerApi.md#getConsultingTypes) | **GET** /useradmin/consultingtypes | Returns the full list of consulting types [Authorization: Role: agency-admin]
[**getSessions**](AdminUserControllerApi.md#getSessions) | **GET** /useradmin/sessions | Returns the list of sessions by filter query parameter. [Authorization: Role: user-admin]
[**markAskerForDeletion**](AdminUserControllerApi.md#markAskerForDeletion) | **DELETE** /useradmin/askers/{askerId} | Delete a asker by given id [Authorization: Role: consultant-admin]
[**markConsultantForDeletion**](AdminUserControllerApi.md#markConsultantForDeletion) | **DELETE** /useradmin/consultants/{consultantId} | Mark a consultant for deletion [Authorization: Role: consultant-admin]
[**updateConsultant**](AdminUserControllerApi.md#updateConsultant) | **PUT** /useradmin/consultants/{consultantId} | Updates a consultant [Authorization: Role: consultant-admin]


<a name="changeAgencyType"></a>
# **changeAgencyType**
> changeAgencyType(agencyId, agencyTypeDTO)

Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. This endpoint must be used only internally from AgencyService to ensure the regarding agency has been flagged correctly too. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **agencyTypeDTO** | [**AgencyTypeDTO**](../model/AgencyTypeDTO.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createConsultant"></a>
# **createConsultant**
> ConsultantAdminResponseDTO createConsultant(createConsultantDTO)

Creates a new consultant [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConsultantDTO** | [**CreateConsultantDTO**](../model/CreateConsultantDTO.md)|  |

### Return type

[**ConsultantAdminResponseDTO**](../model/ConsultantAdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="createConsultantAgency"></a>
# **createConsultantAgency**
> createConsultantAgency(consultantId, createConsultantAgencyDTO)

Create a consultant-agency relation [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| Consultant Id | [default to null]
 **createConsultantAgencyDTO** | [**CreateConsultantAgencyDTO**](../model/CreateConsultantAgencyDTO.md)|  |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="deleteConsultantAgency"></a>
# **deleteConsultantAgency**
> deleteConsultantAgency(consultantId, agencyId)

Delete a consultant-agency relation [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| Consultant Id | [default to null]
 **agencyId** | **Long**| Agency Id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="generateViolationReport"></a>
# **generateViolationReport**
> List generateViolationReport()

Returns an generated report containing data integration violations. [Authorization: Role: user-admin]

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ViolationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConsultant"></a>
# **getConsultant**
> ConsultantAdminResponseDTO getConsultant(consultantId)

Get a consultant by given id [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| consultant id | [default to null]

### Return type

[**ConsultantAdminResponseDTO**](../model/ConsultantAdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConsultantAgency"></a>
# **getConsultantAgency**
> ConsultantAgencyAdminResultDTO getConsultantAgency(consultantId)

Returns the list of consultant-agency connections for a given consultant Id. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| Consultant Id | [default to null]

### Return type

[**ConsultantAgencyAdminResultDTO**](../model/ConsultantAgencyAdminResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getConsultants"></a>
# **getConsultants**
> ConsultantSearchResultDTO getConsultants(page, perPage, filter)

Returns the list of consultants by filter query parameter. [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]
 **filter** | [**ConsultantFilter**](../model/.md)| The filter parameters to search for. If no filter is set all consultant are being returned. | [optional] [default to null]

### Return type

[**ConsultantSearchResultDTO**](../model/ConsultantSearchResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getConsultingTypes"></a>
# **getConsultingTypes**
> ConsultingTypeAdminResultDTO getConsultingTypes(page, perPage)

Returns the full list of consulting types [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]

### Return type

[**ConsultingTypeAdminResultDTO**](../model/ConsultingTypeAdminResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getSessions"></a>
# **getSessions**
> SessionAdminResultDTO getSessions(page, perPage, filter)

Returns the list of sessions by filter query parameter. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]
 **filter** | [**SessionFilter**](../model/.md)| The filter parameters to search for. If no filter is set all sessions are being returned. If more than one filter is set the first given filter is used only. | [optional] [default to null]

### Return type

[**SessionAdminResultDTO**](../model/SessionAdminResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="markAskerForDeletion"></a>
# **markAskerForDeletion**
> markAskerForDeletion(askerId)

Delete a asker by given id [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **askerId** | **String**| asker id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="markConsultantForDeletion"></a>
# **markConsultantForDeletion**
> markConsultantForDeletion(consultantId)

Mark a consultant for deletion [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| consultant id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateConsultant"></a>
# **updateConsultant**
> ConsultantAdminResponseDTO updateConsultant(consultantId, updateConsultantDTO)

Updates a consultant [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| consultant id | [default to null]
 **updateConsultantDTO** | [**UpdateConsultantDTO**](../model/UpdateConsultantDTO.md)|  |

### Return type

[**ConsultantAdminResponseDTO**](../model/ConsultantAdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

