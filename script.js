
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
const allBtns = document.querySelectorAll(`.calcbuttons`).forEach(Element => Element.addEventListener(`click`, (e) =>{
    console.log(e.target.innertext);
}) )

addEventListener(`click`, (e) => {
    console.log(e.target.innertext);
})


const addBtn = document.getElementById(`add`).addEventListener(`click`, (e) => {
        console.log(e.target);
    })

const subtractBtn = document.getElementById(`minus`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const divideBtn = document.getElementById(`divide`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const timesBtn = document.getElementById(`times`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const sevenBtn = document.getElementById(`seven`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const eightBtn = document.getElementById(`eight`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const nineBtn = document.getElementById(`nine`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const zeroBtn = document.getElementById(`zero`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const fourBtn = document.getElementById(`four`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const fiveBtn = document.getElementById(`five`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const sixBtn = document.getElementById(`six`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const EqualsBtn = document.getElementById(`equals`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const oneBtn = document.getElementById(`one`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const twoBtn = document.getElementById(`two`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const threeBtn = document.getElementById(`three`).addEventListener(`click`, (e) => {
    console.log(e.target);
})

const allClearBtn = document.getElementById(`allClear`).addEventListener(`click`, (e) => {
    console.log(e.target);
})