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
