/****************************
activate via button
****************************/
function writeline(){
    // I am Harsh. I was born in India.
    output.innerHTML += "<p>Less code matters</p>";
    output.innerHTML += "<p>Welcome to the page, Harsh!</p>";
    output.innerHTML += "<p>You are 16 years old!</p>";
}


console.log("running t09 activate via button js")
console.log("Hello World!")


let Username= "Harsh"
let Userage=16;
let pocketmoney=20;
let currentyear= 2036;

const output = document.getElementById("spaceForJavaScriptOutput");
output.innerHTML += "<p>Added by JavaScript</p>";
output.innerHTML += "<p>Hello, Harsh!</p>";
output.innerHTML += "<p>Today is a good day to learn JavaScript.</p>";


 


/****************************
Main code
****************************/



console.log("Hi " + Username);

let yearborn = currentyear - Userage;
console.log("I was born in " + yearborn);
console.log("As of " + currentyear + " I am " + Userage);
let futureAge = Userage + 10;
console.log("In 10 years I will be " + futureAge + " years old.");
console.log("As of " + currentyear + " I am " + Userage + " years old");
console.log("In 10 years I will be " + futureAge + " years old");
console.log("I have $" + pocketmoney);
console.log("Welcome to the shop")



/****************************
activate via button
****************************/

function start(){
    console.log("Caution Button was clicked!");
    output.innerHTML += "<p>Caution Button was clicked!</p>";
}


