# Back-End-Web

Authentication Endpoints:

Users will need to register and then login to be able to access an option to create their own how to guides.

(users) POST /api/auth/users/register

Expected request body: 

```
{
"username": "test",
"password": "test"
} 

```

Returns: 

```
{
"id": 2,
"username": "test"

}

```


(users) POST /api/auth/users/login

Expected login body:

```
{
"username": "test",
"password": "test"
} 

```

Returns: 

```
{
"message": "Welcome test",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkJpbGx5IiwiaWF0IjoxNTg4MDI2OTg1LCJleHAiOjE1ODgxMTMzODV9.CCW4iB3uIdoYIFcdfb9962TO8YlsrCAv8GhFJcn1hys"
}

```

GET api/users/

Gets a list of users. You probably wont need this but this is the baseURL for the next few endpoints. 


GET /api/users/id
Gets the user information by id


DELETE /api/users/:id
Deletes the user with that id





(guides) endpoints:

GET api/guides/
Gets the all the guides


GET /api/guides/:id
Gets the guide for that id

POST /api/guides
Lets you create a new guide

```
{
guides_id: 1,
title: "How to Write a Check!",
description: 'Step 1: Put the current date in the top right.  Step 2: Write the name of the individual or company you are paying.  Step 3: Write the dollars amount in the box.  Step 4: Write the dollars amount in words along the line to the left of the amount box.  Step 5: Last step, and most important.  You need to write your signature on the the check.  If you do not, the check will not be valid.',
image: 'https://cdn.pixabay.com/photo/2016/04/02/14/01/money-1302835_960_720.jpg'
}
```

PUT /api/guides/:id
Lets you update a listing with that id

```
{
guides_id: 1,
title: "How to Write a Check!",
description: 'Step 1: Put the current date in the top right.  Step 2: Write the name of the individual or company you are paying.  Step 3: Write the dollars amount in the box.  Step 4: Write the dollars amount in words along the line to the left of the amount box.  Step 5: Last step, and most important.  You need to write your signature on the the check.  If you do not, the check will not be valid.',
image: 'https://cdn.pixabay.com/photo/2016/04/02/14/01/money-1302835_960_720.jpg'
}
```

DELETE api/listings/:id
Lets you delete a listing with that id