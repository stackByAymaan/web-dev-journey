
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