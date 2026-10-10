const mongoose = require("mongoose");

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Define schema with validation rules
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
    minlength: [2, "Title must contain at least 2 characters"],
  },
  author: {
    type: String,
    required: true, // Author is mandatory
  },
  price: {
    type: Number,
    required: true, // Price is mandatory
    min: [1, "Price must be at least 1"], // Minimum price is 1
  },
});

// Create Model
const Book = mongoose.model("Book", bookSchema);

// Create a new book document
let book1 = new Book({
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 299,
});

// Save the document and handle the result
book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Handles validation or database errors
  });