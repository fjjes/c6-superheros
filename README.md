# Introduction

This project is a MERN (MongoDB, ExpressJS, ReactJS, Node.js) application made
of two processes:
   1. an Express "server" providing API support for retrieving and submitting
   data from the backend
   1. a React "client" providing a web-based UI

This project also leverages a cloud-based instance of MongoDB for storing
and retrieving data.

# Working with this Codebase
## Starting the Express server

In a command shell (CMD, PowerShell, Terminal, etc.) run the commands:
1. `cd server`
1. `npm install`
1. `npm run start`

The server is now running on port *3000*.

## Starting the React client

In a command shell run the commands:
1. `cd client`
1. `npm install`
1. `npm run start`

Your browser should open to `http://localhost:4444`.  The React development
system is running on port *4444*.

# Using your own MongoDB instance

You can run MongoDB locally on your machine or you can sign up for a no-cost(!)
account at `https://www.mongodb.com/`.

Once you have your MongoDB instance set up, simply edit the login information
that is found in `server/models/db.js` under the comment `// SETUP MONGO/MONGOOSE`.

You might add the initial data used in the public MongoDB instance:

```js
[
  {name: "Batwoman", nickname: null, alterego: "Kate Kane", sidekick: "Batgirl"},
  {name: "Bat-Girl", nickname: null, alterego: "Betty Kane", sidekick: null},
  {name: "Batman", nickname: "The Batman", alterego: "Bruce Wayne", sidekick: "Robin"},
  {name: "Robin", nickname: "The Boy Wonder", alterego: "Dick Grayson", sidekick: null},
]
```



