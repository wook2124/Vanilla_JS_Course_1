// let과 const의 차이점 - let은 변수값을 얼마든지 다른값으로 변경가능함, const는 변수값을 한번 정하면 다른값으로 변경이 불가능함
// constant(상수)는 변수값을 변경할 수 없기 때문에 새로 a = 4로 변수값을 설정하면 에러가 난다. Assignment to constant variable.(상수변수에 할당하려고함.) 그리고 그것은 3번째 줄 3번째 칸의 오류임.
// 첫 사용은 const로, 정말 필요할 때만 let을 사용하기.
const a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

// var - variable(변수) 역시 let처럼 변수값을 변경할 수 있다. 4년 전만해도 var만 사용할 수 있었고 let과 const는 없었다.
var a = 221;
var b = a - 5;
a = 4;
console.log(b, a);