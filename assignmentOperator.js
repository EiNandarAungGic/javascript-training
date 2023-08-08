// Object
const person = {
  name: "Mg Mg",
  age: 20,
};
person.name = "Aung Aung";
// person = "Mya Mya" // Cannot reassign coz of const
console.log(person.name);

// Array
let array = [1, 2, 3, 4];
array[1] = 10;
array.push(5);
console.table(array);

// Arithmetic Operators
let x = 20;
let y = 10;

let val1 = x + y;
let val2 = x - y;
let val3 = x * y;
let val4 = x / y;
console.log("Adding value = " + val1);
console.log("Subtracting value = " + val2);
console.log("Multiple value = " + val3);
console.log("Divide value = " + val4);

// Increment & Decrement Operators
x = x + 1;
y += 1;
console.log(x);
console.log(y);

x++;
console.log(x);
