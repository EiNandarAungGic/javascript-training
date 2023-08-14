// Map => unique key

let map = new Map();

map.set("k1", "Mg Mg");
map.set("k2", "Aung Aung");
map.set("k3", "Tun Tun");

for (let [k, v] of map) {
  console.log(`Key ${k} Value ${v}`);
}

for (let k of map.keys()) {
  console.log(k);
}

for (let v of map.values()) {
  console.log(v);
}

map.forEach((v, k) => {
  console.log(`Key ${k} Value ${v}`);
});

let ary = Array.from(map);
console.log(ary);

// Set => unique value

// let set = new Set();
// set.add("M");
// set.add("Aungg Mg Aung");
// set.add(100);
// set.add(() => console.log("set function"));
// console.log(set);

let set = new Set([
  "Mg Mg",
  "Aung Aung",
  100,
  () => {
    console.log("set function");
  },
]);

console.log(set.has("Su Su")); // false
console.log(set.has("Mg Mg")); // true
console.log(set); // Set(4) {'Mg Mg', 'Aung Aung', 100, ƒ}
set.delete("Mg Mg");
console.log(set); // Set(3) {'Aung Aung', 100, ƒ}

for (let i of set) {
  console.log(i);
}

set.forEach((v) => {
  console.log(v);
});

console.log(set);
let ary2 = Array.from(set);
console.log(ary2[0]); // Aung Aung
