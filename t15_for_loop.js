/****************************
for loop
****************************/
console.log("Running t15_for_loop.js");
console.log("Working with for loops in JavaScript");

//Variables


/****************************
Main Code
****************************/
  
 /****************************
  for loop
  ****************************/

  function singSong(){

    output.innerHTML = "";

    const BOTTLES_FIELD = document.getElementById("bottlesField");

    let bottles = Number(BOTTLES_FIELD.value);

    console.log("Starting Loop");

    for(let count = bottles; count > 0; count--){

        output.innerHTML += "<p>" + count + " bottles of milk on the wall</p>";

        output.innerHTML += "<p>" + count + " bottles of milk</p>";

        output.innerHTML += "<p>If one of those bottles should happen to fall</p>";

        output.innerHTML += "<p>" + (count - 1) + " bottles of milk on the wall.</p>";

        output.innerHTML += "<br>";

    }

    console.log("Loop Ended");
}