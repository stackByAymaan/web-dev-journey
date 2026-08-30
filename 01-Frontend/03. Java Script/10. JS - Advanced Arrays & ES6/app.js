//~ Advance arrys

//^ forEach function 

let arr = [ 1, 2, , 4, 5];

let print = function(el) {
    console.log(el)
};

arr.forEach(print);


console.log(" ");

//Another method
arr.forEach(function (el){
    console.log(el);
});


console.log(" ");

// using arrow function 
arr.forEach( (el) => {
    console.log(el);
});


console.log(" ");

//forEach with objects
let arr1 = [
    {
        name: "aman",
        marks: 551
    },

    {
        name: "aymaan",
        marks: 55
    },

    {   name: "abhijeet",
        marks: 70.5
    },
];
arr1.forEach( (student) => {
    console.log(student)
    console.log(student.name , student.marks)
});


console.log(" ");




//^ Map function 
let num = [ 1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);

console.log(" ")

let students = [
    {
        name: "aman",
        marks: 551
    },

    {
        name: "aymaan",
        marks: 55
    },

    {   name: "abhijeet",
        marks: 70.5
    },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

console.log(" ");



//^ Filter Function
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ans = nums.filter((el) => {
    return el % 2 == 0; //even --> true, odd --> false
});

console.log(ans);


console.log(" ");



//^Every function 
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let no = num1.every((el) => {
    return el % 2 == 0; 
});

console.log(no);


console.log(" ");


//^ Some Function 
let num2 = [1, 3, 5, 8];

let ans2 = nums.some((el) => {
    return el % 2 == 0;
});

console.log(ans2); // true

console.log(" ");


let num3 = [1, 3, 5];

let ans3 = nums.some((el) => {
    return el % 2 == 0;
});

console.log(ans3); // false

console.log(" ");



//^ Reduce Function 
let num4 = [1 , 2 , 3, ,4];
// let finalVal = num.reduce((res, el ) =>  res + el );
let finalVal = num.reduce((res, el ) => {
    console.log(res);
    return res + el;
});

console.log(finalVal);


console.log(" ");


//? Find maximum in an array

let ar = [1, 4 , 5, 6,  ,78 , 7, 5,];
 //using loop
// let max = -1;
// for(let i = 0; i<ar.length; i++) {
//     if(max < ar[i]) {
//         max = ar[i];
//     }
// }
// console.log(max);

// using reduce function
let max = ar.reduce((max, el) => {
      if (max < el) {
        return el;
      } else {
        return max;
      }
});

console.log(max);

console.log(" ");


//& forEach → do something
//& map → create a new array
//& filter → keep matching elements
//& every → all elements satisfy the condition?
//& some → at least one element satisfies the condition?
//& reduce → combine all elements into one final value




//^ Default parameter

function sum( a, b = 5) {
    return a + b;
}

console.log(sum(2));
console.log(sum(2,5));


console.log(" ");

//^ Spread
let arrayy = [ 2, 3, 4, 5, 6, 7, 8, 8];
console.log(...arrayy);


let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 2, ];
let minVal = Math.min(...array);
console.log(minVal);


console.log(" ");

// Spread (Array literals)
let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 2, ];
let newArr = [...number];
console.log(newArr);
console.log(newArr.push(1000));


console.log( " ");

let char = [..."hello"];
console.log(char);

console.log( " ");

let odd = [ 1, 3, 5, 7];
let even = [ 2, 4, 6, 8];

let numberr = [...odd , ...even];
console.log(numberr);



console.log( " ");


// Spread (object literals)

let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, ID : 123}
console.log(dataCopy);

let ary =[ 1, 2, 3, 4, 5];
let obj = {...ary};
console.log(obj);


console.log(" ");