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