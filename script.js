const title = document.querySelector("#title");

function handleClick(){
  title.style.color = "green";
}

title.addEventListener("click", handleClick);