let a, b;
// [a, b, c, ...r] = [100, 200, 300, 400, 500, 600];
[{ a, b, c, ...r }] = [{ a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 }];

let per = {
  name: "Mg Mg",
  age: 20,
  school: "Mdy",
  doIt: function () {
    return "I'm doing it!";
  },
};

let { name, age, school, doIt } = per;
console.log(doIt());

console.log(a);
console.log(b);
console.log(c);
console.log(r);
