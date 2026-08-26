//^ Functions

function hello() {
    console.log("hello");
}

hello();  //using function
hello();
hello();
hello();

console.log(" ");

// function with loops
function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

print1to5();

console.log(" ");


//function with contidional statement 
function isAdultCheck() {
    let age = 3;
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}

isAdultCheck();

console.log(" ");


//? Q. create a function to roll a dice & always display the value of the dice(1 to 6).

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();

console.log(" ");


//Functions with arguments  
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("Aymaan", 23);
printInfo("anish", 13);
printInfo("imroj",);

console.log(" ");

function sumPrint(a, b) {
    console.log(a + b);
}

sumPrint(1, 2);
sumPrint(3, 4);
sumPrint(456856094604, 897979789728);

console.log(" ");

//? Create a function that gives us the average of 3 numbers

function calAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calAvg(1, 2, 3);
calAvg(5, 5, 5);
calAvg(10, 20, 30);

console.log(" ");

//? Create a function that print the multiplication of table of a number

function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}

printTable(73);

console.log(" ");

// return keyword
function sumReturn(c, d) {
    return c + d;
}

console.log(sumReturn(sumReturn(1, 2), 3));

console.log(" ");

function isAdultReturn(age) {
    if (age >= 18) {
        return "adult";
    } else {
        return "not Adult";
    }
}

console.log(isAdultReturn(19));

console.log(" ");

//? Create a function that return the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(10000));

console.log(" ");

//? Create a function that returns the concatenation of all string in an array.
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = " ";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concat(str));

console.log(" ");

// scope
let sum1 = 54; //Global Scope
function calSum(a, b) {
    let sum1 = a + b; //Function Scope
    console.log(sum1);
}
calSum(1, 2);

console.log(sum1); 

console.log(" ");

function outerFunc() {
    let x = 5;
    let y = 6;

    function innerFunc() {
        console.log(x);
    }

    innerFunc();
}
outerFunc();

console.log(" ");

//? What will be the output ?
let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }

    innerGreet();
}

console.log(greet);
changeGreet();

console.log(" ");

// Function Expressions
const sumExp = function(a, b) {
    return a + b;
};

console.log(sumExp(2, 3));

console.log(" ");

let helloExp = function() {
    console.log("hello");
};

helloExp();

// HIGH ORDER FUNCTION
function multipleGreett(func, count) {
    for(let i = 1; i <= count; i++) {
        func();
    }
}
let greett = function() {
    console.log("hiii");
}
// multipleGreett(greett, 2); 
multipleGreett(function(){console.log("Namaste")} , 20);

console.log(" ");

//Higher Order Function (Return a function) -A function returns another function.

function outer() {
    function inner() {
        console.log("Hello");
    }

    return inner;
}

let result = outer();

result();

