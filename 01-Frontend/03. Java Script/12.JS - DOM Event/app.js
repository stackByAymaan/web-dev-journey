
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



