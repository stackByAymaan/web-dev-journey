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



