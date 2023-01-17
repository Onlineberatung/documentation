# AdminUserControllerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeAgencyType**](AdminUserControllerApi.md#changeAgencyType) | **POST** /useradmin/agency/{agencyId}/changetype | Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. This endpoint must be used only internally from AgencyService to ensure the regarding agency has been flagged correctly too. [Authorization: Role: user-admin]
[**createAdminAgencyRelation**](AdminUserControllerApi.md#createAdminAgencyRelation) | **POST** /useradmin/agencyadmins/{adminId}/agencies | Create an admin-agency relation [Authorization: Role: user-admin]
[**createAgencyAdmin**](AdminUserControllerApi.md#createAgencyAdmin) | **POST** /useradmin/agencyadmins | Creates a new Agency Admin [Authorization: Role: user-admin]
[**createConsultant**](AdminUserControllerApi.md#createConsultant) | **POST** /useradmin/consultants | Creates a new consultant [Authorization: Role: consultant-admin]
[**createConsultantAgency**](AdminUserControllerApi.md#createConsultantAgency) | **POST** /useradmin/consultants/{consultantId}/agencies | Create a consultant-agency relation [Authorization: Role: user-admin]
[**createTenantAdmin**](AdminUserControllerApi.md#createTenantAdmin) | **POST** /useradmin/tenantadmins | Creates a new Tenant Admin [Authorization: Role: tenant-admin]
[**deleteAdminAgencyRelation**](AdminUserControllerApi.md#deleteAdminAgencyRelation) | **DELETE** /useradmin/agencyadmins/{adminId}/agencies/{agencyId} | Delete a admin-agency relation [Authorization: Role: user-admin]
[**deleteAgencyAdmin**](AdminUserControllerApi.md#deleteAgencyAdmin) | **DELETE** /useradmin/agencyadmins/{adminId} | delete an agency admin [Authorization: Role: user-admin]
[**deleteConsultantAgency**](AdminUserControllerApi.md#deleteConsultantAgency) | **DELETE** /useradmin/consultants/{consultantId}/agencies/{agencyId} | Delete a consultant-agency relation [Authorization: Role: user-admin]
[**deleteTenantAdmin**](AdminUserControllerApi.md#deleteTenantAdmin) | **DELETE** /useradmin/tenantadmins/{adminId} | delete tenant admin [Authorization: Role: tenant-admin]
[**generateViolationReport**](AdminUserControllerApi.md#generateViolationReport) | **GET** /useradmin/report | Returns an generated report containing data integration violations. [Authorization: Role: user-admin]
[**getAdminAgencies**](AdminUserControllerApi.md#getAdminAgencies) | **GET** /useradmin/agencyadmins/{adminId}/agencies | Returns the list of agencies for a given admin Id. [Authorization: Role: restricted-agency-admin]
[**getAgencyAdmin**](AdminUserControllerApi.md#getAgencyAdmin) | **GET** /useradmin/agencyadmins/{adminId} | Get an agency admin by given id [Authorization: Role: user-admin]
[**getAgencyAdmins**](AdminUserControllerApi.md#getAgencyAdmins) | **GET** /useradmin/agencyadmins | Returns the list of agency admins by filter query parameter. [Authorization: Role: user-admin]
[**getAgencyConsultants**](AdminUserControllerApi.md#getAgencyConsultants) | **GET** /useradmin/agencies/{agencyId}/consultants | Returns the list of consultants for a given agency Id. [Authorization: Role: user-admin]
[**getAsker**](AdminUserControllerApi.md#getAsker) | **GET** /useradmin/askers/{askerId} | Get an asker by given id [Authorization: Role: consultant-admin]
[**getConsultant**](AdminUserControllerApi.md#getConsultant) | **GET** /useradmin/consultants/{consultantId} | Get a consultant by given id [Authorization: Role: consultant-admin]
[**getConsultantAgencies**](AdminUserControllerApi.md#getConsultantAgencies) | **GET** /useradmin/consultants/{consultantId}/agencies | Returns the list of agencies for a given consultant Id. [Authorization: Role: user-admin]
[**getConsultants**](AdminUserControllerApi.md#getConsultants) | **GET** /useradmin/consultants | Returns the list of consultants by filter query parameter. [Authorization: Role: consultant-admin]
[**getSessions**](AdminUserControllerApi.md#getSessions) | **GET** /useradmin/sessions | Returns the list of sessions by filter query parameter. [Authorization: Role: user-admin]
[**getTenantAdmin**](AdminUserControllerApi.md#getTenantAdmin) | **GET** /useradmin/tenantadmins/{adminId} | Get a tenant admin by given id [Authorization: Role: tenant-admin]
[**getTenantAdmins**](AdminUserControllerApi.md#getTenantAdmins) | **GET** /useradmin/tenantadmins | Returns the list of tenant admins by filter query parameter. [Authorization: Role: user-admin]
[**markAskerForDeletion**](AdminUserControllerApi.md#markAskerForDeletion) | **DELETE** /useradmin/askers/{askerId} | Delete a asker by given id [Authorization: Role: consultant-admin]
[**markConsultantForDeletion**](AdminUserControllerApi.md#markConsultantForDeletion) | **DELETE** /useradmin/consultants/{consultantId} | Mark a consultant for deletion [Authorization: Role: consultant-admin]
[**searchAgencyAdmins**](AdminUserControllerApi.md#searchAgencyAdmins) | **GET** /useradmin/agencyadmins/search | Get Agency admins matching the given query [Auth: user-admin]
[**searchTenantAdmins**](AdminUserControllerApi.md#searchTenantAdmins) | **GET** /useradmin/tenantadmins/search | Get tenant admins matching the given query [Auth: tenant-admin]
[**setAdminAgenciesRelation**](AdminUserControllerApi.md#setAdminAgenciesRelation) | **PUT** /useradmin/agencyadmins/{adminId}/agencies | Set admin-agency relations [Authorization: Role: user-admin]
[**setConsultantAgencies**](AdminUserControllerApi.md#setConsultantAgencies) | **PUT** /useradmin/consultants/{consultantId}/agencies | Set consultant-agency relations [Authorization: Role: user-admin]
[**updateAgencyAdmin**](AdminUserControllerApi.md#updateAgencyAdmin) | **PUT** /useradmin/agencyadmins/{adminId} | Updates an agency admin [Authorization: Role: user-admin]
[**updateConsultant**](AdminUserControllerApi.md#updateConsultant) | **PUT** /useradmin/consultants/{consultantId} | Updates a consultant [Authorization: Role: consultant-admin]
[**updateTenantAdmin**](AdminUserControllerApi.md#updateTenantAdmin) | **PUT** /useradmin/tenantadmins/{adminId} | Updates a tenant admin [Authorization: Role: tenant-admin]


<a name="changeAgencyType"></a>
# **changeAgencyType**
> changeAgencyType(agencyId, AgencyTypeDTO)

Change an agency from team-agency to default and vice-versa and switch the associated consultant accounts to team consultant or default consultant. Ongoing team counselings change to 1:1 when converting agency to default status. 1:1 counselings remain single counselings when swapping the agency to team-agency. This endpoint must be used only internally from AgencyService to ensure the regarding agency has been flagged correctly too. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **Long**| Agency Id | [default to null]
 **AgencyTypeDTO** | [**AgencyTypeDTO**](../model/AgencyTypeDTO.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createAdminAgencyRelation"></a>
# **createAdminAgencyRelation**
> createAdminAgencyRelation(adminId, CreateAdminAgencyRelationDTO)

Create an admin-agency relation [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin Id | [default to null]
 **CreateAdminAgencyRelationDTO** | [**CreateAdminAgencyRelationDTO**](../model/CreateAdminAgencyRelationDTO.md)|  |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createAgencyAdmin"></a>
# **createAgencyAdmin**
> AdminResponseDTO createAgencyAdmin(CreateAdminDTO)

Creates a new Agency Admin [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateAdminDTO** | [**CreateAdminDTO**](../model/CreateAdminDTO.md)|  |

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="createConsultant"></a>
# **createConsultant**
> ConsultantAdminResponseDTO createConsultant(CreateConsultantDTO)

Creates a new consultant [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateConsultantDTO** | [**CreateConsultantDTO**](../model/CreateConsultantDTO.md)|  |

### Return type

[**ConsultantAdminResponseDTO**](../model/ConsultantAdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="createConsultantAgency"></a>
# **createConsultantAgency**
> createConsultantAgency(consultantId, CreateConsultantAgencyDTO)

Create a consultant-agency relation [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| Consultant Id | [default to null]
 **CreateConsultantAgencyDTO** | [**CreateConsultantAgencyDTO**](../model/CreateConsultantAgencyDTO.md)|  |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createTenantAdmin"></a>
# **createTenantAdmin**
> AdminResponseDTO createTenantAdmin(CreateAdminDTO)

Creates a new Tenant Admin [Authorization: Role: tenant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateAdminDTO** | [**CreateAdminDTO**](../model/CreateAdminDTO.md)|  |

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="deleteAdminAgencyRelation"></a>
# **deleteAdminAgencyRelation**
> deleteAdminAgencyRelation(adminId, agencyId)

Delete a admin-agency relation [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| Admin Id | [default to null]
 **agencyId** | **Long**| Agency Id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteAgencyAdmin"></a>
# **deleteAgencyAdmin**
> deleteAgencyAdmin(adminId)

delete an agency admin [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin id | [default to null]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
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

<a name="deleteTenantAdmin"></a>
# **deleteTenantAdmin**
> deleteTenantAdmin(adminId)

delete tenant admin [Authorization: Role: tenant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin id | [default to null]

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

<a name="getAdminAgencies"></a>
# **getAdminAgencies**
> List getAdminAgencies(adminId)

Returns the list of agencies for a given admin Id. [Authorization: Role: restricted-agency-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin Id | [default to null]

### Return type

[**List**](../model/long.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAgencyAdmin"></a>
# **getAgencyAdmin**
> AdminResponseDTO getAgencyAdmin(adminId)

Get an agency admin by given id [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin id | [default to null]

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAgencyAdmins"></a>
# **getAgencyAdmins**
> AdminSearchResultDTO getAgencyAdmins(page, perPage, filter, sort)

Returns the list of agency admins by filter query parameter. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]
 **filter** | [**AdminFilter**](../model/.md)| The filter parameters to search for. If no filter is set all admins are being returned. | [optional] [default to null]
 **sort** | [**Sort**](../model/.md)| The sort parameter containing field and order the response should be sorted | [optional] [default to null]

### Return type

[**AdminSearchResultDTO**](../model/AdminSearchResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getAgencyConsultants"></a>
# **getAgencyConsultants**
> AgencyConsultantResponseDTO getAgencyConsultants(agencyId)

Returns the list of consultants for a given agency Id. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **String**| Agency Id | [default to null]

### Return type

[**AgencyConsultantResponseDTO**](../model/AgencyConsultantResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getAsker"></a>
# **getAsker**
> AskerResponseDTO getAsker(askerId)

Get an asker by given id [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **askerId** | **String**| asker id | [default to null]

### Return type

[**AskerResponseDTO**](../model/AskerResponseDTO.md)

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

<a name="getConsultantAgencies"></a>
# **getConsultantAgencies**
> ConsultantAgencyResponseDTO getConsultantAgencies(consultantId)

Returns the list of agencies for a given consultant Id. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| Consultant Id | [default to null]

### Return type

[**ConsultantAgencyResponseDTO**](../model/ConsultantAgencyResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="getConsultants"></a>
# **getConsultants**
> ConsultantSearchResultDTO getConsultants(page, perPage, filter, sort)

Returns the list of consultants by filter query parameter. [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Number of page where to start in the query (1 &#x3D; first page) | [default to null]
 **perPage** | **Integer**| Number of items which are being returned per page | [default to null]
 **filter** | [**ConsultantFilter**](../model/.md)| The filter parameters to search for. If no filter is set all consultant are being returned. | [optional] [default to null]
 **sort** | [**Sort**](../model/.md)| The sort parameter containing field and order the response should be sorted | [optional] [default to null]

### Return type

[**ConsultantSearchResultDTO**](../model/ConsultantSearchResultDTO.md)

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

<a name="getTenantAdmin"></a>
# **getTenantAdmin**
> AdminResponseDTO getTenantAdmin(adminId)

Get a tenant admin by given id [Authorization: Role: tenant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| admin id | [default to null]

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantAdmins"></a>
# **getTenantAdmins**
> List getTenantAdmins(tenantId)

Returns the list of tenant admins by filter query parameter. [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenant id | [default to null]

### Return type

[**List**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

<a name="searchAgencyAdmins"></a>
# **searchAgencyAdmins**
> AdminSearchResultDTO searchAgencyAdmins(query, page, perPage, field, order)

Get Agency admins matching the given query [Auth: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| URL-encoded infix to search for in first name, last name, or email. A non-encoded star symbol searches for all. | [default to null]
 **page** | **Integer**| Page number (first page &#x3D; 1) | [optional] [default to 1]
 **perPage** | **Integer**| Number of items returned per page | [optional] [default to 10]
 **field** | **String**| field to sort by | [optional] [default to FIRSTNAME] [enum: FIRSTNAME, LASTNAME, EMAIL]
 **order** | **String**| sort order | [optional] [default to ASC] [enum: ASC, DESC]

### Return type

[**AdminSearchResultDTO**](../model/AdminSearchResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="searchTenantAdmins"></a>
# **searchTenantAdmins**
> AdminSearchResultDTO searchTenantAdmins(query, page, perPage, field, order)

Get tenant admins matching the given query [Auth: tenant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| URL-encoded infix to search for in first name, last name, or email. A non-encoded star symbol searches for all. | [default to null]
 **page** | **Integer**| Page number (first page &#x3D; 1) | [optional] [default to 1]
 **perPage** | **Integer**| Number of items returned per page | [optional] [default to 10]
 **field** | **String**| field to sort by | [optional] [default to FIRSTNAME] [enum: FIRSTNAME, LASTNAME, EMAIL]
 **order** | **String**| sort order | [optional] [default to ASC] [enum: ASC, DESC]

### Return type

[**AdminSearchResultDTO**](../model/AdminSearchResultDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

<a name="setAdminAgenciesRelation"></a>
# **setAdminAgenciesRelation**
> setAdminAgenciesRelation(adminId, CreateAdminAgencyRelationDTO)

Set admin-agency relations [Authorization: Role: user-admin]

    Existing relations are deleted, passed relations added.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**|  | [default to null]
 **CreateAdminAgencyRelationDTO** | [**List**](../model/CreateAdminAgencyRelationDTO.md)|  |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="setConsultantAgencies"></a>
# **setConsultantAgencies**
> setConsultantAgencies(consultantId, CreateConsultantAgencyDTO)

Set consultant-agency relations [Authorization: Role: user-admin]

    Existing relations are deleted, passed relations added.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**|  | [default to null]
 **CreateConsultantAgencyDTO** | [**List**](../model/CreateConsultantAgencyDTO.md)|  |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="updateAgencyAdmin"></a>
# **updateAgencyAdmin**
> AdminResponseDTO updateAgencyAdmin(adminId, UpdateAgencyAdminDTO)

Updates an agency admin [Authorization: Role: user-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| agency admin id | [default to null]
 **UpdateAgencyAdminDTO** | [**UpdateAgencyAdminDTO**](../model/UpdateAgencyAdminDTO.md)|  |

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="updateConsultant"></a>
# **updateConsultant**
> ConsultantAdminResponseDTO updateConsultant(consultantId, UpdateAdminConsultantDTO)

Updates a consultant [Authorization: Role: consultant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consultantId** | **String**| consultant id | [default to null]
 **UpdateAdminConsultantDTO** | [**UpdateAdminConsultantDTO**](../model/UpdateAdminConsultantDTO.md)|  |

### Return type

[**ConsultantAdminResponseDTO**](../model/ConsultantAdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

<a name="updateTenantAdmin"></a>
# **updateTenantAdmin**
> AdminResponseDTO updateTenantAdmin(adminId, UpdateTenantAdminDTO)

Updates a tenant admin [Authorization: Role: tenant-admin]

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminId** | **String**| agency admin id | [default to null]
 **UpdateTenantAdminDTO** | [**UpdateTenantAdminDTO**](../model/UpdateTenantAdminDTO.md)|  |

### Return type

[**AdminResponseDTO**](../model/AdminResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

