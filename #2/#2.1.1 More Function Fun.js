// 위랑 비교해서 `__` 백틱을 이용해 한번에 문장을 만들었다. 그리고 인자를 표시하는건 파이썬과 마찬가지로 {}를 쓰지만 $을 {} 앞에 붙여준다. (파이썬에서는 f를 시작하는 문장 맨 앞에다 붙여줌!)
function sayHello(name, age){
  console.log("Hello!", name, "you are", age, "years old right?");
}

sayHello("YoungWook", 27);

function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years old right???`);
}

sayHello("YoungWook", 27);

// const 변수를 만듬 - greetYoungWook변수는 sayHello 함수의 return 값이랑 같음
function sayHello(name, age){
  return(`Hello ${name} you are ${age} years old right???`);
}

const greetYoungWook = sayHello("YoungWook", 27);

console.log(greetYoungWook)