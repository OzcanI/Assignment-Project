
# Node JS CRUD Operations

This project contains CRUD operations with express and MongoDB

## Live Demo Api

[Demo](https://assignment-projectio.herokuapp.com/)

## Postman Collection To Test Features

[Postman Collection](https://www.postman.com/collections/0e51e5d4d2d67d3df38c)

## How to Run The Project 
```bash
Replace MongoURL with your own MongoDB connection string

Install Node modules by running npm install

npm run
```

## Usage 

```bash
//CREATE USER
[POST] /users/create_users
Request Body
{
    firstName : String,
    lastName : String,
    birthday : Date,
    balance : Number,
    email: email,
}

//READ ALL USERS
[GET] /users/get_all_users/<page>/<limit>

//READ USER BY ID
[GET] /users/get_all_users/<user_id>

//UPDATE USER By ID
[PUT] /users/update_user/<user_id>
Request Body
{
    firstName : String,
    lastName : String,
    birthday : Date,
    balance : Number,
    email: email,
}

//DELETE USER By ID
[DELETE] /users/delete_user/<user_id>
```
