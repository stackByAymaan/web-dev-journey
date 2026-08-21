//  Traffic light system

let color = "yellow";
if (color == "red") {
  console.log("Stop");
} else if (color == "yellow") {
  console.log("wait !!!");
} else if (color == "green") {
  console.log("GO !!!!!");
}

// marks and grade

let marks = 28;
if (marks >= 80) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else {
  console.log("FAIL!!!!");
}

// Nestee if else

let num = 95;
if (num >= 33) {
  console.log("pass");
  if (num >= 80) {
    console.log("Grade: A+");
  }
} else {
  console.log("better luck then next time !!");
}

//  Practice Qs
// Qs A "good string" is a string that starts with the letter 'a' & has a lenght > 3. WAP to find if a string is good or not .

let str = "apple";
if (str[0] === "a" && str.length > 3) {
  console.log("Good string");
} else {
  console.log("Not a good string");
}

// truthy && false
let string = "";
if (string) {
  console.log("string is not empty");
} else {
  console.log("string is empty");
}

//  switch statement

let light = "yellow";

switch (light) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("wait");
    break;
  case "green":
    console.log("GO");
    break;
  default:
    console.log("light is broken");
}

// use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
let day = 5;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

}

// Alert 
// alert("Danger");

// console.error("This is an error");

// prompt
// prompt("enter your name : ");

let firstName = prompt("Enter your first name : ");
let lastName = prompt("Enter your second name : ");
// console.log("Welcome", firstName, lastName, "!");
let msg = "Welcome" + firstName + " " + lastName + "!";
alert(msg);



