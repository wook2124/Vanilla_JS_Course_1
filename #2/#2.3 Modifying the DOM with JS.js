// document.querySelector
// querySelector는 노드의 첫번째 자식을 반환함, 쉽게말해 document에서 찾는 것임
// id를 찾을라면 #, class를 찾을라면 .을 명칭 앞에 붙임
const title = document.querySelector("#title");

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
console.dir(document);
// console.dir(x)
// dir로 document 안에 있는 모든 object를 console을 통해 살펴볼 수 있음
// title.으로 title의 모든 method를 입력할 수 있음