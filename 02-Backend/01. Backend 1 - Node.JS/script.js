

// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("hello" , i);
// }


// console.log(process);   - it prints process object

// let args = process.argv ;
// for(let i=2; i<args.length; i++) {
//     console.log("hello Welcome to " , args[i]);
// }

// const math = require("./maths");

// console.log(math);

// console.log(math.sum(2, 2));
// console.log(math.mul(2, 3));
// console.log(math.g);
// console.log(math.PI);


//Exporting fruits
// const info = require("./fruits");

// console.log(info);
// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);



// Usintg import
import { add, sub, PI } from "./export.js";

console.log(add(5, 3));
console.log(sub(5, 3));
console.log(PI);
