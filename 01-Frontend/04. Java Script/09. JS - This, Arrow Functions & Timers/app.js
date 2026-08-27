//^ This Keyword
const student = { 
    name : "Aymaan",
    age : 19,
    eng : 95,
    maths : 93,
    phy : 97,
    getAvg() {
        console.log(this); // prints student object
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

student.getAvg(); // method call

function getAvg() {
    console.log(this); // prints window (or undefined in strict mode)
}

getAvg(); // standalone call

// window.alert("Hello");

console.log(" ");

// Try and Catch

// console.log(a);  ReferenceError (a is not defined)
// console.log("hello");  This line never run 
// console.log("hello 2");  This line never run 

console.log("hello"); 
console.log("hello"); 
try {
    console.log(a);
} 
// catch { 
//     console.log("Caught an error.. a is not defined");
// }

catch(err)  {  // catch in function form
       console.log("Caught an error.. a is not defined");
       console.log(err);
}

console.log("hello 2");
console.log("hello 2");
console.log("hello 2");

//~ Miscellaneous Topics

//Arrow Function
const sum = (a,b) => {console.log(a+b);   
};
console.log(sum(2,3));

console.log(" ");

const cube = (n) => {
    return n*n*n;
}
console.log(cube(3));

console.log(" ");

// implicit return
const mul = (a, b) => {
    console.log(a * b);
};

mul(5, 7); 

//set TimeOut
console.log(" HI There !!!");
setTimeout ( () => {
   console.log("Apna college");
}, 4000);
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

console.log(" ");

//set Interval
let id1 = setInterval(() => {
    console.log("Apna college");
}, 2000);
console.log(id1);

console.log(" ");

let id2 = setInterval(() => {
    console.log("Hello world");
}, 3000);
console.log(id2);

//This with Arrow Function
const student2 = {
   name: "aymaan",
   marks: 95,
   prop: this,
   getName: function() {
      console.log(this);
      return this.name;
   },
   getMarks: function() {
      console.log(this);
      return this.marks;
   }
};

console.log(student2.getName());
console.log(student2.getMarks());



