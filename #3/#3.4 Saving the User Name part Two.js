// form 빈칸에 text를 적고 Enter를 누르는 행동은 form을 submit(제출)하는 것
// form을 제출하면 제출된 것을 다른 곳으로 보내려고 함
// Enter를 누르면 text값이 default로 사라지고 다시 빈칸으로 됨
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";
// handleSubmit(event)로 submit(제출) event가 발생하면 행동할 규칙을 정함
function handleSubmit(event) {
  event.preventDefault();
}
// eventListener로 submit이 발생하면 handleSummit 값을 호출
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  // 만약(if) currentUser === null이면 askForName으로 <form> classList에 추가(add)
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();


// currentValue 값을 얻기 위해 input.value를 이용해 Enter를 쳐서 console.log로 출력해봄
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
}


// paintGreeting(currentValue)로 현재 적은 input.value를 
// paintGreeting으로 보낸 다음 `Hello ${currentValue}`값이 나오게끔함
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
}


// 최종 코드
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";
// LS에 key="currentUser", value="text로 input(입력)한 것"으로 각각 저장함
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
// submit(제출) event가 발생하면 Default를 prevent(방지)하고
// paintGreeting과 saveName이 실행되어 currentValue(=input.value)가 LS에 저장됨
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();