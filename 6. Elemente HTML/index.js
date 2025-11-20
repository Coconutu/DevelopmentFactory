// var query=document.querySelectorAll(".page-title"); //selectare multipla
var query=document.getElementById("title");
// var query2=document.getElementsByClassName("page-title");

// console.log(query.innerText);

query.innerHTML +="<p id='text'>Buna ziua</p>"
//query.append("Buna ziua!");
console.log(query.innerHTML);
var hello=document.getElementById("text");
//query.removeChild(hello);
hello.style.color="red";
// min 1:59
