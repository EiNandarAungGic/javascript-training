// String(5), (true).toString(), Array to String
// Date to String, using ().toString();
// Number, NaN, ParserInt, ParseFloat, toFixed

let n = 20;
console.log(n); // 20
console.log(typeof n); // number

let str = String(n);
let str2 = n.toString();
console.log(typeof str); // string
console.log(typeof str2); // string

let st = "AA";
let st1 = "20.6333333";
console.log(parseInt(st1)); // 20
console.log(Number(st1).toFixed(2)); // 20.63
console.log(typeof Number(st)); // number
console.log(Number(st)); // NaN
console.log(Number(st1)); // 20.6333333

// Ternary Operator
let no = 20;
n = no == 20 ? "Mg Mg" : "Aung Aung";
console.log(n); // Mg Mg
