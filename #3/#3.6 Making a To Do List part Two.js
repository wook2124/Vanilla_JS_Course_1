// toDoObj(Object) - text(key)땡땡 text(value), id = toDo를 [] list화 한거에서 +1해서 셈, toDo에 toDoObj를 push(추가)함
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

const toDo = [];

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDo.length + 1
  };
  toDo.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const toDo = localStorage.getItem(TODO_LS);
  if (toDo !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

// newId를 추가해서 li에도 id를 갖게하고 toDoObj의 id에도 같은 값을 갖게함.(1, 2, 3 등등)
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDo.length + 1;
  delBtn.innerText = "✖";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDo.push(toDoObj);
}

// JSON.stringify(toDo) - javascript object를 stirng으로 바꿔줌!(JSON - JavaScript Object Notation)
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

// console.log(loadToDo) - console에 LS에 저장된 toDo 목록을 보여줌!
// console에 제대로 나오지만 string 값으로 나옴 (string값을 다시 object 값으로 변화시켜서 표시할 것임, 다시 JSON사용)
function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
      console.log(loadToDo)
  }
}

// JSON.parse(x) - parse(parsing, 문법적 해부)
// loadToDO 값은 string으로 나오고, parsedToDo값은 object로 나옴!
function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
    console.log(loadToDo);
    const parsedToDo = JSON.parse(loadToDo);
    console.log(parsedToDo);
  }
}

// forEach - array([] list)를 위한 function(함수)임, parsedToDo에 있는 항목(text로 입력한 값) 각각에 대해 function(PaintToDO)를 실행해줌!
function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
    const parsedToDo = JSON.parse(loadToDo);
    parsedToDo.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

// 최종 코드
// toDo를 load(가져)온 뒤, parse를 통해서 string을 object로 변화시키고 parsedToDo 안에 있는 값 각각에 대해(forEach) paintToDo라는 function(함수)가 실행될 것임!
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

const toDo = [];

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDo.length + 1;
  delBtn.innerText = "✖";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDo.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
    const parsedToDo = JSON.parse(loadToDo);
    parsedToDo.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
