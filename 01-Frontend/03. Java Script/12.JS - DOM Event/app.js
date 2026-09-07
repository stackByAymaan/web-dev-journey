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
