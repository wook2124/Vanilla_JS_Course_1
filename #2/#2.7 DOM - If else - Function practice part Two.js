// JavaScript에서 CSS가 하는 일까지 겹쳐서 하고싶지 않음
// 때문에 style.css에서 h1 자체의 color를 지정하고
// index.html에서 class="clicked"를 만들어 따로 color를 지정함
// https://flatuicolors.com/ 에서 원하는 색깔 가져오기
body {
  background-color: #ecf0f1;
}

h1 {
  color: #34495e;
}

.clicked {
  color: #8e44ad;
}


// const로 CLICKED_CLASS를 "clicked"라고 지정함
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {}

function init() {
  title.addEventListener("click", handleClick);
}
init();


// !== 같지 않다면 (===의 반대)
// 만약(if) currentClass가 "clicked"가 아니라면(!==)
// title의 className을 "clicked"라고 부여하고 
// 그렇지 않으면(else) "_", 빈칸으로 두기
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  }
  else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();


// button의 cursor(커서)를 pointer로 정하고
// index.html의 <h1>에 class="button"을 추가하면 title에서의 마우스 커서가 pointer로 바뀜
// 하지만 "click" event가 발생하면 class="clicked"로 바뀌면서 class="button"이 없어짐
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

<!DOCTYPE html>
<html>
  <head>
    <title>JH</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <h1 id="title" class="button">This works!</h1>
    <script src="script.js"></script>
  </body>
</html>


// "click" event가 발생해도 index.html <h1>을 보면 class="button clicked"로 
// button 뒤에 clicked가 add(추가)되는 것을 알 수 있음
// 때문에 button class의 pointer도 그대로이고 
// 다시 "click" event가 발생하면 clicked가 remove됨
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.classList.add(CLICKED_CLASS);
  }
  else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();


// classList의 method인 contains 객체 이용하기
// value가 contain(포함)됐는지 확인하는 역할
// hasClass는 title의 classList에 contains(CLICKED_CLASS, 즉 "clicked"를 포함)하고 있는지 보는 역할
// 때문에 만약(if) hasClass를 가지고 있지 않다면(!) "clicked"를 add(추가)해주고, 갖고 있다면 remove(제거)함
// 위 코드에서 조금 더 예쁘게 바뀜
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  }
  else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();


// classList의 method인 toggle 객체 이용해서 요약하기
// add(추가)기능과 remove(제거)기능이 다 들어가있음
// 3단계로 나눠서 같은 기능을 하는 코드를 적어봤는데,
// 이렇듯 과정을 알아야 어떤 원리에 의해 쉽게 코딩할 수 있는지 알 수 있음
// https://developer.mozilla.org/ko/docs/Web/API/Element/classList (MDN 참고하기)
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();