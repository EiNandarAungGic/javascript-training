// Asynchronous JavaScript
// onreadystatechange
// onload

let card = document.querySelector(".card");
let url = "https://jsonplaceholder.typicode.com/posts";

function makeCol(result) {
  let res = JSON.parse(result);
  let texts = "";
  res.forEach((posts) => {
    texts += `
            <h4>${posts.title}</h4>
            <p>${posts.body}</p></br>
        `;
  });
  card.innerHTML = texts;
}

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
// xhr.onreadystatechange = function () {
//   if (this.status == 200 && this.readyState == 4) {
//     let res = JSON.parse(this.responseText);
//     let texts = "";
//     res.forEach((posts) => {
//       texts += `
//             <h4>${posts.title}</h4>
//             <p>${posts.body}</p></br>
//         `;
//     });
//     card.innerHTML = texts;
//     console.log(this.responseText);
//   }
// };

xhr.onload = function () {
  makeCol(this.responseText);
};
xhr.send();

// Callback Function

function callBack() {
  console.log("done");
}

function ff(cb) {
  cb();
}

ff(callBack);
