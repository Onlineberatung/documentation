---
id: smoke-testsuite
title: Smoke Test Suite
---

This is our recommended template for smoke testing.

## General Info

1. Environment:
2. Date:
3. Version:
4. Tester:

## Pre-conditions

- a tenant with multiple agencies
- all features enabled (video, zipcode required in registration, etc.)
- 1 existing counselor user
- counselor uses laptop/desktop + chrome
- advice seeker uses mobile device

## Scenarios

Counselor (C), Advice Seeker (AS)

|No.|Scenario|Description|User|Steps|Expected Result|
|--- |--- |--- |--- |--- |--- |
|1|Reset Password|C can reset her password|Counselor|<ol><li>Go to Login page</li><li>Go to Forgot Password</li><li>Enter the email address</li><li>(Receive email) Click on the link in the email</li><li>Set new password</li></ol>|Can login with the newly set password|
|2|Registration|New AS can register|AS|<ol><li>Go to registration</li><li>Register as a new AS</li></ol>|RS is logged into her account|
|3|Write a first message|AS can write a first message|AS|<ol><li>As a newly registered AS, write a first request</li></ol>|<ol><li>The next steps appear for the AS</li><li>A C in that agency sees the enquiry</li></ol>|
|4|Take a new request|C can pick up an enquiry|C|<ol><li>Log in as a C</li><li>Go to enquiry and click on "accept enquiry"</li></ol>|The request is now under "my messages"|
|5|Chat|Chat works between AS and C|AS & C|<ol><li>Both C and AS write to eachother</li><li>Send a file</li></ol>|Both receive the chat messages|
|6|Video call|Video call works between AS and C|AS & C|<ol><li>C starts a video call</li><li>AS picks up</li><li>AS asks permission to get to the call</li><li>C accepts the AS</li><li>They turn the camera and mic on</li><li>C ends the call</li></ol>|<ol><li>AS needs to ask for permission to get into the call</li><li>Video and audio can be turned on/off</li><li>Video and audio works between both</li></ol>|
|7|Delete message|C can delete a message|C|<ol><li>C goes to "my messages" and picks a message</li><li>C deletes the message</li></ol>|The message is no longer available in "my messages"|
|8|Delete account|AS can delete her account|AS|<ol><li>AS goes to "profile" and clicks on "delete account"</li><li>AS enters the password and confirms</li></ol>|The AS account is deleted|
|9|Waiting Room|AS gets an id in the waiting room|AS|<ol><li>AS goes to waiting room</li><li>AS accepts terms & conditions</li></ol>|<ol><li>AS gets an id in the waiting room</li><li>A C in that tenant sees the AS in "enquiries"</li></ol>|
|10|Live chat|Live chat works between a AS and a C|AS & C|<ol><li>C takes a request of a AS in waiting room</li><li>Both chat with each other</li><li>The chat can be finished</li></ol>|<ol><li>AS is able to chat</li><li>They both receive messages</li><li>AS is logged out, C gets notified (session is over)</li></ol>|