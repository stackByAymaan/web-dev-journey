const express = require("express");
const app = express();
const mongoose = require("mongoose");



app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(8080, () => {
    console.log("Server is listning to port 8080")
});