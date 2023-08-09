// Date Object
let now = new Date();
console.log(now);
console.log(now.getMonth() + 1); //8
console.log(now.getDate()); // 9
console.log(now.getFullYear()); // 2023
console.log(now.getHours()); // 8
console.log(now.getTime()); // 1691547395297 (Jan 1, 1970)

now.setDate(11);
now.setHours(10);
console.log(now.getDate()); // 11
console.log(now.getHours()); // 10
