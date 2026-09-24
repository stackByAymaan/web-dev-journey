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
let q ="INSERT INTO user (id, username, email, password) VALUES ( ?, ?, ?, ?)";
let user = ["123", "123_newuser", "abc@gmail.com", "abc"];


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





