# Notes Api

The project was design to provide an API that can perform CRUD operations using a combination of Node.js, Express, and MongoDB. CRUD is an acronym that stands for Create, Read, Update, and Delete, which are the basic operations that are commonly performed on data in a database.

## Library & dependencies
* [Express js](https://github.com/expressjs/express)
* [Nodemon](https://github.com/remy/nodemon)
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [Mongoose](https://github.com/Automattic/mongoose)
* [Connect-Mongo](https://github.com/jdesboeufs/connect-mongo)
* [JWT]([https://www.passportjs.org/](https://www.npmjs.com/package/jsonwebtoken))


## Live Preview
* [Mobile App](https://github.com/Raziur306/notes-jetpack-compose)
* [React App](https://github.com/Raziur306/notes-jetpack-compose)

## Request Method

### POST

`Endpoint: /api/register`

* Description: User registration.

Request Body:
```json
{
    "name":"Raziur Rahaman",
    "email":"raziur.rahaman.ronju@gmail.com",
    "password":"1234"
}
```

Response Body:

```json
{
    "response": true,
    "message": "Sign in sucessful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJheml1ci5yYWhhbWFuLnJvbmp1QGdtYWlsLmNvbSIsImlkIjoiNjQxYzc3NGU2ZjdmNTQ4OTU0YjZjODlmIiwiaWF0IjoxNjc5NTg3NDUwfQ.vvnL18_rWvFrERoWmrXR4uTR5vkPvNbEXuseMlqhff4"
}
```
`Endpoint: /api/login`

* Description: User login.

Request Body:
```json
{
    "email":"raziur.rahaman.ronju@gmail.com",
    "password":"1234"
}
```
Response Body:

```json
{
    "response": true,
    "message": "Sign in sucessful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJheml1ci5yYWhhbWFuLnJvbmp1QGdtYWlsLmNvbSIsImlkIjoiNjQxYzc3NGU2ZjdmNTQ4OTU0YjZjODlmIiwiaWF0IjoxNjc5NTg3NDUwfQ.vvnL18_rWvFrERoWmrXR4uTR5vkPvNbEXuseMlqhff4"
}
```

`Endpoint: /api/notes`
* Description: To create new notes.

Request Body:
```json
{
    "title":"Note Title",
    "content":"Note content."
}
```


### GET

`Endpoint: /api/notes`

* Description: To get existing notes from the database. 

Response Body:
```json
[
    {
        "_id": "641ec65b7c656f91007ee17b",
        "title": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "createdAt": "2023-03-25T10:00:59.226Z",
        "updatedAt": "2023-03-25T10:00:59.226Z",
        "__v": 0
    },
    {
        "_id": "641ec795c6349fae80090d5a",
        "title": "Why do we use it?",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "createdAt": "2023-03-25T10:06:13.060Z",
        "updatedAt": "2023-03-25T10:06:13.060Z",
        "__v": 0
    }
]
```

### PUT
`Endpoint: /api/notes`

* Description: To update content of existing notes.


### DELETE
`Endpoint: /api/notes`
* Description: To Delete content of existing notes.


For accessing all the funcitonality user must need to be loggged in and store the token in a safe place. And need to send data to header for operation like (update, delete, create) note. Unauthorized acess was restricted by default.
