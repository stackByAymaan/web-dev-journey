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
    ["101", "aymaan_dev", "aymaan@gmail.com", "pass101"],
    ["102", "anish_codes", "anish@gmail.com", "pass102"],
    ["103", "imroj_web", "imroj@gmail.com", "pass103"],
    ["104", "rahul_dev", "rahul@gmail.com", "pass104"],
    ["105", "sneha_js", "sneha@gmail.com", "pass105"],
];


try {
    connection.query(q, user, (err, result) => {
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





