--^ SQL Basics

--^ Database

DROP DATABASE IF EXISTS sql_practice;
CREATE DATABASE sql_practice;
USE sql_practice;

SHOW DATABASES;


--^ First Table

CREATE TABLE student (
    rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;



--^ Data Types

-- CHAR / VARCHAR / BLOB / INT / TINYINT / BIGINT
-- BIT / FLOAT / DOUBLE / BOOLEAN / DATE / YEAR

CREATE TABLE datatype_demo (
    fixed_name CHAR(10),
    name VARCHAR(30),
    data BLOB,
    age INT,
    small_num TINYINT,
    large_num BIGINT,
    bits BIT(2),
    price FLOAT,
    salary DOUBLE,
    active BOOLEAN,
    dob DATE,
    birth_year YEAR
);


--^ Constraints + First Main Table

CREATE TABLE user (
    id INT PRIMARY KEY,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13)
);

SHOW TABLES;


--^ INSERT

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "Aymaan", "Ayman@gmail.com", 909, 0),
(2, 18, "Rahul", "rahul@gmail.com", 1550, 20),
(3, 21, "Priya", "priya@gmail.com", 230, 45),
(4, 16, "Arjun", "arjun@gmail.com", 87, 12);


--^ SELECT

SELECT * FROM user;

SELECT name, followers
FROM user;



--^ WHERE Clause

SELECT * FROM user
WHERE followers >= 200;                    -- WHERE Clause

SELECT * FROM user
WHERE followers >= 200
AND age > 13;                               -- AND

SELECT * FROM user
WHERE age < 16
OR followers > 1000;                        -- OR

SELECT * FROM user
WHERE age BETWEEN 13 AND 20;                -- BETWEEN

SELECT name, followers, email
FROM user
WHERE email IN (
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"
);                                           -- IN

SELECT * FROM user
WHERE age NOT IN (14, 18);