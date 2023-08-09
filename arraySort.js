// Array Sorting
let num_arr = [12, 20, 44, 3, 50, 6];
let new_arr = new Array(100, 200, 300);
num_arr.sort((x, y) => x - y);
console.log(num_arr); // [3, 6, 12, 20, 44, 50]

let result = num_arr.find((x) => x < 12);
console.log(result); // 3

let sum = num_arr.concat(new_arr);
console.log(sum); // [3, 6, 12, 20, 44, 50, 100, 200, 300]
