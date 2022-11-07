# Blog App API

This is an api for a blog app

---

## Requirements

1. Users must sign up / register with :

- a. First name
- b. Last name
- c. Valid Email
- d. Password

2. Users must login with:

- a. A valid Email
- b. A valid Password

3. Authenticated users can create blog post

4. Users can get all published blog(whether login or logout)

5. Owner of the blog can edit both the published blog or draft blog, delete it, also view all its blogs

6. The owner of the blog should be able to get a list of their blogs.

- a. The endpoint should be paginated
- b. It should be filterable by state

---

## Setup

- Install NodeJS, mongodb
- pull this repo
- update env with example.env
- run `npm run dev`

---

## Base URL

- https://my-blogapi.herokuapp.com/

### User

| field      | data_type | constraints |
| ---------- | --------- | ----------- |
| id         | string    | required    |
| first_name | string    | required    |
| last_name  | string    | required    |
| email      | string    | required    |
| password   | string    | required    |

### Blogs

| field       | data_type | constraints                            |
| ----------- | --------- | -------------------------------------- |
| id          | string    | required                               |
| Title       | string    | required                               |
| Description | string    | required                               |
| Body        | string    | required                               |
| Author      | string    | required                               |
| Tags        | number    | required, enum: ['draft', 'published'] |
| Read_Count  | number    | required, default: 0                   |
| Read_time   | string    | required                               |

## APIs

---

### Signup User

- Route: /signup
- Method: POST
- Body:

```js
{
  "first_name": "jon",
  "last_name": "doe",
  "email": "doe@example.com",
  "password": "Password1"
}
```

- Responses

Success

```js
{
    "message": 'Sign up was successful',
    "user": {
        "email": "doe@example.com",
        "first_name": "jon",
        "last_name": "doe",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
    }
}
```

---

### Login User

- Route: /login
- Method: POST
- Body:

```js
{
  "password": "Password1",
  "email": 'doe@example.com'
}
```

- Responses

Success

```js
{
    "message": 'Login successful',
    "email": 'jon_doe",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
}
```

---

### Create Blogs

- Route: /api/blogs
- Method: POST
- Header
  - Authorization: Bearer {token}
- Body:

```js

    {
    "title": "Things  Fall",
    "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
    "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. ",
    "author": "Emeka Adenua",
    "tags": "published"

}
```

- Responses

Success

```js
{
    "title": "Things  Exist",
    "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
    "body": "Things Fall Apart is the debut novel by Nigeri pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. ",
    "author": "Emeka Adenua",
    "read_count": 0,
    "reading_time": "2 min read",
    "tags": "published",
    "_id": "63685b4c12301b7a3ee99126",
    "createdAt": "2022-11-07T01:11:40.346Z",
    "updatedAt": "2022-11-07T01:11:40.346Z",
    "__v": 0
}
```

---

### Get Blog

- Route: /api/blogs/:id
- Method: GET
- Responses

Success

```js
{
    "_id": "6368117d584051d552d13281",
    "title": "Things Fall Apart",
    "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
    "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the so9th century. ",
    "author": "Chinua Achebe",
    "read_count": 0,
    "reading_time": "1 min read",
    "tags": "draft",
    "createdAt": "2022-11-06T19:56:45.295Z",
    "updatedAt": "2022-11-07T00:31:42.351Z",
    "__v": 0
}
```

---

---

### Get Blogs

- Route: /api/blogs
- Method: GET
- Query params:

  - page (default: 1) which return 20 pages per page
  - sortBy (timestamp,read-time,read-count) in dec order
  - tags (draft, published) i.e filter by either draft or published and search by tags
  - author i.e search by author
  - title i.e search by title

- Responses

Success

```js
{
    "data": [
        {
            "_id": "63680d906a33d263e223fb96",
            "title": "Things  Without",
            "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
            "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. ",
            "author": "Emeka Adenua",
            "read_count": 1,
            "reading_time": "3 min read",
            "tags": "published",
            "createdAt": "2022-11-06T19:40:00.447Z",
            "updatedAt": "2022-11-07T01:14:33.441Z",
            "__v": 0,
            "id": "63680d906a33d263e223fb96"
        },
        {
            "_id": "63680da76a33d263e223fb98",
            "title": "Things  Fall Apart",
            "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
            "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. ",
            "author": "Emeka Adenua",
            "read_count": 0,
            "reading_time": "3 min read",
            "tags": "published",
            "createdAt": "2022-11-06T19:40:23.914Z",
            "updatedAt": "2022-11-06T19:40:23.914Z",
            "__v": 0,
            "id": "63680da76a33d263e223fb98"
        },
        {
            "_id": "6368117d584051d552d13281",
            "title": "Things Fall Apart",
            "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
            "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the so9th century. ",
            "author": "Chinua Achebe",
            "read_count": 0,
            "reading_time": "1 min read",
            "tags": "draft",
            "createdAt": "2022-11-06T19:56:45.295Z",
            "updatedAt": "2022-11-07T00:31:42.351Z",
            "__v": 0,
            "id": "6368117d584051d552d13281"
        },
        {
            "_id": "63685b4c12301b7a3ee99126",
            "title": "Things  Exist",
            "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
            "body": "Things Fall Apart is the debut novel by Nigeri pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century. ",
            "author": "Emeka Adenua",
            "read_count": 0,
            "reading_time": "2 min read",
            "tags": "published",
            "createdAt": "2022-11-07T01:11:40.346Z",
            "updatedAt": "2022-11-07T01:11:40.346Z",
            "__v": 0,
            "id": "63685b4c12301b7a3ee99126"
        }
    ]
}
```

---

### Update Blog

- Route: /api/blogs/:id
- Method: PATCH
- Responses

Success

```js
{
    "_id": "6368117d584051d552d13281",
    "title": "Things Fall Apart",
    "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
    "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the so9th century. ",
    "author": "Chinua Achebe",
    "read_count": 0,
    "reading_time": "1 min read",
    "tags": "draft",
    "createdAt": "2022-11-06T19:56:45.295Z",
    "updatedAt": "2022-11-07T00:31:42.351Z",
    "__v": 0
}
```

---

### Delete Blog

- Route: /api/blogs/:id
- Method: DELETE
- Responses

Success

```js
{
    "_id": "6368117d584051d552d13281",
    "title": "Things Fall Apart",
    "description": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
    "body": "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the so9th century. ",
    "author": "Chinua Achebe",
    "read_count": 0,
    "reading_time": "1 min read",
    "tags": "draft",
    "createdAt": "2022-11-06T19:56:45.295Z",
    "updatedAt": "2022-11-07T00:31:42.351Z",
    "__v": 0
}
```

---
