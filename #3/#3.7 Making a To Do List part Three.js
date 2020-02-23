// delBtn 기능 작동시키기
// X버튼 누르면 Delete되는 기능을 추가하기
// delToDo function이 event를 읽게하고, delBtn에 addEventListener를 추가해서 click하면 delToDo를 실행하도록함
// click 할 때마다 EventListener가 작동해서 console에 잘 띄우긴 하지만, 두 개의 선택지 중 어떤 X 버튼을 눌렀는지는 확인 불가능함
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

const toDo = [];

function delToDo(event) {
    console.log(delToDo)
}

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDo.length + 1;
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", delToDo);
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

// event.target을 통해서 target을 설정할 수 있지만, 누가 father(부모)에 속하는지 알 수 없다. (li의 id="1, 2"를 찾아야함!)
function delToDo(event) {
    console.dir(event.target);
}

// 각각의 X버튼을 누르자 parentNode의 정보가 뜨고 <li id="1, 2">가 나오는 것을 알 수 있다.
function delToDo(event) {
  console.log(event.target.parentNode);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// Node.removeChild()을 이용해서 btn이 클릭해서 target으로 지정된 li를 지워줌!
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}

// cleanToDo를 추가해서 li id 한번에 전부 clean 하고자함!
// filter는 array의 모든 아이템을 통해 function(함수)를 실행한 뒤 true 값인 아이템들만 가지고 새로운 array를 만든다
// 하지만 toDo.id와 li.id가 같은 값이 아님 (toDo.id는 int고, li.id는 str 값을 가짐)
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    console.log(toDo.id, li.id);
    return toDo.id !== li.id;
  });
}

// parseInt() - string값을 int로 바꿔줌!
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
}

// cleanToDo와 toDo 달라지는 점 살펴보기
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDo)
}

// toDo 변수에 변화를 주기위해 const에서 let으로 바꿔줌
// toDo는 예전 정보이고, cleanToDo가 새로운 정보이기 때문에 cleanToDo과정이 지난 뒤 toDo가 cleanToDo가 되게끔 해주고 그 정보를 saveToDo를 통해 저장함!
let toDo = [];

function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDo = cleanToDo;
  saveToDo();
}

// 최종 코드
// forEach, filter 개념 정확히 알기!
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

let toDo = [];

function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDo = cleanToDo;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDo.length + 1;
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", delToDo);
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
