//^ DOM EVENT

//onclick && onmouseenter

let btn = document.querySelector(".clkBtn");
console.dir(btn);


// btn.onclick = function () {
//     console.log("buton was clicked");
//     alert("Button was clicked");
// };

// function sayHello() {
//      alert("Hello");
// }

// btn.onclick = sayHello;


//Multiple Click/work on single button 
// let btns = document.querySelectorAll("Button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//      console.log("you entred a button");
//     };
//     console.dir(btn);
// }
// function sayHello() {
//     alert("hellooo");
// }



// Event listner
let btns = document.querySelectorAll(".clkBtn");

for (btn of btns) {
    //  btn.addEventListener("click", sayHello);
    //  btn.addEventListener("click", sayName);
     btn.addEventListener("dblclick", function(){  //double click
        console.log("you double clicked");
     });
}

function sayHello() {
    alert("hellooo");
}

function sayName() {
    console.log("aymaan");
}




//practice
let colorBtn = document.querySelector(".btn");

colorBtn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;


    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


//Event listner for Element
let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("mouse inside div");
});


//This with event listner 
let Thisbtn = document.querySelector(".Thisbtn");
let h1 = document.querySelector("h1")

// Thisbtn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.background = 'blue';
// });


// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.background = 'blue';
// });

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

Thisbtn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);



//Keybord Events
let Keybtn = document.querySelector(".Keybtn");

// click
Keybtn.addEventListener("click", function (event){
    console.log(event);
    console.log("Button Clicked");
});

//double click
Keybtn.addEventListener("dblclick", function (event){
    console.log(event);
    console.log("Button Clicked");
});

//input - key board event
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.code);
    console.log("Key was pressed");
});

inp.addEventListener("keyup", function () {
    console.log("Key was released");
});



// Form Event
let form = document.querySelector("form");

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

// INPUT EVENT
user.addEventListener("input", function () {
    console.log("User is typing...");
    console.log(user.value);
});

// CHANGE EVENT
pass.addEventListener("change", function () {
    console.log("Password field changed");
    console.log(pass.value);
});

// SUBMIT EVENT
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form Submitted");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is ${pass.value}`);
});


//Event bubling
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was cooked");
});


ul.addEventListener("click", function(event) {
    event.stopPropogation();
    console.log("ul was clicked");
});


for (lis of lis) {
    lis.addEventListner("click", function() {
       console.log("list was clicked");
    });
}