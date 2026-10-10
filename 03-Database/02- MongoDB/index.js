//^ MongoDB

// getting-started.js
const mongoose = require('mongoose');
// Import mongoose library

main()
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => console.log(err));
// Call the async function 'main' and catch any errors

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // Connect to local MongoDB database named "test"

  // If your database has authentication, use:
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}

//* Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//* Model
const User = mongoose.model('User', userSchema);


//* Insert
// const user1 = new User({
//   name: "Adam",
//   email: "Adam@gmail.com",
//   age: 40,
// });

// user1
//   .save()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });


//* Insert Multiple

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 35 },
//   { name: "Steve", email: "steve@gmail.com", age: 39 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 38 },
//   { name: "Thor", email: "thor@gmail.com", age: 1500 },
//   { name: "Natasha", email: "natasha@gmail.com", age: 32 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//*Find
User.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



