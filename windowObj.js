// Window Object
// let name = prompt("what's ur name?");
// document.querySelector("#head").innerHTML = name;

// let con = confirm("Is ur age over 16");
// let ans = con ? "Yes" : "No";
// document.querySelector("#head1").innerHTML = ans;

console.log(window.innerHeight);
console.log(window.innerWidth);

document.querySelector("#btn").addEventListener("click", function () {
  //   window.location.reload();
  //   window.location.href = "extra.html";
  console.log(window.location.search);
});
