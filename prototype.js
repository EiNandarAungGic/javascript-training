// Prototype Inherientance

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.getProps = function () {
  return `Name : ${this.name} & Speed : ${this.speed}.`;
};

Car.prototype.getSpeed = function () {
  return `Speed : ${this.speed}.`;
};

function Toyota(name, speed) {
  Car.call(this, name, speed);
}
Toyota.prototype = Object.create(Car.prototype);

function Honda(name, speed) {
  Car.call(this, name, speed);
}
Honda.prototype.getSpeed = () => {
  return `honda speed is override.`;
};

let toyota = new Toyota("toyota", 80);
let honda = new Honda("honda", 81);

console.log(toyota.getSpeed());
console.log(honda.getSpeed());

// Prototype Otherway

let carproto = {
  getName: function () {
    return this.name;
  },
  getSpeed: function () {
    return this.speed;
  },
};

let car = Object.create(carproto);
car.name = "Toyota";
car.speed = 180;

let next_car = Object.create(carproto, {
  name: { value: "Honda" },
  speed: { value: 190 },
});

console.log(car);
console.log(next_car);
