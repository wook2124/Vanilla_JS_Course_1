const age = prompt("How old are you");

if(age > 18 && age <= 22) {
  console.log("You can drink but you should not");
}
else if(age > 22) {
  console.log("Go ahead!");
}
else if(age == 18) {
  console.log("You are new to this, watch out!");
}
else {
  console.log("You are too young!");
}