const express = require("express");
const app = express();
const port = 8080;



app.set("views engine", "ejs");
app.set("views", Path2D.json(__dirname, "public"));



app.listen(port, () => {
    console.log("listening to port : 8080");
});