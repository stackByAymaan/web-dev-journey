//^ JS Call Stack
//example
function hello() {
    console.log("Aymaannnnnnnnnnnnn");
}


function demo() {
    hello();
}

demo();
console.log('Done and Bye...')



console.log(" ");


//Visualization of call stck
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

//* breakpoint - Breakpoints allow us to pause code execution at a specific line and inspect variables, function calls, and program flow step by step for debugging.




//* JS is single Threaded -  JavaScript is a single-threaded language because it executes one task at a time using a single call stack, handling tasks sequentially rather than running multiple pieces of code simultaneously.



//* JavaScript is a single-threaded language, but functions like setTimeout() do not run on the JavaScript thread. They are handled by browser APIs (implemented in languages such as C++). When the timer finishes, the browser sends the callback to the callback queue, and the Event Loop moves it to the Call Stack when the stack becomes empty. Therefore, multiple setTimeout() calls can work concurrently even though JavaScript itself is single-threaded.



//Callback Hell
h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "Blue";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "Green";
// }, 3000);

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

// changeColor("red", 1000);
// changeColor("green",2000);
// changeColor("blue", 3000);

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000);
    });
});



console.log(" ");


// Promises

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     // if(internetSpeed > 4) {
//     //     console.log("your data was saved");
//     // } else {
//     //     console.log("weak connection. data not saved");
//     // }


//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }

// }
// savetoDb("Apna clg", () => {
//     console.log("Sucess : your data was saved");
//     savetoDb("Hello World", () => {
//         console.log("success2: data2 saved");
//     }, () => {
//         console.log("Failure2 : weak connection")
//     })
// },
//     () => {
//         console.log("Failure : weak connection. data not saved");
//     });


//Doing this by using promises
function savetoDb(data) {
    return new Promise((resolve , reject) => {
        let interSpeed = Math.floor(Math.random() * 10) + 1;
        if (interSpeed > 4) {
            resolve ("Succes : data was saved");
        } else {
            reject(" failure : weak internet");
        }
    });
}


let request = savetoDb("apna college");
request.then(() => {
    console.log("promises was resolved");
    console.log(request);
})
.catch(() => {
    console.log("promise was rejected");
    console.log(request);
});


//Promises chaining
function savetoDb1(data) {
    return new Promise((resolve , reject) => {
        let interSpeed1 = Math.floor(Math.random() * 10) + 1;
        if (interSpeed1 > 4) {
            resolve ("Succes : data was saved");
        } else {
            reject(" failure : weak internet");
        }
    });
}


savetoDb1("Helooooooooooooo")
.then((result) => {
    console.log("data1 saved");
    return savetoDb1("Helo world", result);
})
.then((result) => {
    console.log("data2 saved");
    return savetoDb1("Aymaaaaaaaaan", result);
})
.then((result) => {
    console.log("data3 saved");
    return savetoDb1("Aymaaaaaaaaan Humdaaaannnnn", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log(error);
});


// Refering old code 
let headingPromise = document.querySelector("h2");

function changeColorPromise(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            headingPromise.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColorPromise("red", 1000)
    .then(() => {
        return changeColorPromise("orange", 1000);
    })
    .then(() => {
        return changeColorPromise("green", 1000);
    })
    .catch(() => {
        console.log("something went wrong");
    });