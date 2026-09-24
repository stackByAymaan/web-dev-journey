//^ Node with Sql

const { faker } = require('@faker-js/faker');   // Import faker
const mysql = require("mysql2");   // Import MySQL2

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Aymaanhumdaan@123"
});

//* Inserting New Data
// let q ="INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";
// let user1 = ["123", "123_newuser", "abc@gmail.com", "abc"];

//Inserting multiple data
let q ="INSERT INTO user (id, username, email, password) VALUES (?)";
let users = [
    ["101", "Aymaan", "aymaan@gmail.com", "aymaan123"],
    ["102", "Rahul", "rahul@gmail.com", "rahul123"],
    ["103", "Anish", "anish@gmail.com", "anish123"],
    ["104", "Imroj", "imroj@gmail.com", "imroj123"],
    ["105", "Arjun", "arjun@gmail.com", "arjun123"],
    ["106", "Rohan", "rohan@gmail.com", "rohan123"]
];


try {
    // connection.query(q, user, (err, result) => {
    connection.query(q, [user], (err, result) => {
        if (err) throw err;
        console.log(result);
        
    });
} catch (err) {
    console.log(err);
}


let getRandomUser = () => {
    return {
        Id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
};

console.log(getRandomUser());





