//exporting this into script.js

// module.exports = 123;

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14; 

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,
// };

// module.exports = obj;

//another method

module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14; 

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,
// };


//another method

exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14; 
