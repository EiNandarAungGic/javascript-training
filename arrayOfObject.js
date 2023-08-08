let users = [
  {
    name: "Harry",
    age: 20,
    address: "Monywa",
  },
  {
    name: "John",
    age: 21,
    address: "Sagaing",
  },
  {
    name: "Louis",
    age: 22,
    address: "Mandalay",
  },
  {
    name: "Ram",
    age: 23,
    address: "Yangon",
  },
];

users.map((user) => {
  console.log(user);
  console.log(user.name);
});

let index_no = users.findIndex((user) => user.age);
console.log("users' index is " + index_no);
console.log(users[index_no]);
