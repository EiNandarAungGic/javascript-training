// Ecmas 6 => Bable

class Person {
  static name = "aa";
  static age = 18;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return `Name is ${this.name}.`;
  }
  getAge() {
    return `Age is ${this.age}.`;
  }
  static getNameAge() {
    return `Name is ${this.name} & Age is ${this.age}.`;
  }
}

let person = new Person("mm", 20);
console.log(person);
console.log(Person.getNameAge());
