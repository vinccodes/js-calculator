//IMPORTS
import {Calculator} from "./calculator.js";

// GLOBALS
const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll('.operator');
const calculatorScreen = document.querySelector(".calculator-screen");
let TOTAL = '';
let CURRENT_VAL = 0;
let CURRENT_OPERATOR = '';
const myCalc = new Calculator;

// operate will be called when '=' is pressed.
const operate = (event)=>{
    const selectedOperator = event.target.textContent;
    let result = 0;
    if(selectedOperator == "/") {
        result = myCalc.divide(TOTAL, CURRENT_VAL)
    }
    else if (selectedOperator == "x") {
        result = myCalc.multiply(TOTAL)
    }
}

// I want to store the value of the number into a value
const handleNumClick = (event) =>{
    event.preventDefault();
    let item = event.target.textContent;
    console.log(item);
    updateDisplay(item, "number");
}

const handleOperatorClick = (event) => {
    event.preventDefault();
    let clicked = event.target.textContent;
    // save the current operator
    CURRENT_OPERATOR = clicked;
    updateDisplay(clicked, "operator");
}
// Updates the calculator screen depending on button pressed.
const updateDisplay = (item, inputType) => {
    // Check if item is a number
    if (inputType == 'number') {
        CURRENT_VAL = item;
        CURRENT_VAL = CURRENT_VAL + item;
        calculatorScreen.textContent = CURRENT_VAL;
        console.log(CURRENT_VAL);
        
    }
    else if (inputType == 'operator') {
        calculatorScreen.textContent = CURRENT_OPERATOR;
    }

    // TODO: if class is operator

    // else {

    // }

    
    // while an operator is not pressed 

        // val1 new value is val1 + 1 toString

    // when an operator is pressed, save the operator, display the operator

    // replace val1 with oldval+operator+val2
}

// Add EventListeners to Numbers
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', handleNumClick);
}

// Add EventListeners to operators
for (let i = 0; i < operatorBtn.length; i++) {
operatorBtn[i].addEventListener('click', handleOperatorClick)   
}

