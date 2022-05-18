// create basic functions - Done 
//create a function that an operand can be passed to - completed using Switch statements
//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") 





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



const numberBtns = document.querySelectorAll(`.numberButton`)
    numberBtns.forEach(btn => btn.addEventListener(`click`, (e) =>{
    console.log(parseInt(e.target.innerText));
    }));

const operatorBtns = document.querySelectorAll(`.operatorButton`)
    operatorBtns.forEach(btn => btn.addEventListener(`click`, (e) =>{
    console.log(e.target.innerText);
    }));
 
function updateDisplay (arg) {
  return displayText.innerText = arg;
}

console.log(updateDisplay("+"))
