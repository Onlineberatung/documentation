---
id: browser-matrix
title: Browser matrix
---

In general: A distinction is made between a test browser matrix and the matrix of supported browsers.
The test browser matrix defines the browsers in which each new component is tested. Each additional browser increases the testing effort for each new component. The matrix of supported browsers defines those browsers, which are supported in general by the frontend, but are not tested explicitly.

Example: Firefox and Chrome release new browser versions every 6 weeks. The latest Chrome/Firefox version will be included in the test matrix. In the matrix of supported browsers are all Firefox versions of the past 1.5 years.
This ensures that these browser versions are supported, with a lower test effort.

Following recommendation can be derived from the following parameters:
* Use of the browser in the global statistics or from "high priority" countries.
* Threshold test effort for additional browsers.
* Standard conformability of the respective browser in order to be able to classify additional efforts required to support this browser.

There is also a distinction between "fully supported browsers" and "functionally supported browsers". Full supported browsers are browsers in which both, functionality and visuality must completely be in line according to the specification. Functional supported means that within these browsers, the basic functionality of the page must be accessible for the user, ie all information is available/accessible. But there may be reductions in design and user experience. This may vary depending on browser, browser version and features used.

## Matrix of Supported Browsers

|Browser version|Operating system|Type of support|Input methods|
|--- |--- |--- |--- |
|Microsoft Edge (latest)|Win 10 (latest)|fully supported|Mouse/Touch|
|Mozilla Firefox (all versions of the past 1.5 years)|Win 10 (latest) / OS X (latest)|fully supported|Mouse|
|Google Chrome (all versions of the past 1.5 years)|Win 10 (latest) / OS X (latest)|fully supported|Mouse|
|Safari Desktop (all versions of the past 1.5 years)|OS X (latest)|fully supported|Mouse|
|Safari Mobile (latest 2 major)|iOS|fully supported|Touch|
|Chrome Mobile (latest 3 major)|Android|fully supported|Touch|

## Test Browser Matrix

|Browser version|Operating system|Type of support|Input methods|
|--- |--- |--- |--- |
|Microsoft Edge (latest)|Win 10 (latest)|fully supported|Mouse|
|Mozilla Firefox (latest)|Win 10 (latest) / OS X (latest)|fully supported|Mouse|
|Google Chrome (latest)|Win 10 (latest) / OS X (latest)|fully supported|Mouse|
|Safari Desktop (latest)|OS X (latest)|fully supported|Mouse|
|Safari Mobile (latest)|iOS|fully supported|Touch|
|Chrome Mobile (latest)|Android|fully supported|Touch|