// Functions
// Function return Value
// Function with Arguments
function doIt(name, age) {
  return "Name is " + name + " & Age is " + age;
}

let answer = doIt("Mg Mg", 20);
console.log(answer); // Name is Mg Mg & Age is 20

// Function Default Value
function doIt2(name = "Mg Mg", age = 20) {
  console.log(`Name is ${name} And Age is ${age}`); // Using template literal
}
doIt2();

// ------------------------------------------------
// Function Express IIFEs
// Function Expression
let fun = () => {
  console.log("This is Anonymous Function");
};

fun();

// Immediately Invokable Function Expression(IIFEs)
(function () {
  console.log("This is IIFEs");
})();

// Function Inside Object
let car_obj = {
  car_name: "Toyota",
  car_color: "black",
  func: function () {
    console.log(`My car is ${this.car_color} of ${this.car_name}.`);
  },
};

car_obj.func();

// ---------------------------------------------------------
// Array Functions
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ary2 = [100, 200];

let bol = Array.isArray(ary);
console.log(bol); // true
console.log(ary.indexOf(1)); // 0
console.log(ary); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
ary.push(100);
console.log(ary); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 100]
ary.unshift(200);
console.log(ary); // [200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 100]
ary.pop();
console.log(ary); // [200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
ary.shift();
console.log(ary); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
ary.splice(2, 1);
console.log(ary); // [1, 2, 4, 5, 6, 7, 8, 9, 0]
ary.reverse();
console.log(ary); // [0, 9, 8, 7, 6, 5, 4, 2, 1]
let combine = ary.concat(ary2);
console.log(combine); // [0, 9, 8, 7, 6, 5, 4, 2, 1, 100, 200]
