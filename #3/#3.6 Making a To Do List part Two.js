// const toDoObj(Object)
// text(key): text(value) / id = toDo를 [] list화 한 것에서 +1함 / toDo에 toDoObj를 push(추가)함
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


// newId를 정의하고 li.id를 newId와 같게 설정한 뒤 toDoObj의 id가 newId의 값을 같게 했다
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


// JSON.stringify(toDo) - JSON, JavaScript Object Notation
// JavaScript object를 stirng으로 바꿔줌
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}


// console.log(loadToDo) - console에 LS에 저장된 toDo 목록을 보여줌
// console에 출력이 되지만, string 값으로 출력됨
// 위에서 바꿔준 string값을 다시 object 값으로 바꿔야함, 다시 JSON사용
function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
      console.log(loadToDo)
  }
}


// JSON.parse(x) - parse(parsing, 문법적 해부)
// loadToDo 값인 string과 parsedToDo 값인 object를 console로 출력해 비교해봄
function loadToDo() {
  const loadToDo = localStorage.getItem(TODO_LS);
  if (loadToDo !== null) {
    console.log(loadToDo);
    const parsedToDo = JSON.parse(loadToDo);
    console.log(parsedToDo);
  }
}


// forEach - array([] list)를 위한 function(함수)
// parsedToDo에 있는 각각의 항목(text로 입력한 값)에 대해 function를 실행함
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
// TODO_LS를 load(가져)온 뒤 parse를 통해 string을 object로 바꾸고
// parsedToDo 각각에 대해(forEach) paintToDo function(함수)를 실행함
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
