
// create basic functions - Done 
//create a function that an operand can be passed to - completed using Switch statements
//store numbers as a held variable, once an operand is selected the number should be pushed to an array. 
//the operand should be pushed to another variable, or a variable called. 
// repeat until equals sign is pressed. 






// Base level Functions 
function add(a, b) {
    return (a + b);
}
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


//grid Calc Buttons

const addBtn = document.querySelector(`add`);

const subtractBtn = document.querySelector(`minus`)

const divideBtn = document.querySelector(`divide`)

const timesBtn = document.querySelector(`times`)

const sevenBtn = document.querySelector(`seven`)

const eightBtn = document.querySelector(`eight`)

const nineBtn = document.querySelector(`nine`)

const zeroBtn = document.querySelector(`zero`)

const fourBtn = document.querySelector(`four`)

const fiveBtn = document.querySelector(`five`)

const sixBtn = document.querySelector(`six`)

const EqualsBtn = document.querySelector(`equals`)

const oneBtn = document.querySelector(`one`)

const twoBtn = document.querySelector(`two`)

const threeBtn = document.querySelector(`three`)

const allClearBtn = document.querySelector(`allClear`)