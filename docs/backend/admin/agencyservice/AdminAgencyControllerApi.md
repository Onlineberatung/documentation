# AdminAgencyControllerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeAgencyType**](AdminAgencyControllerApi.md#changeAgencyType) | **POST** /agencyadmin/agencies/{agencyId}/changetype | Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. [Authorization: Role: user-admin]
[**createAgency**](AdminAgencyControllerApi.md#createAgency) | **POST** /agencyadmin/agencies | Creates a new agency [Authorization: Role: agency-admin]
[**createAgencyPostcodeRange**](AdminAgencyControllerApi.md#createAgencyPostcodeRange) | **POST** /agencyadmin/agencies/{agencyId}/postcoderanges | Creates a new postcode range for an agency [Authorization: Role: agency-admin]
[**deleteAgency**](AdminAgencyControllerApi.md#deleteAgency) | **DELETE** /agencyadmin/agencies/{agencyId} | Flags an agency as deleted [Authorization: Role: agency-admin]
[**deleteAgencyPostcodeRange**](AdminAgencyControllerApi.md#deleteAgencyPostcodeRange) | **DELETE** /agencyadmin/postcoderanges/{postcodeRangeId} | Delete a specific postcode range [Authorization: Role: agency-admin]
[**getAgency**](AdminAgencyControllerApi.md#getAgency) | **GET** /agencyadmin/agencies/{agencyId} | Get an agency [Authorization: Role: agency-admin]
[**getAgencyPostcodeRange**](AdminAgencyControllerApi.md#getAgencyPostcodeRange) | **GET** /agencyadmin/postcoderanges/{postcodeRangeId} | Get a specific postcode range for an agency [Authorization: Role: agency-admin]
[**getAgencyPostcodeRanges**](AdminAgencyControllerApi.md#getAgencyPostcodeRanges) | **GET** /agencyadmin/agencies/{agencyId}/postcoderanges | Returns the list of the postcode ranges for an agency.  [Authorization: Role: agency-admin]
[**getDioceses**](AdminAgencyControllerApi.md#getDioceses) | **GET** /agencyadmin/dioceses | Returns the full list of dioceses [Authorization: Role: agency-admin]
[**searchAgencies**](AdminAgencyControllerApi.md#searchAgencies) | **GET** /agencyadmin/agencies | Returns the list of agencies by search query parameter. [Authorization: Role: agency-admin]
[**updateAgency**](AdminAgencyControllerApi.md#updateAgency) | **PUT** /agencyadmin/agencies/{agencyId} | Updates an agency [Authorization: Role: agency-admin]
[**updateAgencyPostcodeRange**](AdminAgencyControllerApi.md#updateAgencyPostcodeRange) | **PUT** /agencyadmin/postcoderanges/{postcodeRangeId} | Updates an existing postcode range for an agency [Authorization: Role: agency-admin]


<a name="changeAgencyType"></a>
# **changeAgencyType**
> changeAgencyType(agencyId, AgencyTypeRequestDTO)

Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **AgencyTypeRequestDTO** | [**AgencyTypeRequestDTO**](../model/AgencyTypeRequestDTO.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createAgency"></a>
# **createAgency**
> AgencyAdminFullResponseDTO createAgency(AgencyDTO)

Creates a new agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AgencyDTO** | [**AgencyDTO**](../model/AgencyDTO.md)|  |

### Return type

[**AgencyAdminFullResponseDTO**](../model/AgencyAdminFullResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="createAgencyPostcodeRange"></a>
# **createAgencyPostcodeRange**
> AgencyPostcodeRangeResponseDTO createAgencyPostcodeRange(agencyId, PostCodeRangeDTO)

Creates a new postcode range for an agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **PostCodeRangeDTO** | [**PostCodeRangeDTO**](../model/PostCodeRangeDTO.md)|  |

### Return type

[**AgencyPostcodeRangeResponseDTO**](../model/AgencyPostcodeRangeResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="deleteAgency"></a>
# **deleteAgency**
> deleteAgency(agencyId)

Flags an agency as deleted [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteAgencyPostcodeRange"></a>
# **deleteAgencyPostcodeRange**
> deleteAgencyPostcodeRange(postcodeRangeId)

Delete a specific postcode range [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcodeRangeId** | **Long**| Postcode range id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getAgency"></a>
# **getAgency**
> AgencyAdminFullResponseDTO getAgency(agencyId)

Get an agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency ID | [default to null]

### Return type

[**AgencyAdminFullResponseDTO**](../model/AgencyAdminFullResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAgencyPostcodeRange"></a>
# **getAgencyPostcodeRange**
> AgencyPostcodeRangeResponseDTO getAgencyPostcodeRange(postcodeRangeId)

Get a specific postcode range for an agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcodeRangeId** | **Long**| Postcode range id | [default to null]

### Return type

[**AgencyPostcodeRangeResponseDTO**](../model/AgencyPostcodeRangeResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAgencyPostcodeRanges"></a>
# **getAgencyPostcodeRanges**
> AgencyPostcodeRangesResultDTO getAgencyPostcodeRanges(agencyId, page, perPage)

Returns the list of the postcode ranges for an agency.  [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **page** | **Integer**| Number of page where to start (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]

### Return type

[**AgencyPostcodeRangesResultDTO**](../model/AgencyPostcodeRangesResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getDioceses"></a>
# **getDioceses**
> DioceseAdminResultDTO getDioceses(page, perPage)

Returns the full list of dioceses [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]

### Return type

[**DioceseAdminResultDTO**](../model/DioceseAdminResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="searchAgencies"></a>
# **searchAgencies**
> AgencyAdminSearchResultDTO searchAgencies(page, perPage, q)

Returns the list of agencies by search query parameter. [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]
 **q** | **String**| The query parameter to search for | [optional] [default to null]

### Return type

[**AgencyAdminSearchResultDTO**](../model/AgencyAdminSearchResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="updateAgency"></a>
# **updateAgency**
> AgencyAdminFullResponseDTO updateAgency(agencyId, UpdateAgencyDTO)

Updates an agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **UpdateAgencyDTO** | [**UpdateAgencyDTO**](../model/UpdateAgencyDTO.md)|  |

### Return type

[**AgencyAdminFullResponseDTO**](../model/AgencyAdminFullResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="updateAgencyPostcodeRange"></a>
# **updateAgencyPostcodeRange**
> AgencyPostcodeRangeResponseDTO updateAgencyPostcodeRange(postcodeRangeId, PostCodeRangeDTO)

Updates an existing postcode range for an agency [Authorization: Role: agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcodeRangeId** | **Long**| Postcode range id | [default to null]
 **PostCodeRangeDTO** | [**PostCodeRangeDTO**](../model/PostCodeRangeDTO.md)|  |

### Return type

[**AgencyPostcodeRangeResponseDTO**](../model/AgencyPostcodeRangeResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

