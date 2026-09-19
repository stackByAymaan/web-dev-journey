const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("serving working well!");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});