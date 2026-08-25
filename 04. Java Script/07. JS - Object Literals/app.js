//^ Object literals

const student = {
    name: "Aymaan",
    age: 23,
    marks: 99
};
console.log(student);

console.log(" ");

// comparision with array
let student2 = ["Aymaan", 23, 99];
console.log(student2);

console.log(" ");

// we can store array in object and key
const item = {
    price: 100.00,
    discount: 70,
    colors: ["red", "pink"]
}
console.log(item);

console.log(" ");

// Threads / Twitter post - create an object for the properties of twitter post 
const post = {
    username: " Aymaan",
    content: "this is my #FirstPost",
    likes: 150,
    repost: 5,
    tags: ["@apnacollege", "@delta"]
};
console.log(post);

console.log(" ");


// Add/update value 
const student3 = {
    name: "Aymaan",
    age: 23,
    marks: 34.5,
    city: "Delhi"
};
console.log(student3);
student3.city= "mumbai";
student3.gender = "Female";
console.log(student3);

console.log(" ");

// Nested of object
const classInfo = {
    aymaan: {
        grade: "A+",
        city: "pune"
    },
    shradha: {
        grade: "C+",
        city: "Delhi"
    }
};

console.log(classInfo);

console.log(" ");

// Array of objects

const classInfo2 = [
    {
        name: "Aymaan",
        grade: "A+",
        city: "pune"
    },
    {
        name: "Anish",
        grade: "f",
        city: "Ranchi"
    },
    {
        name: "imroj",
        grade: "b+",
        city: "Gurmu"
    },
]

console.log(classInfo2);
console.log(classInfo2[1].name);
console.log(classInfo2[1].grade);
console.log(classInfo2[1].city);
console.log(classInfo2[1].gender = "Male");

console.log(" ");

// Maths Object 
console.log(Math.abs(12));
console.log(Math.abs(-12));
console.log(Math.pow(2 , 4));
console.log(Math.floor(5.6789));
console.log(Math.ceil(78.99999));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);

console.log(" ");

// Random integers
// eg from 1 to 10 - matlab 1 se 10 tak ke arnge mein generate krna cha rhe h 

let step1 = Math.random();
console.log(Math.random());

let step2 = step1 * 10
console.log(step2);

let step3 = Math.floor(step2);
console.log(step3);

console.log(" ");

// Method ChainingMath.floor(Math.random() * 10) + 1;
let random = 
console.log(random);
