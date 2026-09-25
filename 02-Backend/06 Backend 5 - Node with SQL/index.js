//^ Node with Sql

const { faker } = require('@faker-js/faker');   // Import faker
const mysql = require("mysql2");   // Import MySQL2
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Aymaanhumdaan@123"

});

//* Inserting New Data
// let q ="INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";
// let user1 = ["123", "123_newuser", "abc@gmail.com", "abc"];

//* Inserting multiple data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["101", "Aymaan", "aymaan@gmail.com", "aymaan123"],
//     ["102", "Rahul", "rahul@gmail.com", "rahul123"],
//     ["103", "Anish", "anish@gmail.com", "anish123"],
//     ["104", "Imroj", "imroj@gmail.com", "imroj123"],
//     ["105", "Arjun", "arjun@gmail.com", "arjun123"],
//     ["106", "Rohan", "rohan@gmail.com", "rohan123"]
// ];


//* Inerting Data in Bulk

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };

// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }




app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;

            let count = result[0]["count(*)"]; //accessing the actual count value from the result returned by MySQL
            return res.render("home.ejs" , { count });
        });
    } catch (err) {
        console.log(err);
        return res.send("Some error in Database");
    }
});




//* Show
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            return res.render("users.ejs" , {users});
        });

    } catch (err) {
        console.log(err);
        return res.send("Some error in DB");
    }
});



//* Edit
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            return res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        return res.send("Some error in DB");
    }
});

//* Update (DB) route
app.patch("/user/:id", (req, res) => {
    res.send("Updated");
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});