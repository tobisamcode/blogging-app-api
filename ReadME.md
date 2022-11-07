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
| username   | string    | required    |
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

```
{
  "first_name": "jon",
  "last_name": "doe",
  "email": "doe@example.com",
  "password": "Password1"
}
```

- Responses

Success

```
{
    message: 'Sign up was successful',
    user: {
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

```
{
  "password": "Password1",
  "username": 'jon_doe",
}
```

- Responses

Success

```
{
    message: 'Login successful',
    email: 'jon_doe",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
}
```
