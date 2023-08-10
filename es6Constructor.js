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

// ES6 Inheritance

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  getSpeed() {
    console.log(`This speed is ${this.speed}`);
  }
}

class Toyota extends Car {
  constructor(name, speed, price) {
    super(name, speed);
    this.price = price;
  }
  getSpeed() {
    console.log("Override method of toyota");
  }
}

let toyota = new Toyota("toyota", 180, 18000000);
console.log(toyota.name);
toyota.getSpeed();
