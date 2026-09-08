// =====================================
//^ Express Basics
// =====================================

const express = require("express");
const app = express();

console.dir(app); // Displays all built-in methods of the Express app.

const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


// =====================================
// Routing (GET Requests)
// =====================================

// Home Route
app.get("/home", (req, res) => {
    res.send("Home page !!");
});

// Shop Route
app.get("/shop", (req, res) => {
    res.send("You can shop here !!");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("You can contact us here");
});


//Path parameters
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let {username, id} = req.params;
    res.send("Hello i am root");
});


//Query String
app.get("/search", (req, res) => {
    console.log(req.query);

    let { q } = req.query;

    if (!q) {
        res.send("<h1>Nothing Searched</h1>");
    } else {
        res.send(`Search Results for: ${q}`);
    }
});




