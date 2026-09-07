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