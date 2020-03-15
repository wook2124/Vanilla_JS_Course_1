// JavaScript를 이용해서 HTML의 title도 변경가능함
// innerHTML은 title 안에있는 method이고, 
// DOM(Document Object Model)형태로 변경한 것임
const title = document.getElementById("title");

title.innerHTML = "Hi! From JS";