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

// Travesting Nodes
// 1 - Element
// 2 - Attribute(deprecate)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

let lis = document.querySelector(".lis");

// console.log(lis.childNodes[0].nextSibling); // <li>...</li>
// console.log(lis.firstElementChild.childNodes[0].textContent); // One
// console.log(
//   lis.firstElementChild.nextSibling.nextSibling.childNodes[0].textContent
// ); // Two

for (let i = 0; i < lis.childNodes.length; i++) {
  let node = lis.childNodes[i];
  if (node.nodeType == 1) {
    console.log(node.childNodes[0].textContent);
  }
}
