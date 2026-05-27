const output = document.getElementById("output");



 
var myVar = 0;


functionOne();
function functionOne() {
  myVar = 1;
  output.innerHTML += "functionOne: "+myVar+" <br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  output.innerHTML += "functionTwo: "+myVar+"<br>";
}

output.innerHTML += "end: "+myVar+"<br>";



