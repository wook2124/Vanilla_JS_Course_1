// console.dir(x) - dir을 입력해서 그 안에있는 DOM(Document Object Model)을 살펴볼 수 있음!
// title.에서 .뒤에 title object 안에 있는 method를 입력할 수 있다.
// document.querySelector 사용하기 - querySelector는 노드의 첫번째 자식을 반환한다. 만약 id로 찾고싶다면 #을 쓰고 class로 찾고싶다면 #을 쓴다. 
// id는 object이고 class는 그 안에 속한 method를 뜻하는 것 같다... 아마??
const title = document.querySelector("#title");

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
console.dir(document);