// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "creation_2.jpeg";
//     console.log(`value of image ${i} is changed. `);
//     };



// let para = document.getElementsByTagName("p");

// let para2 = document.getElementsByTagName("p")[1].innerText = "abc";


let heading = document.querySelector("h1");
heading.style.backgroundColor = "yellow";


let links = document.querySelectorAll(".box a");

// for (let i = 0; i <links.length; i++) {
//     links[i].style.color  = "red";
// }

for (let link of links) {
    link.style.color = "purple";
}

let box = document.querySelector(".box");
box.classList.add("yellowBg");


//Adding element in DOM

let newP = document.createElement("p");
newP.textContent = "This is a new paragraph.";
document.body.append(newP);