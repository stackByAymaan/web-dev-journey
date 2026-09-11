//* Async Keyword

// function greet() {
//     return "hello !!";
// }
// console.log(greet());


async function greet() {
    return "hello !!";
}
console.log(greet());



console.log(" ");



//throw keyword
async function greet1() {
    throw "some random error";
    return "hello !!";
}
greet1()   
.then((result) => {                    //Using Then and catch
    console.log("promised was resolved", result);
})      
.catch((err) => {
    console.log("promise was rejected wit err : ", err);
});


//using arrow function with async
let num = async () => {
    return 5;
};
console.log(num());



console.log(" ");



//* Await Keyword

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num1 = Math.floor(Math.random() * 10) + 1;
            resolve(num1);
        }, 1000);
    });
}

async function demo() {
    console.log(await getNum());
    console.log(await getNum());
    console.log(await getNum());
}

demo();



//reffering old code
// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);

//     console.log("all colors changed");
// }

// demo();



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num2 = Math.floor(Math.random() * 5) + 1;
            if (num2 > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }

    console.log("all colors changed");

    let a = "text even after promise got rejected";
    console.log(a);

}

demo();



console.log(" ");


//* API -API (Application Programming Interface) is a set of rules that allows two software applications to communicate and exchange data with each other.
