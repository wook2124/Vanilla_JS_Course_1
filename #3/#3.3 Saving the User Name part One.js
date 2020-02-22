// text 입력창 만들고, greeting.js 연동하기
<!DOCTYPE html>
<html>
  <head>
    <title>JH</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <div class="js-clock">
      <h1>00:00</h1>
    </div>
    <form class="js-form">
      <input type="text" placeholder="What is your name?" />
    <script src="clock.js"></script>
    <script src="greeting.js"></script>
  </body>
</html>

// document는 index.html파일 자체를 말하고 .js-form은 form class='js-form'을 뜻한다. 그리고 그 다음으로 form 안에 속하는 input을 그냥 가져오면 된다.(자식은 부모 안에 속함)
const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

function init() {}

init();

// Local Storage - 작은 javascript 정보들이 모인 저장소!(inspection의 console을 통해 연습해볼 수 있음 - LS는 Application란에 있음)
// value를 변경하면, key를 호출할 때 변경값이 나옴
// null 값은 undefined, can't find를 뜻함
localStorage.getItem(key, value)
localStorage.getItem("YoungWook", true)
localStorage.getItem("YoungWook", is handsome?!)

localStorage.getItem("username") = null

// h4로 js-greeting을 추가함
<!DOCTYPE html>
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

// LS에 있는 User정보를 받아서 Name이 뜨게끔 할 것임!
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

// currentUser(key)값이 null이 아니면 paintGreeting(text)는 form을 제거(remove)하고 greeting을 classList에 add(추가)해서 나에게 보여주고, `Hello {currentUser}`가 뜰 것임!
// 실험해보기! Key 값으로 currentUser로 설정하고 Value도 주었음 - 이제 currentUser가 null값이 아님!
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

// 마지막으로 form과 greeting, showing을 나타내기 위한 style.css 코드
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
