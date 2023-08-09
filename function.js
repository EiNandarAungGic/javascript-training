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
