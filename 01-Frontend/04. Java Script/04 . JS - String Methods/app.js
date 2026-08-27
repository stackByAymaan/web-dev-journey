// * String methods

// let password = prompt("set ur password: "); //string.trim
// let newPass = password.trim();
// console.log(newPass);

let msg ="Ilovecoding";
msg.indexOf("love");
msg.indexOf("ove");
msg.indexOf("L");
console.log(msg.indexOf("love"));
console.log(msg.indexOf("ove"));
console.log(msg.indexOf("L"));
console.log(msg.replace("love", "like")); //replace  ///i use this for case sensetivity
console.log(msg.repeat(5)); //repeat


let mesage = "   hello  ";
// let newMsg = mesage.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase : ", newMsg);
let newMsg = mesage.trim().toUpperCase(); // method chaining
console.log(newMsg);


// Example: remove all spaces from a string
let str = "Code Aymaan Rocks";
let noSpace = str.replace(/\s/g, "");
console.log(noSpace); // Output: "CodeAymaanRocks"


// slice
let naam = "apnacollege";
console.log(naam.slice(2,5)); // "nac"
console.log(naam.slice(-1)); // 11-1 =10 output=e


