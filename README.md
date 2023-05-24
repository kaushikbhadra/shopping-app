## Shopping Application
---

Shopping Application API built using `Node.js`, `Express.js`, and `MongoDB` can be designed to provide various e-commerce functionalities. Here's a brief description of such an API with JWT support for authentication and Gmail support for password management. :point_right:

1. __Node.js and Express.js__: These technologies are used to create the backend server for handling `API` requests and responses. Node.js is a JavaScript runtime, and Express.js is a popular web application framework for Node.js, making it easy to build robust `APIs`.:smiley:

2. **MongoDB**: `MongoDB` is a `NoSQL` database that can be used to store and retrieve data for the shopping API. It offers flexibility and scalability for handling various product details, user information, orders, and more.:smiley:

3. __JWT (JSON Web Tokens)__: `JWT` can be utilized for authentication and authorization purposes. When a user successfully logs in, they receive a `JWT` containing encrypted information, such as the user's ID and role. This token is sent with subsequent `API` requests to authenticate and authorize the user.:smiley:

4. __Gmail SMTP for Password Management__: To support features like password reset or change, the API can integrate with Gmail's Simple Mail Transfer Protocol `(SMTP)` server. When a user requests a password reset, an email with a unique token or link is sent to their registered email address, allowing them to securely reset their password.:smiley:

---
## Dependencies Uses

````javascript
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "env-cmd": "^10.1.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.3.4",
    "nodemailer": "^6.7.7",
    "nodemon": "^2.0.16",
    "validator": "^13.7.0"
````

- Node Vesion: `node v16.16.0`


## Shopping Application API Guides

**User Related APIs**:
- POST Request
````javascript 
http://localhost:3001/api/v1/register
http://localhost:3001/api/v1/password/forgot
http://localhost:3001/api/v1/password/forgot
````
- PUT Request
````javascript 
http://localhost:3001/api/v1/password/reset/:token
http://localhost:3001/api/v1/password/update
http://localhost:3001/api/v1/me/update
````

  - GET Request
````javascript 
http://localhost:3001/api/v1/me
http://localhost:3001/api/v1/logout
````

Similar Type of APIs are present in this project.


