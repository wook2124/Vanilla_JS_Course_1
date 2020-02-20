// init - 어플리케이션을 initialize(초기화)함! (처음에는 무조건 저색깔이 지정되는 것!)
// click하니 console.log(title.style.color)대로 rgb(52, 73, 94)라는 색깔 명칭이 나왔다.
const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";

function handleClick(){
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

// https://flatuicolors.com에 가서 색깔가져오기!
// if else를 이용해서 if(만약) 처음 클릭할 때 BASE_COLOR 색이라면(condition, 조건), OTHER_COLOR로 바뀌게 하고, 그렇지 않다면(else, 첫번째 클릭 이후) 다시 BASE_COLOR!
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleClick(){
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  }
  else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

// https://developer.mozilla.org/ko/docs/Web/Events (event 참조 사이트)
// click 대신 mouseenter를 EventListener로 해주면 title에 마우스만 갖다대도 색깔이 변한다!
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();