---
id: delete-workflows
title: Delete workflows
---
# Delete workflows
Besides the possibility for each user, to delete the own account, there are two additional and automatic delete workflows you can activate in the UserService environment configuration file `./UserService/UserService.env`.

## Deletion of inactive session and users

This workflow checks if there are any inactive session and deletes them automatically. Inactive session means that no more messages have been exchanged within a period of days to be configured.

⚠️ If a user has only one session, which was detected as inactive and deleted, __the entire user account will also be deleted__. The user then no longer has access to the portal and must register again for another consultation.

_Parameters to set in the UserService environment configuration file `./UserService/UserService.env`:_

| Name | Description | Default |
| ---- | ----------- | ------- |
| SESSION_INACTIVE_DELETEWORKFLOW_ENABLED | Indicates whether this delete workflow is active or inactive. Permitted values: true / false  | false (disabled) |
| SESSION_INACTIVE_DELETEWORKFLOW_CHECK_DAYS | The number of days in which no more messages must have been written for a session to be automatically deleted. | 30 |

⚠️ The workflow will be executed every night at 2:00 am.

## Deletion of users which has only a registration, but no running session

This workflow checks if there are users who have only registered but do not have an active session and deletes them. All sessions are taken into account for which no initial request was ever written.

⚠️ Users whose inactive sessions were deleted by the delete workflow `Deletion of inactive session and users` (see above) may be deleted by this workflow afterwards.

_Parameters to set in the UserService environment configuration file `./UserService/UserService.env`:_

| Name | Description | Default |
| ---- | ----------- | ------- |
| USER_REGISTEREDONLY_DELETEWORKFLOW_ENABLED | Indicates whether this delete workflow is active or inactive. Permitted values: true / false  | false (disabled) |
| USER_REGISTEREDONLY_DELETEWORKFLOW_CHECK_DAYS | The number of days that must have passed since registration for a user to be deleted without sessions in progress | 30 |

⚠️ The workflow will be executed every night at 3:00 am.