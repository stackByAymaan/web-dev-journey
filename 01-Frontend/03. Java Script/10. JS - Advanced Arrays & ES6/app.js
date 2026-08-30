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