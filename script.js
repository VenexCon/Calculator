// create basic functions - Done 
//create a function that an operand can be passed to - completed using Switch statements
//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") 
let currentArray = [];




// Base level Functions 
const add = (a,b) => (a+b);
const minus = (a, b) => (a-b); 
const divide = (a,b) => (a/b); 
const times = (a, b) => (a * b)



// Base level function for operands. 
function operate (a,b,operand) {
    switch (operand) {
        case "+":
            return add(a,b); 
        case"-":
            return minus(a,b);
        case "/":
            return divide(a,b);
        case "*":
            return times(a,b);
        break; 
       
    }
}



const numberBtns = document.querySelectorAll(".numberButton")
    numberBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(parseInt(e.target.textContent));
    updateDisplay(parseInt(e.target.textContent));
    }));

const operatorBtns = document.querySelectorAll(".operatorButton")
    operatorBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(e.target.textContent);
    updateDisplay(e.target.textContent)
    }));
 


function updateDisplay (arg) {
    currentArray.push(arg);  
  return displayText.textContent = currentArray.join("");
}


function equals (array) {
let int1 = array[0]; 
let int2 = array[2]
let operand = array[1]
    console.log(int1)
    console.log(int2)
    console.log(operand)


}