// * Operators

// Arithmetic operators
let a = 6;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary operators
let c = 10;
let d = 5;
console.log(c++); //10
console.log(++c); //11

// assignment operators
let e = 10;
let f = 20;
f = e;
console.log(e)

//  Comparison operators
let age = 18;
console.log( age > 18);
console.log( age >= 18);
console.log( age <= 18);
console.log( age == 18);
console.log( age != 18);
console.log( age === 18);

console.log( 0 === false);

// Comparision for non - numbers
console.log("a" > "A");  // coz of unicode
console.log("A" > "B");
console.log("A" > "!");

// ^ small chracter unicode > capital chracter - a < b < c < d < e.....< A < B < C < D < E.....

// Logical Operators - logical and = &&, logical or = || logical not = !
let marks = 12;

// if (marks >= 33 && marks >= 80 ) {
//     console.log("pass");
//     console.log("A+");
// }

if (marks >= 33 || marks >= 80 ) {
    console.log("pass");
    console.log("A+");
}

// if (!(marks >= 33 )) {
//     console.log("pass");
// }

// ! This is very important
// ? Need to check this logic
// ^ Already tested with sample data
// * Highlight this section
// & Function starts here
// ~ Arrow function usage
// TODO Fix error handling later