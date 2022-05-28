//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 

//CONSTS
const displayText = document.getElementById("display") ;
const equalsBtn = document.getElementById("equals");
let currentArray = Array.from(displayText);
let a = null;
let b = parseFloat(displayText);
let operand = null;
let currentInteger = null;



//Base functions
const add = (a,b) => (a+b);
const minus =(a,b) => (a-b);
const divide =(a,b) => {if (b == 0) {return clearCurrentArray() } else return Math.round((a/b)*100)/100;}; 
const times = (a,b) => Math.round((a*b)*100)/100;




//Functions Section 
//This function takes the currentArray and turns it into a string. 
function convertArraytoString (currentArray){
    if (typeof(currentArray[0]) === "number" ){
  return currentInteger = parseFloat(currentArray.join(""));
    } else return currentInteger = (currentArray.join(""));
};


// This needs to grab the currently stored integer and assigns it to the correct variable.
function assignCurrentInteger (currentInteger) {
    if (typeof(currentInteger) === "number" && operand === "") {
     return a = currentInteger
    } else if (typeof(currentInteger) === "number"){
        return b = currentInteger
    } else if (currentInteger === "+" || "-" || "*" || "/" ){
        return operand = currentInteger;
    }
  return;
};



//this needs to clear the current array. 
function clearCurrentArray () {
  let clearedArray = [];
  displayText.textContent = clearedArray.join("");
  return currentArray = clearedArray;
}



// This function needs to be called upon all operand presses.
function equals () {
    if (a !== null && b!== null && operand !== null){
        switch(operand) {
            case ("+"):
              return  a = add(a,b);
            break;
            case ("-"):
               return a = minus(a,b);
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

    Math.round((a*b)*100)/100;


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
 

//equals Button 
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


// RESET Consts
const resetOperand = () => operand = null; 
const resetA = () => a = null; 
const resetB = () => b = parseFloat(displayText); 
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
});



//Decimal Input 
decimalBtn = document.querySelector(".decimalButton"); 
  decimalBtn.addEventListener("click", (e) => {
    console.log(e)
    return updateDisplay(e.target.textContent)
  });
