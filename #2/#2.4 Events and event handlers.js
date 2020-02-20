// window size가 변경될 때(resize 될 때) 만들어둔 handleResize 함수를 호출해줘!
// 만약 handleResize()라고 적으면 함수를 즉시 호출하기 때문에, 다시말해 window resize가 변경이 안되도 이미 호출을 한 상태이기 때문에 ()를 쓰면 안된다!
// ()는 버튼이다.
const title = document.querySelector("#title");

function handleResize(){
  console.log("I have been resized.")
}

window.addEventListener("resize", handleResize);

// event가 발생할 때마다 어떤 event에 대해 반응했는지 출력이 되는 것을 알 수 있다.
const title = document.querySelector("#title");

function handleResize(event){
  console.log(event);
}

window.addEventListener("resize", handleResize);

// click event에 반응해서 title의 color가 green으로 되게끔 function을 설정함. 
const title = document.querySelector("#title");

function handleClick(){
  title.style.color = "green";
}

title.addEventListener("click", handleClick);