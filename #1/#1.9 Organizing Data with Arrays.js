// 너무 비효율적임!!
const monday = "Mon";
const tuesday = "Tue";
const wednesday = "Wed";
const thursday = "Thur";
const friday = "Fri";

console.log(monday, tuesday, wednesday, thursday, friday);


// [] Array(list) 활용하기
// 그리고 daysOfWeek처럼 처음에는 무조건 소문자로 적고
// 다음 문자를 표현할 때 대문자로 울퉁불퉁 적는것을 
// camel case(낙타케이스)라고 부름
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri"];

console.log(daysOfWeek)


// Data Type에 맞으면 다 출력할 수 있음!
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", true, false, 666, 666.77];

console.log(daysOfWeek)


// Array의 속성
// [__] 안에다 숫자를 넣으면 
// 그 숫자에 속하는 값을 출력할 수 있음 
// 그리고 기계는 0부터 세는 것을 잊으면 안됌
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

console.log(daysOfWeek[4 - 3])


// 새로운 변수를 Array에 추가할 수 있음
const holiday = "When is your vacation?"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", holiday];

console.log(daysOfWeek)