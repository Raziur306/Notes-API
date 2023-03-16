# Notes Api

The project was design to provide an API that can perform CRUD operations using a combination of Node.js, Express, and MongoDB. CRUD is an acronym that stands for Create, Read, Update, and Delete, which are the basic operations that are commonly performed on data in a database.

## Library & dependencies
* [Express js](https://github.com/expressjs/express)
* [Nodemon](https://github.com/remy/nodemon)
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [Mongoose](https://github.com/Automattic/mongoose)
* [Connect-Mongo](https://github.com/jdesboeufs/connect-mongo)
* [Passport js](https://www.passportjs.org/)


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

`Endpoint: /api/login`

* Description: User login.

Request Body:
```json
{
    "email":"raziur.rahaman.ronju@gmail.com",
    "password":"1234"
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


### PATCH
`Endpoint: /api/notes`

* Description: To update content of existing notes.


### DELETE
`Endpoint: /api/notes`
* Description: To Delete content of existing notes.

Request Body:

```json
{
   "id": "<note_id>"
}
```

For accessing all the funcitonality user must need to be loggged in. Unauthorized acess was restricted by default.
