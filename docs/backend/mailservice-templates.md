---
id: mailservice-templates
title: Mail templates
---
### Free text

A template for free text e-mails is available. A subject as well as a text can be submitted for this template.

Template name: free-text  
Key for subject: subject  
Key for text: text

__Note:__ A line break can be created in the text via the control character __respect: __escaped!__).

_Example:_

```
{
	"mails":[
		{
			"template":"free-text",
			"email":"<email>",
			"templateData" : 
				[ 
					{
						"key":"subject",
						"value":"This is the subject"
					},
					{   
						"key":"text",
						"value":"This is the Body\\nAnd this is the second line."
					},
					{
						"key":"url",
						"value":"http://www.<host>"
					}
				]
		}
	]
}
```
### Additional templates

Additional templates are located in the `src\main\resources\templates` path. Each template consists of an HTML and a Json file. The available parameters can be taken from the Json file.