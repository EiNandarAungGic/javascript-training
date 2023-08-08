let person = {
  name: "Mg Mg",
  age: 20,
  family: ["U Ba", "Daw Mya"],
  own: {
    car: "Toyota",
    bike: "Mountain Bike",
  },
  doIt: function () {
    console.log(this.name + " is riding a " + this.own.bike);
  },
};
console.table(person);
