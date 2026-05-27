/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t08_scope.js")
console.log("Working with scope in Javascript")

// Variables


let name = "Harsh";
console.log(name);

let age = 16;
console.log(age);


const output = document.getElementById("output");



 
var myVar = 0;


functionOne();
function functionOne() {
  myVar = 1;
 output.innerHTML += "functionOne: "+myVar+"<br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
 output.innerHTML += "functiontwo: "+myVar+"<br>";
}

output.innerHTML += "end: "+myVar+"<br>";



