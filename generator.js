function* numGen() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

let num = numGen();
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
