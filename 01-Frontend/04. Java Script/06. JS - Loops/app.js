// * LOOPS

// for loop

for(let i = 1; i<=5; i++) {
    console.log(i);
}

console.log("   ");


for(let n = 10; n>=1; n--) {
    console.log(n);
}

console.log("   ");

// Print all odd number (1 to 15)
for (let o=1; o<=15; o=o+2) {
    console.log(o);
}

// reverse
console.log("   ");
for (let o=15; o>=1; o=o-2) {
    console.log(o);
}

console.log("   ");

// Print all even number (2 to 10)
for ( let e = 2; e<=10; e=e+2) {
    console.log(e);
}

// infinite loop 
// for ( let n = 1;  n++;) {
//     console.log(n);
// }

console.log("   ");

// print table of 5
for(m=5; m<=50; m=m+5) {
    console.log(m);
}

console.log("   ");

// print a atble but by taking user input
// let p = prompt("Write any number");
// let num = parseInt(p);  // convert string to number

// for(let i = num; i <= num * 10; i += num) {
//     console.log(i);
// }


console.log("   ");

// Nested for Loop
for (let l = 1; l <= 3; l++) {
    console.log(`outer loop ${l}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}


console.log("   ");

// While loop
let I = 1;
while(I<=5) {
    console.log(I);
    I++;

}


console.log("   ");


//? favorite movie guess game

// const favMovie = " ";

// let guess = prompt("Guess my favorite movie");
// while((guess != favMovie) && (guess !="quit")) {
//     guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie) {
//     console.log("congrats!!");
// } else {
//     console.log("You quit") ;
// }


console.log("   ");

// Break statement 
let a = 1;
while(a<=5) {
    if(a == 3) {
        break;
    }
    console.log(a);
    a++;

}
console.log("We use break at 3");

console.log("   ");


// Loops with array
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");

console.log(fruits);

// for (let f = 0; f<fruits.length; f++) {
//     console.log(f,fruits[f]);
// }

for (let f = fruits.length-1; f>=0;  f--) {
    console.log(f,fruits[f]);
}

console.log(" ");

// Nested loop with nested Arrays
let hero = [
           ["ironman", "spiderman", "Thor"], 
           ["superman", "Wonder women", "flash"]
        ];
        for(let i=0; i<hero.length; i++) {
            console.log(hero[i], hero[i].length);
            for(let j =0; j< hero[i].length;j++) {
                console.log(`{j}, ${hero[i][j]}`);
            }
        }
        
console.log(" ");

// for-of loop
let phals = ["mango", "apple", "banana", "orange", "litchi"];
for(phals of phals) {
    console.log(phals)
    }
    
