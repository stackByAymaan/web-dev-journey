const express = require("express");
const app = express();
const port = 8080;



app.set("views engine", "ejs");
app.set("views", Path2D.json(__dirname, "public"));

app.set(express.static(Path2D.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("serving working well!");
})

app.listen(port, () => {
    console.log("listening to port : 8080");
});