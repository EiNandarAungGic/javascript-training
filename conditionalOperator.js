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

// Loop
//  for loop
for (let i = 0; i < 100; i++) {
  console.log("i => " + i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log("j => " + j);
  j++;
}

// do-while loop
let k = 0;
do {
  console.log("k => " + k);
  k++;
} while (k < 3);

let obj = [
  {
    name: "Mg Mg",
  },
  {
    name: "AungAung",
  },
];
let i = 0;
while (i < obj.length) {
  console.log(obj[i].name);
  i++;
}

// forEach & for in
let name = "Mg Mg"; // sequence of character
console.log(name.length);

let data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let split_val = data.split(" "); // dd = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry."]

split_val.forEach((val, index) => {
  console.log(val + " => " + index);
});

for (x in split_val) {
  console.log(split_val[x]);
}

let info = {
  name: "Mg Mg",
  age: 20,
};

console.log(info.name); // Mg Mg
console.log(info["name"]); // Mg Mg

for (vary in info) {
  console.log("In for in => " + info[vary]);
}
