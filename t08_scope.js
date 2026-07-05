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

let food = ["pizza", "drink", "fruit"];
console.log(food);

let cars = ["bmw m4", "gtr r35", "mustang gt"];
console.log(cars)

var number1 = 8;
var number2 = 16;
var answer;

answer = number1 + number2;
console.log("add: " + answer);

answer = number1 - number2;
console.log("subtract: " + answer);

answer = number1 * number2;
console.log("multiply: " + answer);

answer = number1 / number2;
console.log("divide: " + answer);


const OUTPUT = document.getElementById("output");

function displayWelcome(name, age){
//Display a welcome message to the user
OUTPUT.innerHTML += "<p>Welcome, "+name+"! </p>";
OUTPUT.innerHTML += "<p>You are "+age+" years old.</p>";
}


var myVar = 0;


functionOne();
function functionOne() {
  myVar = 1;

}

functionTwo();
function functionTwo() {
  var myVar = 2;
 
}





