// console.log는 함수의 argument(인자)를 무한하게 가질 수 있음
// ex) "Hello!", "you are", "years old right?"
function sayHello(name, age) {
  console.log("Hello!", name, "you are", age, "years old right?");
}

sayHello("YoungWook", 27);


// 위랑 비교해서 `__` 백틱을 이용해 한번에 문장을 만듬
// argument(인자)를 표시하는건 Python과 마찬가지로 {}를 쓰지만
// JavaScript에서는 $을 {}앞에 붙여줌
// Python에서는 {}가 들어가는 문장 맨 앞에 f를 붙여줌
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old right???`);
}

sayHello("YoungWook", 27);


// const 변수 설정
// greetYoungWook변수는 sayHello 함수의 return 값이랑 같음
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old right???`;
}

const greetYoungWook = sayHello("YoungWook", 27);

console.log(greetYoungWook);
