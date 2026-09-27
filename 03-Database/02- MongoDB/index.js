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


// 3. Document & Collection
// use collegeDB

// db.createCollection("students")

// db.students.find()



// 4. INSERT in DB (insertOne)
// db.students.insertOne({
//     name: "Aymaan",
//     age: 20,
//     course: "BCA",
//     city: "Ranchi"
// })

// 5. INSERT in DB (insertMany)
// db.students.insertMany([
//     {
//         name: "Rahul",
//         age: 21,
//         course: "BCA",
//         city: "Ranchi"
//     },
//     {
//         name: "Aman",
//         age: 20,
//         course: "BBA",
//         city: "Patna"
//     },
//     {
//         name: "Priya",
//         age: 19,
//         course: "BCA",
//         city: "Delhi"
//     }
// ])


// 6. FIND in DB
// // Find all documents
// db.students.find()

// // Find a specific student
// db.students.find({
//     name: "Aymaan"
// })

// // Find students from Ranchi
// db.students.find({
//     city: "Ranchi"
// })

// // Find the first matching document
// db.students.findOne({
//     course: "BCA"
// })



// 7. Query Operators
// // Greater than
// db.students.find({
//     age: { $gt: 19 }
// })

// // Less than
// db.students.find({
//     age: { $lt: 21 }
// })

// // Greater than or equal to
// db.students.find({
//     age: { $gte: 20 }
// })

// // Less than or equal to
// db.students.find({
//     age: { $lte: 20 }
// })

// // Not equal to
// db.students.find({
//     course: { $ne: "BCA" }
// })

// // OR condition
// db.students.find({
//     $or: [
//         { city: "Ranchi" },
//         { age: 21 }
//     ]
// })

// // AND condition
// db.students.find({
//     course: "BCA",
//     age: { $gte: 20 }
// })