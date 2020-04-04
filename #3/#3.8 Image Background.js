// https://unsplash.com에서 무료로 배경사진을 다운!
// index.html에 <script src="bg.js"></script> 추가!
// Math.floor(), Math.ceil()
// floor는 바닥, 즉 뒤에 있는 소숫점을 버림 / ceil은 천장, 즉 뒤에있는 소숫점을 올림(버림은 0에서 4까지, 올림은 1에서 5까지 숫자가 나옴)
    <script src="bg.js"></script>

const body = document.querySelector("body");

const IMG_NUMBER = 10;

function genNumber() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genNumber();
}

init();


// 다음으로 다운받은 image폴더 src(source)를 제공하고 body의 자손으로 추가하기(appendChilde), 그리고 addEventListen 하기!
const body = document.querySelector("body");

const IMG_NUMBER = 10;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `//images/${imgNumber}.jpg`;
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genNumber() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genNumber();
  paintImage(randomNumber);
}

init();


// image.classList.add('bgImage') - bgImage로 class 추가하기
// stlye.css 파일도 수정
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `//images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


// 배경화면이 뜨지 않아도 일단 과정대로 따라감
// appendChild에서 prepend로 바꿔서 body 맨앞으로 가져옴
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `//images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("loadend", handleImgLoad);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: fadeIn 0.5s linear;
}


// 최종 코드
// 배경화면이 뜨지 않은 이유는, 저장해둔 사진이 든 파일(Images)을 작업하고 있는 파일(bg.js)과 같은 위치에 뒀어야함! 
// 그리고 addEventListen는 필요없어서 funcion과 함께 Delete!
const body = document.querySelector("body");

const IMG_NUMBER = 10;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genNumber() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genNumber();
  paintImage(randomNumber);
}

init();
