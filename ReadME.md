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

| field         | data_type | constraints                            |
| ------------- | --------- | -------------------------------------- |
| id            | string    | required                               |
| created_at    | date      | required                               |
| State         | number    | required, enum: ['draft', 'published'] |
| Tags          | number    | required                               |
| Author        | string    | required                               |
| iRead_Count   | Number    | required                               |
| item.price    | number    | required                               |
| item.size     | string    | required, enum: ['m', 's', 'l']        |
| item.quantity | number    | required, enum: ['m', 's', 'l']        |
