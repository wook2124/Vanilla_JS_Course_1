// setInterval(fn, 1234) - setInterval은 두 인자값(argument)를 받는데, fn(첫번째인자)는 실행할 함수를 받고 1234(두번째인자)는 그 함수를 실행할 간격 시간을 적으면 된다!
// setInterval(sayHi, 3000) - milliseconds 이기때문에 1초가 1000이다! 3000은 3초로, 3초마다 입력해둔 sayHi 함수가 출력이 된다.
function sayHi() { console.log("say hi") }

setInterval(sayHi, 3000)

// getTime 함수를 1초(1000 milliseconds)마다 바뀌게함.
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
  setInterval(getTime, 1000);
}

init();

// ternary operator(삼항 연산자), mini if문 - seconds가 10초보다 < 작으면(if, ? 표시) `0붙인 seconds`를 출력하고, 아니라면(else, : 표시) seconds를 그대로 출력해라!
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

// hours, minutes, seconds 모두 동일하게 ternary operator를 추가해줬다! (물음표는 if, 땡땡은 else)
// HTML파일에서도 매초마다 업데이트 되는 것을 확인할 수 있다!
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
