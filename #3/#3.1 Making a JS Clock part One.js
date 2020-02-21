// clock 만들기! - div class='js-clock'과 들여쓰기로 h1 js-title을 만들어줌
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
    <script src="clock.js"></script>
  </body>
</html>

// function init()으로 초기화(initialize)하고, clockContainer에 .js-clock class가 있는지, 그리고 h1도 같이 querySelector로 찾아줌.
const clockContainer = document.querySelector(".js-clock"), 
  clockTitle = clockContainer.querySelector("h1");

function init() {}

init();

// clockTitle.innerText - h1으로 js-title인 00시00분을 바꾸기 위한 것!(객체 안에 텍스트를 넣기 위함)
// 백틱`__`으로 hours와 minutes를 argument화해서 시간으로 표시함!
const clockContainer = document.querySelector(".js-clock"), 
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours}:${minutes}`
}

function init() {}

init();

// seconds 까지 추가해서 결과값이 잘 나오긴 했지만 매번 새로고침을 해줘야함. 새로고침 안해도 작동할 수 있게 고쳐야됨! (매시간 업데이트를 할 수 있게하는 setInterval는 다음시간에!)
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
