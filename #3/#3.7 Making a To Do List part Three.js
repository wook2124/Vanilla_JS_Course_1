// X버튼 누르면 Delete되는 delBtn기능 추가하기
// click 할 때마다 addEventListener가 작동해서 console에 잘 출력되지만,
// 두 개의 선택지 중 어떤 X 버튼을 눌렀는지는 확인 불가능함
function delToDo(event) {
    console.log(delToDo)
}
function paintToDo(text) {
  const delBtn = document.createElement("button");
  // delToDo function에 "click" event가 발생하면 function delToDo 실행
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", delToDo);


// event.target을 통해서 target을 설정할 수 있지만
// 누가 father(부모)에 속하는지 알 수 없음
// 때문에 li의 id="1, 2"를 찾아야함
function delToDo(event) {
    console.dir(event.target);
}


// 각각의 X버튼을 누르자 parentNode의 정보가 뜨고 <li id="1, 2">가 나옴
function delToDo(event) {
  console.log(event.target.parentNode);
}


// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// Node.removeChild()을 이용해서 btn을 클릭해 target으로 지정된 li를 지움
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}


// cleanToDo를 추가해서 li id를 한번에 전부 clean 하는 기능을 만듦
// filter는 Array의 모든 item에 function(함수)를 실행한 뒤,
// true 값인 item만 가지고 새로운 Array를 만듦
// 하지만 toDo.id와 li.id가 같은 값이 아님
// retrun한 값으로 toDo.id는 int값, li.id는 str값을 가짐
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    console.log(toDo.id, li.id);
    return toDo.id !== li.id;
  });
}


// parseInt() - string값을 int값으로 바꿔줌
function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
}


// Array로 정한 toDo에 변화를 주기위해 const가 아닌 let을 사용함
// 여기서 toDo는 예전 정보이고, cleanToDo가 새로운 정보이기 때문에 
// cleanToDo = toDo.filter 과정이 지나면 다시 toDo = cleanToDo가 되게끔 함 
// 그리고 마지막으로 나온 정보를 saveToDo를 통해 저장함
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
// forEach, filter 개념 정확히 알기
// Array에 있는 각각의 모든 item에 function(함수)를 실행시키는 역할
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
