//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") 
let currentArray = [];
let a = null;
let b = null;
let operand = null;
let total = null;
const add = (a,b) => (a+b);
const minus =(a,b) => (a-b); 
const divide =(a,b) => (a/b); 
const times = (a,b) => (a*b);


// This needs to grab the currently displayed number and assign it to the correct value.
function testGrab (currentInteger) {
    if(typeof(currentInteger) === "number" && a == null) {
     return a = currentInteger;
    } else if (typeof(currentInteger) === "number" && a !== null){
        return b = currentInteger;
    } else if (typeof(currentInteger) === "string"){
        return operand = currentInteger; 
    }
  return;
};


// This function needs to be called upon all operand presses.
// If statements need to be added to check that all three variables are declared (if (!= null))
function equals () {
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
    return updateDisplay(parseInt(e.target.textContent));
    }));


//all operand buttons 
const operatorBtns = document.querySelectorAll(".operatorButton")
    operatorBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(e.target.textContent);
    return updateDisplay(e.target.textContent)
    }));
 

// is called upon mouse clicks. 
function updateDisplay (arg) {
    currentArray.push(arg);  
  return displayText.textContent = currentArray.join("");
};
