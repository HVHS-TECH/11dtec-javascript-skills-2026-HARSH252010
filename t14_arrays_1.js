/****************************
Arrays
****************************/
function writeline(){
    // I am Harsh. I was born in India.
    output.innerHTML += "<p>Less code matters</p>";
    output.innerHTML += "<p>Welcome to the page, Harsh!</p>";
    output.innerHTML += "<p>You are 16 years old!</p>";
}


console.log("Running t14_arrays_1.js");
console.log("Working with arrays in JavaScript");


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
Arrays 
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

function getFormInput(){

    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");

    let userName = NAME_FIELD.value;
    let userAge = Number(AGE_FIELD.value);
    let userMoney = Number(MONEY_FIELD.value);
   
    const CHOOSE_FIELD = document.getElementById("chooseField");

let choice = Number(CHOOSE_FIELD.value);

    output.innerHTML += "<p>Welcome to my page, " + userName + "!</p>";
    output.innerHTML += "<p>You are " + userAge + " years old.</p>";
    output.innerHTML += "<p>You have $" + userMoney + " in your bank account.</p>";

    output.innerHTML += "<p>A chocolate bar costs $4.</p>";
    let chocolateArray = [
    "You loathe chocolate.",
    "Chocolate is okay.",
    "Chocolate is pretty good.",
    "Chocolate is the best thing EVER!!!"
];

    if (userMoney >= 4) {

        output.innerHTML += "<p>You CAN afford a chocolate bar.</p>";

        let change = calculateChange(userMoney, 4);

        output.innerHTML += "<p>You will get $" + change + " change.</p>";

    }
    else {

        output.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar.</p>";

    }

}

function calculateChange(money, price){

    return money - price;

}