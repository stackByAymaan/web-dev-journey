//^ DOM

let smallImage = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].src = "spiderman_img.png";
    console.log(`value of image no.  ${i} is changed `);
    // console.dir(smallImage[i]);
    // console.dir(smallImage[i].src);
}


console.dir(document.querySelector('h1'));
console.dir(document.querySelector("p"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("p"));



console.log(" ");

let para = document.querySelector('p');
console.dir(para);
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.innerContent);


console.log("");


let heading = document.querySelector('h1');
// console.dir(heading.innerHTML = "<u>Spiderman</u>");
console.dir(heading.innerHTML = `<u>${heading.innerText}</u>`);



console.log(" ");



//Getter and Setter
// let img = document.querySelector('img');

// img.getAttribute('id');   //Getter

// img.setAttributeNS('id', 'spidermanImg'); //Setter

// img.setAttribute('src', "creation_3.jpeg")




// let img = document.querySelector('img');
// console.dir(img);


// Manipulating style
let heading1 = document.querySelector('h1');
console.dir(heading1.style);

heading1.style.color = 'red';
heading1.style.backgroundColor = 'blue';
 


console.log(" ");



let links = document.querySelectorAll('.box a');
for (let I = 0 ; I < links.length; I++) {
    links[I].style.color = 'red';
}

console.log(" ");


let heading2 = document.querySelector('h1');
console.dir(heading2.classList);
heading2.classList.add("abc")
console.dir(heading2.classList);


console.log(" ");


//Nvigation
let h4 = document.querySelector('h4');
console.dir(h4.parentElement);



// Adding Elements
document.createElement('p');

let newP = document.createElement('p');
console.dir(newP);

newP.innerText = " Hi, I am a new p";
console.dir(newP);


// inside body tag or any where inside tag 
let box = document.querySelector('.box');
box.appendChild(newP);

//creating button
let btn = document.createElement('button');
console.dir('btn');
console.dir(btn);
btn.innerText = " click me !!";
box.appendChild(btn);


//append  (add -> last)
newP.append("This is new text");

newP.append(btn);

newP.append("yo yo yo yo yo yo yo");

//prepent (add -> first)
box.prepend(newP);


console.log(" ");


//insertAdjacent(position, value)

let btn1 = document.createElement('button');

btn1.innerHTML = "NEW BUTTON";
let p = document.querySelector('p');
// p.insertAdjacentElement('beforeBegin' , btn);
// p.insertAdjacentElement('afterEnd' , btn);
// p.insertAdjacentElement('afterBegin' , btn);
p.insertAdjacentElement('beforeEnd' , btn);



//Removing elements

// btn.remove();
// p.remove();



