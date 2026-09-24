//^ Node with Sql

const { faker } = require('@faker-js/faker');   // Import faker
const mysql = require("mysql2");   // Import MySQL2

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Aymaanhumdaan@123"
});

try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) throw err;
        console.log(result)
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





