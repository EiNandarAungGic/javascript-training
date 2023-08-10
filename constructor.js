function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getAge = () => {
    // let diff = Date.now() - this.age.getTime();
    // let ageDate = new Date(diff);

    // return ageDate.getUTCFullYear() - 1970;
    return this.age;
  };
}

let p1 = new Person("Mg Mg", 20);
let p2 = new Person("Aung Aung", 30);
// let p3 = new Person("Su Su", "7-05-1980");

console.log(p1.name);
// console.log(p3.getAge());

// Prototype
let person = new Person("mg mg", 20);

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getUserData = function () {
  return this.name + " : " + this.age;
};

console.log(person.getUserData());
