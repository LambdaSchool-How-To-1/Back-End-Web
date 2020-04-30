# Back-End-Web
Deployed Link(River): https://how-to-do-backend.herokuapp.com/
Deployed Link(Andrew and used on app): https://how-to-guide-unit4-build.herokuapp.com/

Authentication Endpoints:
Users will need to register and then login to be able to access an option to create their own how to guides.

Users POST /api/auth/users/register
Expected request body:

{
"username": "username",
"password": "password"
} 

Returns:

{
"id": 1,
"username": "username"

}

Users POST /api/auth/users/login
Expected login body:

{
"username": "username",
"password": "username"
} 

Returns:

{
"message": "Welcome username",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkJpbGx5IiwiaWF0IjoxNTg4MDI2OTg1LCJleHAiOjE1ODgxMTMzODV9.CCW4iB3uIdoYIFcdfb9962TO8YlsrCAv8GhFJcn1hys"
}

GET api/users/
Gets a list of users. 

GET /api/users/id
Gets the user information by id

DELETE /api/users/:id
Deletes the user with that id

Guides endpoints:

GET api/guides/
Gets the all the guides

GET /api/guides/:id
Gets the guide for that id

POST /api/guides
Lets you create a new guide

{
guides_id: 1,
title: "How to Write a Check once again !",
description: 'Step 1: Put the current date in the top right.  Step 2: Write the name of the individual or company you are paying.  Step 3: Write the dollars amount in the box.  Step 4: Write the dollars amount in words along the line to the left of the amount box.  Step 5: Last step, and most important.  You need to write your signature on the the check.  If you do not, the check will not be valid.',
image: 'https://cdn.pixabay.com/photo/2016/04/02/14/01/money-1302835_960_720.jpg',
category: "Home"
}
PUT /api/guides/:id
Lets you update a listing with that id

{
guides_id: 1,
title: "How to Write a Check once again!",
description: 'Step 1: Put the current date in the top right.  Step 2: Write the name of the individual or company you are paying.  Step 3: Write the dollars amount in the box.  Step 4: Write the dollars amount in words along the line to the left of the amount box.  Step 5: Last step, and most important.  You need to write your signature on the the check.  If you do not, the check will not be valid.',
image: 'https://cdn.pixabay.com/photo/2016/04/02/14/01/money-1302835_960_720.jpg',
category: "Home"
}

DELETE api/guides/:id
Lets you delete a listing with that id

☝️ Proposal
Problem: People need help figuring out how to learn unfamiliar tasks Solution: Have a central location for people to store and share information Mission Statement: Learn how to do everything in one place

💡 Features
Backend Implementation Sign up page Sign in page Search by category (set list of categories) Home page with add button for contributors User detail page with saved guides Contributor page Guide Creation page Upvote/like

🛠 Frameworks - Libraries
Swiftlint will be used for iOS to ensure code quality Firebase may be used for storing video and/or image data

🔑 Prototype Key Feature(s)
Feature freeze EOD Wednesday Thursday polish Friday bugs?

🎨 Color Scheme
Fill: #1A3263 Accent: #F5564E Accent2: #FAB95B Background: #E8E2DB