//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") 
let currentArray = [];



// Base level Functions 
//when called they clear the original array, update the currentArray with the correct value;
const add = (a,b) => (a+b);
const minus =(a,b) => (a-b); 
const divide =(a,b) => (a/b); 
const times = (a,b) => (a*b);




//This function needs to destructure current array
//return the correct function
//updatet he displayArray to current value. 
//needs to be called at all times when operand has acceptable values. 
function equals (array) {
    let a = array[0]; 
    let b = array[2];
    let operator = array[1];
        switch(operator) {
            case ("+"):
                return add(a,b);
            break;
            case ("-"):
               return minus(a, b);
            break;
            case("*"):
                return times(a,b)
            break;
            case("/"):
               return divide(a,b);
            break; 
        }
    };




// all number buttons, return intergers. 
const numberBtns = document.querySelectorAll(".numberButton")
    numberBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(parseInt(e.target.textContent));
    updateDisplay(parseInt(e.target.textContent));
    }));


//all operand buttons 
const operatorBtns = document.querySelectorAll(".operatorButton")
    operatorBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(e.target.textContent);
    updateDisplay(e.target.textContent)
    }));
 
// is called when mouseevent clicks.
function updateDisplay (arg) {
    currentArray.push(arg);  
  return displayText.textContent = currentArray.join("");
};
