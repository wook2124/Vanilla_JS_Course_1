// setInterval(fn, 1234)
// fn(첫 번째 parameter)는 실행할 함수, 1234(두 번째 parameter)는 그 함수를 실행할 시간 간격
// 두 번째 parameter의 시간 간격은 milliseconds, 1000 milliseconds = 1초
// setInterval(sayHi, 3000) 
// "sayHi 함수(fn)"가 "3초(3000 milliseconds)"간격으로 바뀜
function sayHi() { console.log("say hi") }

setInterval(sayHi, 3000)


// "getTime 함수(fn)"가 "1초(1000 milliseconds)"간격으로 바뀜
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init(); 


// ternary operator(삼항 연산자), mini if문
// seconds가 10초보다 < 작으면(if는 ?로 표시),
// `0을 붙인 {seconds}`를 출력하고, 아니면(else는 :로 표시) 그대로 {seconds} 출력
// 직역하면 "seconds가 10보다 작니 ? true(참)이면 `~~하고`, : 아니면(else) ~~해라"
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


// 최종 코드
// hours, minutes, seconds 모두 동일하게 ternary operator를 추가해줌
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
