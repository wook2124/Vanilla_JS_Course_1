// window.addEventListener
// window에서 "resize" event가 발생하면 function handleResize를 호출함
// handleResize()라고 적으면 function을 즉시 호출함
const title = document.querySelector("#title");

function handleResize(){
  console.log("I have been resized.")
}

window.addEventListener("resize", handleResize);


// event가 발생할 때마다, 어떤 event에 반응했는지 console에 출력됨
const title = document.querySelector("#title");

function handleResize(event){
  console.log(event);
}

window.addEventListener("resize", handleResize);


// "click" event가 발생하면 title.style.color가 green이 되게끔 function을 설정함 
const title = document.querySelector("#title");

function handleClick(){
  title.style.color = "green";
}

title.addEventListener("click", handleClick);