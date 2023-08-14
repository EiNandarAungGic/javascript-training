// ECMAS 6 => Iterator

function personIterator(persons) {
  let personIndex = 0;

  return {
    next: () => {
      return personIndex < persons.length
        ? { value: persons[personIndex++], done: false }
        : { done: true };
    },
  };
}

let persons = ["Mg Mg", "Aung Aung", "Tun Tun"];

let person = personIterator(persons);

// console.log(person.next());
// console.log(person.next());
// console.log(person.next());
// console.log(person.next());
// console.log(person.next());
// console.log(person.next());

let result = person.next();
result = person.next();
if (!result.done) {
  console.log(result.value);
}
