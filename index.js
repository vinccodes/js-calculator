//IMPORTS

// import {Calculator} from "./calculator";


// Globals
const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll('.operator');
const calculatorScreen = document.querySelector(".calculator-screen");
let TOTAL = '';
let CURRENT_VAL = 0;
//const myCalc = new Calculator;

// operate will be called when and operand is pressed.
const operate = (event)=>{
    const selectedOperator = event.target.textContent;
    //operation(in(putA, inputB);
    if(selectedOperator == "/") {
        const result = myCalc.divide(TOTAL, CURRENT_VAL)
        
    }
}

// I want to store the value of the number into a value
const doSomething = (e) =>{
    e.preventDefault();
    item = e.target.textContent;
    console.log(item);
    updateDisplay(item);
}

const updateDisplay = (item) => {
    // check if total is not 0

    // Check if item is a number
    if (typeof(parseInt(item)) == 'number') {
        CURRENT_VAL = item;
        TOTAL = TOTAL + CURRENT_VAL;
        // val1 is pressed, assign val1.
        calculatorScreen.textContent = item;
        console.log(TOTAL);
    }

    // TODO: if class is operator

    // else {

    // }

    
    // while an operator is not pressed 

        // val1 new value is val1 + 1 toString

    // when an operator is pressed, save the operator, display the operator

    // replace val1 with oldval+operator+val2
}



// Convert nodeList into array
// const numBtnArr = Array.from(numBtn);
// // add event listener to each button
// numBtnArr.forEach(element =>{
//     element.addEventListener("click", doSomething);
//     console.log(element);
// });

// Add EventListeners to Numbers
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', doSomething);
}

// Add EventListeners to operators
for (let i = 0; i < operatorBtn.length; i++) {
operatorBtn[i].addEventListener('click', operate)   
}