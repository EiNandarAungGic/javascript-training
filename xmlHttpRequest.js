// Asynchronous JavaScript

let card = document.querySelector(".card");
let url = "https://jsonplaceholder.typicode.com/posts";

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    let res = JSON.parse(this.responseText);
    let texts = "";
    res.forEach((posts) => {
      texts += `
            <h4>${posts.title}</h4>
            <p>${posts.body}</p></br>
        `;
    });
    card.innerHTML = texts;
    console.log(this.responseText);
  }
};
xhr.send();
