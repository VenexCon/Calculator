//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") ;
const equalsBtn = document.getElementById("equals");
let currentArray = [];
let a = 0;
let b = null;
let operand = null;
let currentInteger = null; 
//Base functions
const add = (a,b) => (a+b);
const minus =(a,b) => (a-b); 
const divide =(a,b) => (a/b); 
const times = (a,b) => (a*b);



//This function takes the currentArray and turns it into a string. 
function convertArraytoString (currentArray){
    if (typeof(currentArray[0]) === "number" ){
  return currentInteger = parseInt(currentArray.join(""));
    } else return currentInteger = (currentArray.join(""));
};

// This needs to grab the currently stored integer and assigns it to the correct variable.
function assignCurrentInteger (currentInteger) {
    if (typeof(currentInteger) === "number" && a == null) {
     return a = currentInteger
    } else if (typeof(currentInteger) === "number"){ // this b statement can be gotten rid off to ensure that the variable can be assigned.
        return b = currentInteger
    } else if (typeof(currentInteger) === "string"){
        return operand = currentInteger;
    }
  return;
};

//this then needs to clear the current array. 

function clearCurrentArray () {
  let clearedArray = [];
  displayText.textContent = currentArray.join("");
  return currentArray = clearedArray;
}

// This function needs to be called upon all operand presses.
// If statements need to be added to check that all three variables are declared (if (!= null))
function equals () {
    if (a !== null && b!== null && operand !== null){
        switch(operand) {
            case ("+"):
              return  a = add(a,b);
            break;
            case ("-"):
               return a = minus(a, b);
            break;
            case("*"):
                return a = times(a,b)
            break;
            case("/"):
               return a = divide(a,b);
            break; 
        }
    } else return;
    };


// All number buttons, return intergers. 
const numberBtns = document.querySelectorAll(".numberButton")
    numberBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(parseInt(e.target.textContent));
      convertArraytoString (currentArray);
      assignCurrentInteger (currentInteger);
      if (typeof(currentInteger) === "string"){
      clearCurrentArray();
      }
    return updateDisplay(parseInt(e.target.textContent));
    }));


//All operand buttons 
const operatorBtns = document.querySelectorAll(".operatorButton")
    operatorBtns.forEach(btn => btn.addEventListener("click", (e) =>{
    console.log(e.target.textContent);
    convertArraytoString (currentArray);
    assignCurrentInteger (currentInteger);
    equals(); 
    clearCurrentArray(); 
    return updateDisplay(e.target.textContent)
    }));
 
//equals Button Display update
equalsBtn.addEventListener("click", (e) => {
  convertArraytoString (currentArray)
  assignCurrentInteger (currentInteger) 
  clearCurrentArray()
  equals()
  updateDisplay(a)
})


// Is called upon mouse clicks. 
function updateDisplay (arg) {
    currentArray.push(arg);  
  return displayText.textContent = currentArray.join("");
};

const resetOperand = () => operand = null; 
const resetA = () => a = null; 
const resetB = () => b = null; 
const resetInteger= () => currentInteger = null; 


//allClearFunction
function resetAll () {
  resetOperand()
  resetA()
  resetB()
  resetInteger()
  clearCurrentArray();
  console.log("Successful Reset");
  return updateDisplay("");
}
const allClearBtn = document.getElementById("allClear");
allClearBtn.addEventListener("click", () => {
  resetAll(); 
})


