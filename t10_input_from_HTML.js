/****************************
input from html
****************************/
function writeline(){
    // I am Harsh. I was born in India.
    output.innerHTML += "<p>Less code matters</p>";
    output.innerHTML += "<p>Welcome to the page, Harsh!</p>";
    output.innerHTML += "<p>You are 16 years old!</p>";
}



console.log("Running_t10_activate_via_button.js");
console.log("Working with input from HTML in JavaScript")


let Username = "Harsh";
let Userage = 16;
let pocketmoney = 20;
let currentyear = 2036;

const output = document.getElementById("spaceForJavaScriptOutput");
output.innerHTML += "<p>Added by JavaScript</p>";
output.innerHTML += "<p>Hello, Harsh!</p>";
output.innerHTML += "<p>Today, we are learning Javascript.</p>";


 


/****************************
Main code
****************************/




/****************************
activate via button
****************************/

function start(){

    console.log("Caution Button was clicked!");
    output.innerHTML += "<p>Caution Button was clicked!</p>";

       writeline();

    console.log("Hi " + Username);

    let yearborn = currentyear - Userage;
    console.log("I was born in " + yearborn);


    let futureAge = Userage + 10;
    console.log("In 10 years I will be " + futureAge + " years old.");

    console.log("As of " + currentyear + " I am " + Userage + " years old");
   
    console.log("I have $" + pocketmoney);
    console.log("Welcome to the shop");
}



