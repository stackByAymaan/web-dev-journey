const express = require("express");
const app = express();
const port = 8080;

// Parses HTML form data into req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    // Extract user and password from the URL query parameters
    let { user, password } = req.query;

    res.send(`Standard GET response. Welcome ${user}!`);
});


app.post("/register",(req , res) => {
    console.log(req.body);   // View submitted POST data but currenty terminal cant read this
    res.send("standard Post response");
});

app.listen(port , () => {
    console.log(`Listening tom port ${port}`);
});