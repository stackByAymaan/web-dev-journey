// ^ Array

// let student1 = "aman";
// let student2 = "Shrdha";
// let student3 = "Rajat";

let student = ["aman", "shradha", "rajat"];
let num = [2,4,6,8];
console.log(student);
console.log(num);

let information = [99,88,66,44,33,"Aman","Aymaaan"];
console.log(information);

let newArr = []; // empty array
console.log(newArr);

// Arrays are Mutable
let fruits = ["mango", "apple", "litchi"];
fruits[0] ="Banana";
fruits[11] ="pineapple";
console.log(fruits);

// Array Methods
let cars = ["toyota", "bmw", "maruti", "audi"];
cars.push("RR");
console.log(cars);
cars.unshift("Merserati");
console.log(cars);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);

let blocked = cars.shift();  //! blocked = cars.shift(); → stores the first removed element from the array into the variable blocked.
console.log(cars);

let month = ["january", "july", "march", "august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

console.log(month.indexOf("june"));

console.log(month.includes("march"));

// concatenation & Reverse
console.log(month.concat(cars));
console.log(month.reverse());

// slice
console.log(month.slice(2));
console.log(month.slice(-2));
console.log(month.slice(4));

// splice   //remove/add/replace
let colors = ["red", "yelow", "pink", "white", "orange", "Blue"];
console.log(colors);
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,2));
console.log(colors);
console.log(colors.push("Gray"));
console.log(colors.push("cyan"));
console.log(colors);
console.log(colors.splice(1,2));
console.log(colors);
colors.splice(0, 0, "pink", "red", "Yellow");
console.log(colors);

// sort
let colors1 = ["red", "yelow", "pink", "white", "orange", "Blue"];
colors1.sort();
console.log(colors1);

// Array Reference 

// "name" == "name"  // ture
// "name" === "name"  // true

// [1] === [1]    // false
// [1] == [1]    // false

// [] === []  //false 

//!  Equality (==/===) works for primitive values directly, but arrays/objects are only equal if they reference the exact same memory location.


// constant array
const arr = [10, 20, 30];

arr[0] = 99;      // allowed, element change
arr.push(40);     // allowed, add element
// arr = [1, 2, 3]; // error, cannot reassign

// Nested Arrays - array of arrays
let nums = [ [2,4], [3,6], [4,8] ];
console.log(nums);
console.log(nums[0][1]);


//? Qs1. Write a JavaScript program to get the first n elements of an array [n can be any positive number]. Example: for array [7, 9, 0, -2] and n = 3 Output: [7, 9, 0]

let arr=[7,9,0,-2]; 
let n = 3;
let ans= arr.slice(0,n); 
console.log(ans);

//? Qs2. Write a JavaScript program to check whether a string is blank or not.
let str = "";
if(str === "") {
    console.log("blank string");
} else {
    console.log("Not a blank string");
}
