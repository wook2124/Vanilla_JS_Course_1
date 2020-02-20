// h1 자체의 color를 css 파일로 지정하고 (javascript에서 css가 하는 일까지 겹치게 하고싶지 않음!)
// class='clicked'라는 클래스를 만들어서 color를 지정해줌!
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

// CLICKED_CLASS를 function으로 'clicked'라고 지정해줌.
// class='clicked'를 title 뒤에 추가해주자, css에 .clicked로 class화한 color가 나옴!
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {}

function init() {
  title.addEventListener("click", handleClick);
}
init();

// !== 같지 않다면 (===의 반대)
// 만약(if) currentClass가 'clicked'가 아니라면(!==) className(클래스이름)을 'clicked'라고 부여하고 그렇지 않으면(else) '_'빈칸으로 둬라!
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


// cursor(커서)를 pointer로 보이게끔 하는 것을 css로 정해줌
// html 파일에서도 class="button"을 추가하면 홈페이지에서 처음 title을 보이는 마우스 커서가 pointer로 바뀜.
// 하지만 click event가 발생하면 class='clicked'로 대체되면서 class='button'이 없어짐.
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

// click event가 발생해도 class='button clicked'로 button 스페이스 clicked class가 오는 것을 알 수 있음! (포인터도 그대로)
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

// classList의 method인 contains 객체 이용하기 - value가 존재하는지 확인하는 역할
// hasClass는 title classList에 contains(CLICKED_CLASS를 포함)하고 있는 것, 때문에 만약(if) hasClass를 가지고 있지 않다면(느낌표) add 해주고 갖고있으면 remove!
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

// classList의 method인 toggle 객체 이용해서 요약하기(remove와 add가 여기에 다 들어가있음..)
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