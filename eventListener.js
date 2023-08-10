// DOM => EventListener => onClick

let btn = document.querySelector("#btn");
let delBtn = document.querySelector("#delBtn");
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

// Form Events
// keydown, keyup, keypress, focus, blur, cut, paste, change

let form = document.querySelector("form");
let input = document.querySelector("#name");

input.addEventListener("cut", (e) => {
  txt.innerHTML = input.value;
});

// Local Storage

let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");

let addDataToDb = (obj) => {
  let data = JSON.stringify(obj);
  localStorage.setItem("localdb", data);
};

let getDataFromDb = () => {
  let str = localStorage.getItem("localdb");
  let obj = JSON.parse(str);
  return obj;
};

let clearDb = () => {
  localStorage.removeItem("localdb");
};

// Session Storage

let setDataToDb = (userObj) => {
  let userAry = getFromDb();
  if (userAry == null) {
    userAry = [];
    userAry.push(userObj);
    saveToDb(userAry);
  } else {
    let ind = userAry.findIndex((user) => user.name == userObj.name);

    if (ind == -1) {
      userAry.push(userObj);
      saveToDb(userAry);
    } else {
      alert("This user has already exist!");
    }
  }
};

let saveToDb = (aryObj) => {
  let saveData = JSON.stringify(aryObj);
  sessionStorage.setItem("userdb", saveData);
};

let getFromDb = () => {
  let str = sessionStorage.getItem("userdb");
  let aryObj = JSON.parse(str);
  return aryObj;
};

let removeDb = () => {
  sessionStorage.removeItem("userdb");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // txt.innerHTML = input.value;
  let name = inputName.value;
  let age = inputAge.value;
  let user = {
    name: name,
    age: age,
  };
  addDataToDb(user);
});

delBtn.onclick = (e) => {
  // clearDb();
  removeDb();
};