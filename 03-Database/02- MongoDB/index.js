// getting-started.js
const mongoose = require('mongoose');  
// Import mongoose library

main().catch(err => console.log(err));  
// Call the async function 'main' and catch any errors

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');  
  // Connect to local MongoDB database named "test"
  
  // If your database has authentication, use:
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}


// 1. The Mongo Shell

// Run these commands in mongosh:

// show dbs

// use collegeDB

// db

// show collections
// 2. How We Store Data? (BSON)

// MongoDB stores data as BSON documents. We write them using JavaScript-style syntax.

// {
//     name: "Aymaan",
//     age: 20,
//     course: "BCA",
//     isStudent: true
// }
