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




