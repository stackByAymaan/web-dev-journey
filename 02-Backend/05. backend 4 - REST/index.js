const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        username :"apnacollege",
        content : "I love coding"
    },
    {
        username :"Aymaan",
        content : "Aymaan is trash , he got reject in his 1st internship"
    },
    {
        username :"modi",
        content : "PM of india"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.send("Post request working");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});