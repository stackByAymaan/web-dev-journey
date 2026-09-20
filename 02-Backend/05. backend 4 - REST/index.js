const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

const { v4: uuidv4 } = require("uuid"); // Generate unique IDs
const methodOverride = require("method-override"); // Enable PATCH/DELETE from HTML forms


// Parse form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

// Override HTTP method using ?_method=PATCH/DELETE
app.use(methodOverride("_method"));


app.set("view engine", "ejs"); // Use EJS as template engine
app.set("views", path.join(__dirname, "views")); // Set views folder

// Serve static files like CSS, JS and images
app.use(express.static(path.join(__dirname, "public")));


// Temporary in-memory posts data
let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Aymaan",
        content: "Aymaan is trash, he got reject in his 1st internship"
    },
    {
        id: uuidv4(),
        username: "modi",
        content: "PM of india"
    }
];


// GET /posts → Show all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


// GET /posts/new → Show create post form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


// POST /posts → Create a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let newId = uuidv4();

    posts.push({ id: newId, username, content });

    // Go back to posts page after creating post
    res.redirect("/posts");
});


// GET /posts/:id → Show one specific post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    // Find post using its unique ID
    let post = posts.find((p) => id === p.id);

    res.render("show.ejs", { post });
});


// PATCH /posts/:id → Update an existing post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    // Find the post and update its content
    let post = posts.find((p) => id === p.id);

    post.content = newContent;

    console.log(post);
    console.log(id);

    res.send("patch request working");
});


// GET /posts/:id/edit → Show edit form
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;

    // Find the post to edit
    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", { post });
});


// Deleting Post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    // let post = posts.find((p) => id === p.id);
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});


// Start server
app.listen(port, () => {
    console.log("listening to port : 8080");
});