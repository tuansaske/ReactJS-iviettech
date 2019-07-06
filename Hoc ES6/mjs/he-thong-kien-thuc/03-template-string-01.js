let elm = document.getElementById("mContent");

/*
elm.style.color = "red";

let name = "ES6";
let price = "50 USD";

elm.innerHTML = `<div>Thông tin khóa học: <b>${name}</b>,
giá: <b>500k</b></div>`;
*/ //bai tap demo ve template string

let todo = {
  id: 1,
  name: "Bai so 1",
  status: true
};

elm.innerHTML = `<div id="todo-id-${todo.id}">
                  <span class="${todo.status == true ? "d-none" : ""} glyphicon glyphicon-plus">-</span>
                  <span class="name">${todo.name}</span>
                  </div>`;
