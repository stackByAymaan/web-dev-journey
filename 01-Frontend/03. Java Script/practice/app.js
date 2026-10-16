// let prices = [150, 800, 250, 1200, 450];

// function checkPrice(prices) {
//     for (let i=0; i < prices.length; i++) {
//         if (prices[i] > 500) {
//             console.log(`price ${prices[i]} is greater than 500`);
//         } 
//     }
// }

// checkPrice(prices);


// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDice());


// function sum(a, b) {
//     return a + b;
// }

// let result = sum(10, 20);
// console.log(result); 


// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("Aymaan", 20);
// printInfo("Anish", 19);

//scope
// let sum1 = 54;

// function printSum() {
//     console.log(sum1);
// }

// printSum();
// console.log(sum1);



// function outerFunc() {
//     let x = 5;
//     let y = 6;

//     function innerFunc() {
//         console.log(x);
//     }

//     innerFunc();
// }

// outerFunc();




// let greet = "hello";

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet);
//     }

//     innerGreet();
// }

// console.log(greet);
// changeGreet();


// let name = "Aymaan";

// function greet() {
//     let name = "Anish";
//     console.log(name);
// }

// console.log(name);
// greet();
// console.log(name);


// const sumExp = function(a, b) {
//     return a + b;
// };

// console.log(sumExp(2, 3));

// let checkPrice = function(prices) {
//     if (prices > 500) {
//         return `price ${prices} is greater than 500`;
//     } 
// };

// console.log(checkPrice(800));




function multipleGreett(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greett = function() {
    console.log("hiii");
};

multipleGreett(greett, 3);