//^ Node with Sql

const { faker } = require('@faker-js/faker');   // Import faker
const mysql = require("mysql2");   // Import MySQL2
const express = require("express");
const app = express();
const port = 8080;


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

            console.log(result[0]["count(*)"]); //accessing the actual count value from the result returned by MySQL
            return res.send("Sucess");
        });
    } catch (err) {
        console.log(err);
        return res.send("Some error in Database");
    }
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});