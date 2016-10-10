# URL-Shortener
This is a Simple URL-Shortener.

## Installation

Install all dependencies
```
npm i or npm install
```

Install all command line tools
```
npm i -g nodemon
```

## env
create a .env file.
```
DB_NAME=dbName
DB_HOST=dbUser
DB_PORT=3306
DB_USER=root
DB_PASS=dbPass
DB_SCHEMA=mysql
```

## Start the server

To run the server with default settings run
```
npm start
```

## Debug usage

Turn debug on
```
DEBUG=true node src/server.js
```

Sample debug output
```
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Server Active on port 3000
Thu Oct 06 2016 18:29:23 GMT-0400 (EDT)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```

## routes

| Method | URL | Response |
|---|---|---|---|
| POST | /api/v1/urls | [{ "id": 1, "originalUrl": "https://www.google.com/", "newUrl": "TWUmFnrl", "createdAt": "2016-10-05T03:42:31.000Z", "updatedAt": "2016-10-05T03:42:31.000Z" }] |
| GET | /api/v1/urls | [{ "id": 2, "originalUrl": "https://www.google.com/", "newUrl": "txGpFKb1", "createdAt": "2016-10-05T03:42:31.000Z", "updatedAt": "2016-10-05T03:42:31.000Z" }] |
| GET | /api/v1/urls/:id | [{ "id": 3, "originalUrl": "https://www.google.com/", "newUrl": "rpAZoPEB", "createdAt": "2016-10-05T03:42:31.000Z", "updatedAt": "2016-10-05T03:42:31.000Z" }] |
| POST | /api/v1/urls/:id | [{ "id": 3, "originalUrl": "https://www.google.com/", "newUrl": "akjwfba", "createdAt": "2016-10-05T03:42:31.000Z", "updatedAt": "2016-10-05T03:42:31.000Z" }] |
| DELETE | /api/v1/urls/:id | [{ 1 }] |
| GET | /go/:newUrl | [{ "https://www.google.com/" }] |

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
