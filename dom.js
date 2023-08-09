// DOM
console.log(document.all(6));
console.log(document.domain); // 127.0.0.1
console.log(document.URL); // http://127.0.0.1:5500/javascript-training/app.html
console.log(document.title); // JS Training
console.log(document.forms);
console.log(document.links);
console.log(document.links[1].className); // mylink

// Query Selector
// let list = document.querySelector("ul li:first-child > a");
let list = document.querySelectorAll("ul li");

for (let i = 0; i < list.length; i++) {
  let aTag = list[i].querySelector("a");
  aTag.style.color = "red";
}
