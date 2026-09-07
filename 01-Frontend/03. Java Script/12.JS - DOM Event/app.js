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