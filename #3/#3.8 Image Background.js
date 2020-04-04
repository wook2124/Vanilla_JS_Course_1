// https://unsplash.com
// index.html에 <script src="bg.js"></script> 추가


// Math.floor(), Math.ceil()
// floor는 바닥, 즉 뒤에 있는 소숫점을 버림
// ceil은 천장, 즉 뒤에있는 소숫점을 올림
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


// 다운받은 image들의 폴더 src(source) 제공
// body의 자손 class로 image 추가(appendChild)
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `//images/${imgNumber}.jpg`;
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}


// image.classList.add("bgImage") - bgImage로 class 추가
// stlye.css 파일에서 bgImage class 수정
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


// appendChild에서 prepend로 바꿔서 body 맨 앞으로 가져옴
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
