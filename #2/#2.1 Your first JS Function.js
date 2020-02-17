// console은 엄청 큰 object임! 내장함수(built-in function)
// 따라서 console.log에서 log는 console object에 내장되어있는 함수를 뜻한다.
console.log(console);

// python에서 def(함수정의), print(출력)이 javascript에서는 function(함수정의), console.log(출력)임을 알 수 있다.
// def sayHello():
function sayHello(){
  // print("Hello!")
  console.log("Hello!");
}

sayHello();

// parameter - argument(인자)의 개념인 파라미터! 함수 안에서 사용하게 될 이름임!
// 보다싶이 내가 만든 a, b 파라미터(인자)에 맞게 positional arguments로 위치시킨 것을 알 수 있다.
// console.log 안에서는 b, a를 어디로 옮겨도 keyworded arguments로 인식하는지 위치를 바꿔도 상관이 없었음!
function sayHello(a, b){
  console.log("Hello!", b, a);
}

sayHello("YoungWook", "How is going on?");

// 함수의 argument(인자)를 console.log는 무한하게 가질 수 있음! ex) "Hello!", "you are", "years old right?"
function sayHello(name, age){
  console.log("Hello!", name, "you are", age, "years old right?");
}

sayHello("YoungWook", 27);