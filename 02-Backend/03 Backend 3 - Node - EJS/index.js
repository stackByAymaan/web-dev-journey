//^EJS

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//Serving Static Files
// app.use(express.static("public"));  // Gives browser access to public files
app.use(express.static (path.join(__dirname,"public")));  // Sets public folder path

// app.use(express.static(path.join(__dirname, "public/css")));  // Serves files from the public folder

app.set("view engine", "ejs"); //It tells Express to use EJS as the default    template engine for rendering dynamic HTML pages.
app.set("views", path.join(__dirname , "views"));

app.get("/", (req, res) => {
    // res.send("this is root");
    res.render("home.ejs");
});

//insta - ejs
app.get("/ig/:username", (req , res)  => {
    const followers = ["pepper", "steve" , "Aymaan"];
    let { username } = req.params;
    console.log(username);
    res.render("insta.ejs",{username , followers});
});


// Insta-data   url-http://localhost:8080/insta/cats or dogs
app.get("/insta/:username1", (req, res) => {
    let { username1 } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username1];

    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});



// Roll Dice
app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;

    res.render("rolldice.ejs", { diceVal });
});


app.listen(port, () => {
     console.log(`istening on port ${port}`);
});