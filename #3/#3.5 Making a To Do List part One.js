// "js-toDoForm", "js-toDoList" class, <meta charset="utf-8" /> 추가 (delBtn인 ✖ 이모티콘이 읽히지 않음)
// UTF-8은 유니코드를 위한 가변 길이 문자 인코딩 방식 중 하나로
// Universal Coded Character Set + Transformation Format – 8-bit의 약자임
// https://ko.wikipedia.org/wiki/UTF-8
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JH</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <div class="js-clock">
      <h1>00:00</h1>
    </div>
    <form class="js-form form">
      <input type="text" placeholder="What is your name?" />
    </form>
    <h4 class="js-greeting greeting"></h4>
    <form class="js-toDoForm">
      <input type="text" placeholder="Write a to do" />
    </form>
    <ul class="js-toDoList">
    </ul>
    <script src="clock.js"></script>
    <script src="greeting.js"></script>
    <script src="todo.js"></script>
  </body>
</html>


// User Name을 LS에 저장할 때와 같이 코드 작성 
// init(initialize 초기화) 함수로 loadToDo와 handleSubmit를 실행시켜 LS에 저장되게끔함
// 여기서는 toDo가 null 값이 아닐(!)경우에만 반응
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const = TODO_LS = "toDo"

function paintToDo(text){
    console.log(text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDo() {
    const toDo = localStorage.getItem(TODO_LS);
    if(toDo !== null){

    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


// toDoInput.value = "";
// Enter를 치면 text가 console로 "submit"되고, "Wirte a to do"로 다시 빈칸이 채워짐
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


// createElement 
// text를 입력하면 document에 li Element를 create(생성)하고 
// delBtn(delete Button), span Element 역시 document에 create(생성)해줌
// appendChild
// span, delBtn을 따로따로 li에 append(추가)하고 마지막으로 li를 ul class인 toDoList에 append(추가)함
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}


// 최종 코드
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const = TODO_LS = "toDo"

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
    const toDo = localStorage.getItem(TODO_LS);
    if(toDo !== null){

    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();