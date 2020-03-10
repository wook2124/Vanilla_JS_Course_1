// JS 문법 사이트
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let


// 변수(variable)
var
변수를 선언한다, 변수를 값으로 초기화할 수 있다.
let
블록 범위 지역 변수를 선언한다, 변수를 값으로 초기화할 수 있다.
const
읽기 전용 유명(named) 상수를 선언한다. 변수를 초기화할 수 없다.


// Create(생성)
let a

// Initialize(초기화)
let a = 221;
let b = a - 5;

// Use(사용)
console.log(b);
// console에 b = 216이 뜸
// 추가로 Update(갱신)도 있음


// First variable
let a = 221;
let b = a - 5;
// a를 4로 갱신해줌
a = 4;
console.log(b, a);
// console에 b = 216, a = 4가 뜸