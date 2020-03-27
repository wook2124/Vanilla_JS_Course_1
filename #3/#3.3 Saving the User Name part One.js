// <form> class="js-form form" 추가
// <h4> class="js-greeting greeting" 추가
// <script> src="greeting.js", JavaScript 파일 연결
<html>
  <head>
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
    <script src="clock.js"></script>
    <script src="greeting.js"></script>
  </body>
</html>


// document는 index.html파일 자체
// .js-form은 document의 class(.)인 "js-form" 
// <form>에 들여써져있는 input은 .을 붙이지 않고 그냥 가져오면 됨
// form - 부모, input - 자식
const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

function init() {}

init();


// Local Storage - 작은 JavaScript 정보들이 모인 저장소, LS는 Inspection(f12) Application에 있음
// value를 변경해서 LS에 저장하면, key를 호출할 때 변경값이 나옴
// null은 undefined, can't find를 뜻함
localStorage.getItem(key, value)
localStorage.getItem("YoungWook", true)
localStorage.getItem("YoungWook", is handsome?!)

localStorage.getItem("username") = null


// LS에 있는 User정보를 받아서 Name이 뜨게함
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function paintGreeting(text){
  greeting.innerText = `Hello ${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    // currentUser is undefined
  }
  else {
    // currentUser is defined
  }
}

function init() {
  loadName();
}

init();


// currentUser(key)값이 null이 아니면(else) paintGreeting이 실행되고
// form을 classList에서 remove하고 greeting을 classList에 add한 뒤
// HTML의 greeting란에 `Hello ${text}`으로 입력한 text와 함께 문구가 뜸
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // currentUser is undefined
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();


// form과 greeting, showing을 나타내기 위한 코드 (style.css)
body {
  background-color: #ecf0f1;
}

.button {
  cursor: pointer;
}

h1 {
  color: #34495e;
  transition: color 0.5s ease-in-out;
}

.clicked {
  color: #8e44ad;
}

.form,
.greeting {
  display: none;
}

.showing {
  display: block;
}