const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const { v4: uuidv4 } = require("uuid");


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username :"apnacollege",
        content : "I love coding"
    },
    {
        id: uuidv4(),
        username :"Aymaan",
        content : "Aymaan is trash , he got reject in his 1st internship"
    },
    {
        id: uuidv4(),
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
    let newId = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post= posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs" , {post});
    // console.log(id);
    // res.send("request working");
});

app.patch("/posts/:id" , (req, res) => {
    let { id } = req.params;
    console.log(id);
    res.send("patch request working");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});