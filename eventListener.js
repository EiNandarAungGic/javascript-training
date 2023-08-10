// DOM => EventListener => onClick

let btn = document.querySelector("#btn");
let txt = document.querySelector("#txt");

// btn.addEventListener("click", function (e) {
//   txt.innerHTML = "You clicked button!";
// });

btn.addEventListener("dblclick", (e) => {
  txt.innerHTML = "You clicked double!";
});

btn.onmouseup = (e) => {
  txt.innerHTML = "You mouseup on button!";
};

btn.addEventListener("mousedown", (e) => {
  txt.innerHTML = "You mousedown on button!";
});

btn.addEventListener("mouseenter", (e) => {
  console.log("I'm mouseenter");
});

btn.addEventListener("mouseleave", (e) => {
  console.log("I'm mouseleave");
});

btn.addEventListener("mouseover", (e) => {
  console.log("I'm mouseover");
});

btn.addEventListener("mousemove", (e) => {
  console.log("I'm mousemove");
});
