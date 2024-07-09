<div align='center'>
  
# Social Network API

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
  [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
  [![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white)](https://insomnia.rest/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?logo=nodemon&logoColor=%BBDEAD)](https://www.npmjs.com/package/nodemon)

  
</div>

## Table of Contents

- [Description](#Description)
- [Installation](#installation)
- [Video Demo](#video-demo)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

This application was built in mind for social media startups that will use a NoSQL database structure where users can share their thoughts, react to friends' thoughts, create a friend list, and add reactions (replies) to thoughts. This application uses MongoDB for handling large amounts of unstructured data, Express.js for routing and the Mongoose ODM for database operations. The web applications routing and CRUD are tested using Insomnia (but can use postman if you prefer).

## Installation
- You will need Insomnia or Postman to check routes.
---
To use: Clone or fork the repo.

In terminal: ```npm i```

To seed: ```npm run seed```

To run: ```npm run dev```


## Video Demo

- [CLICK HERE to view the USERS and FRIENDS demo!](https://drive.google.com/file/d/1jpLFoCs0-6Clv5CaI66PgrU4Qh8UmMtq/view?usp=sharing)
- [CLICK HERE to view the THOUGHTS and REACTIONS demo!](https://drive.google.com/file/d/1E3FP9mKNDbnVkxJcRpxslt3aYYU74Nvu/view?usp=sharing)

## Usage

![GET user and associated thoughts](./assets/Screenshot%202024-07-09%20130241.png)

DELETE user also deletes associated thoughts:
![DELETE user also deletes associated thoughts](./assets/Screenshot%202024-07-09%20130345.png)

## Credits
- Lots of help from Week 18 mini app (activity 28)
- `is email` validator: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

Helped with seeding data set up:
- https://dev.to/ishakmohmed/the-simplest-i-genuinely-promise-way-to-seedpopulate-fake-data-in-mongodb-using-node-21cj
- https://medium.com/@pkosiec/seeding-mongodb-database-the-right-way-32a8a0e75490
- ChatGPT

## License

Covered by MIT License
