---
id: mailservice-templates
title: Mail templates
---
### Freitext

Es steht ein Template für Freitext-E-Mails zur Verfügung. Für dieses Template kann ein Betreff sowie ein Text übermittelt werden.

Template-Name: free-text  
Schlüssel für Betreff: subject  
Schlüssel für Text: text

__Hinweis:__ Beim Text kann über das Steuerzeichen \\\n (__beachten: \n escaped!__) ein Zeilenumbruch erzeugt werden.

_Beispiel:_

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
						"value":"Dies ist der Betreff"
					},
					{   
						"key":"text",
						"value":"Dies ist der Body\\nUnd dies ist die zweite Zeile."
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
### Weitere Templates

Weitere Templates liegen im Pfad `src\main\resources\templates`. Jedes Templates besteht aus einer HTML- und einer Json-Datei. Der Json-Datei können die zur Verfügung stehenden Parameter entnommen werden.