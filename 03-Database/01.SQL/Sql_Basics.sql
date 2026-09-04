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