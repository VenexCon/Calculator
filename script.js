
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










const addBtn = document.getElementById(`add`);
    addBtn.addEventListener(`click`, () => {
        console.log("what did you just click m8?")
    })

const subtractBtn = document.getElementById(`minus`)

const divideBtn = document.getElementById(`divide`)

const timesBtn = document.getElementById(`times`)

const sevenBtn = document.getElementById(`seven`)

const eightBtn = document.getElementById(`eight`)

const nineBtn = document.getElementById(`nine`)

const zeroBtn = document.getElementById(`zero`)

const fourBtn = document.getElementById(`four`)

const fiveBtn = document.getElementById(`five`)

const sixBtn = document.getElementById(`six`)

const EqualsBtn = document.getElementById(`equals`)

const oneBtn = document.getElementById(`one`)

const twoBtn = document.getElementById(`two`)

const threeBtn = document.getElementById(`three`)

const allClearBtn = document.getElementById(`allClear`)