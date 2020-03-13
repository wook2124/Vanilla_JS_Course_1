// console은 엄청 큰 object임, 내장함수(built-in function)
// 따라서 console.log에서 log는 console object에 내장되어있는 함수를 뜻함
console.log(console);


// Python - def(함수정의), print(출력)
// JavaScript - function(함수정의), console.log(출력)
// def sayHello():
function sayHello(){
  // print("Hello!")
  console.log("Hello!");
}

sayHello();


// parameter - argument(인자)의 개념인 파라미터, 함수 안에서 사용하게 될 이름임
// a, b 파라미터(인자)에 맞게 positional arguments로 알아서 위치시킴
// console.log 안에서는 b, a를 어디로 옮겨도 keyworded arguments로 인식해서 출력함
function sayHello(a, b){
  console.log("Hello!", b, a);
}

sayHello("YoungWook", "How is going on?");


// console.log는 함수의 argument(인자)를 무한하게 가질 수 있음
// ex) "Hello!", "you are", "years old right?"
function sayHello(name, age){
  console.log("Hello!", name, "you are", age, "years old right?");
}

sayHello("YoungWook", 27);