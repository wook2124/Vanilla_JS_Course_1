// condition(조건)은 조건이 참을 의미하면 뭐든 넣을 수 있고, block은 console.log, alert 등 아무거나 와도 되는 것을 뜻한다.
if(condition){
  block
}
else {
  block
}

// 10이 5보다 큰 것은 true이기 때문에 Hi가 출력됨.
if(10 > 5){
  console.log("Hi");
}
else {
  console.log("Ho");
}

// ===는 checking하는 것이다, ==하고는 다름! 그리고 이 경우에는 false이기 때문에 else가 출력됨.
if(10 === 5){
  console.log("Hi");
}
else {
  console.log("Ho");
}

// else if - if의 또다른 condition(조건), python에서는 elif로 쓰임. 추가로 '10'은 숫자가 아니라 str(문자열)임!
if("10" === 10){
  console.log("Hi");
}
else if("10" === "10"){
  console.log("str is not int");
}
else {
  console.log("Ho");
}

// &&(And) - condition(조건)이 둘 다 true(참)이어야함.
if("10" === "10" && "wook" === "zook"){
  console.log("Yes");
}
else {
  console.log("No");
}

// ||(Or) - condition(조건) 두 개 중 적어도 하나는 true(참)이여야함.
if("10" === 10 || "wook" === "zook"){
  console.log("Yes");
}
else {
  console.log("No");
}

// prompt - 뭔갈 물어보는 함수(이제는 거의 쓰지 않음. alert의 기능)
const age = prompt("How old are you");

if(age > 18) {
  console.log("You can drink!");
}
else {
  console.log("You can't!");
}

// 마지막 연습, 끝!
const age = prompt("How old are you");

if(age > 18 && age <= 22) {
  console.log("You can drink but you should not");
}
else if(age > 22) {
  console.log("Go ahead!");
}
else if(age == 18) {
  console.log("You are new to this, watch out!");
}
else {
  console.log("You are too young!");
}