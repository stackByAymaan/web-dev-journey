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