# usage
```
$ yarn install
$ yarn typeorm migration:run
$ yarn dev

```
# Users

POST: [url]/users

body json:
```
{
	"name":"user",
	"email":"user@exemplo.com"
}
```
result example:
```
{
  "id": "52391a0c-ad5d-4e73-aa50-3203aaecbdde",
  "name": "user",
  "email": "user@exemplo.com",
  "created_at": "2021-02-26T20:25:03.000Z"
}
```
# Surveys

Create:

POST [url]/surveys

body json:

```
{
	"title":"Queremos ouvir sua opnião!",
	"description":"De 0 a 10, quanto você recomendaria a empresa?"
}
```
result exemple:

```
{
  "id": "e1d97e82-4822-4379-888c-a17434c9ea18",
  "title": "Queremos ouvir sua opnião!",
  "description": "De 0 a 10, quanto você recomendaria a empresa?",
  "created_at": "2021-02-26T19:20:32.000Z"
}
```

# Show

GET [url]//surveys

result exemple:
```
[
  {
    "id": "e1d97e82-4822-4379-888c-a17434c9ea18",
    "title": "Queremos ouvir sua opnião!",
    "description": "De 0 a 10, quanto você recomendaria a empresa?",
    "created_at": "2021-02-26T19:20:32.000Z"
  }
]

```
# SendMail

POST [url]/sendMail

body json:
```
{
	"email":"thayna.silva10002@gmail.com",
	"survey_id":"e1d97e82-4822-4379-888c-a17434c9ea18"
}
```
result exemple:
```
{
  "id": "664e4648-a445-4de8-b545-08d75c2eac41",
  "user_id": "5cd39c7a-13c2-49a8-b64e-fe236babd33a",
  "survey_id": "e1d97e82-4822-4379-888c-a17434c9ea18",
  "created_at": "2021-02-26T20:09:54.000Z"
}

```

# Answer 

exemple:

![image](https://user-images.githubusercontent.com/68509019/109358059-e7bcc100-7861-11eb-9de4-e54e0aa283c5.png)

# Result NPS

POST [url]\nps\{survey_id:params}

Result exemple:

```
{
  "dectractor": 1,
  "promotors": 3,
  "passive": 0,
  "totalAnswers": 4,
  "nps": 50
}

```





