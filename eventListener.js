// DOM => EventListener => onClick

let btn = document.querySelector("#btn");
let txt = document.querySelector("#txt");

btn.addEventListener("click", function (e) {
  txt.innerHTML = "You clicked button!";
});
