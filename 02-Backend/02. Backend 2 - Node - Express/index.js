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


// =====================================
//* Routing (post Requests)
// =====================================

// app.post("/home", (req, res) => {
//     res.send("Data received");
// });



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


// Catch-all Route (Express 5)
// Handles any GET request whose route doesn't exist.
app.get("/{*any}", (req, res) => {
    res.send("This path does not exist");
});


// =====================================
// Catch-all Route for All HTTP Methods
// =====================================

// Handles all HTTP methods (GET, POST, PUT, DELETE, etc.)
// Runs only when no matching route exists.

// app.all("/{*any}", (req, res) => {
//     res.send("404 - This path does not exist");
// });


// =====================================
// app.use() Example
// =====================================

// app.use() runs for every incoming request by default.
// 'req' contains request information.
// 'res' is used to send a response back to the client.

app.use((req, res) => {

    // console.log(req);

    console.log("Request received");

    res.send("This is a basic response");

    // Example: Sending an object as a response.
    // Express automatically converts it into JSON.

    // res.send({
    //     name: "Apple",
    //     color: "Red",
    // });

});


