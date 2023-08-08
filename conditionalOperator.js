// conditional operators
let x1 = 20;
let y1 = 10;
let k1 = "10";

let z1 = x1 > y1;
let z2 = x1 == y1;
let z3 = x1 != y1;
let z4 = y1 == k1;
let z5 = y1 === k1; // === (type, value)
console.log(z1); // true
console.log(z2); // false
console.log(z3); // true
console.log(z4); // true
console.log(z5); // false

// Conditional Statement OR Control Flow
// if, if else, if - else if - else
// switch
// for, while, dowhile
// for in, foreach

// if statement
let age = 20;
if (100 > 50) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

if (age == 6) {
  console.log("Age is 6");
} else if (age == 9) {
  console.log("Age is 9");
} else if (age == 13) {
  console.log("Age is 13");
} else {
  console.log("Age is 20");
}

// switch statement
let color = "red";
let value;
switch (color) {
  case "green":
    console.log("Color is green");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "yellow":
    console.log("Color is yellow");
    break;
  case "red":
    console.log("Color is red");
    break;
  default:
    console.log("I can't guess");
}

switch (color) {
  case "red":
    value = "Color is red";
    break;
  case "blue":
    value = "Color is blue";
    break;
  default:
    value = "I can't guess";
}

document.querySelector("#head").innerHTML = value;
