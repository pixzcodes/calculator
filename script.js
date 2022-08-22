function add (n1, n2) {
    return n1 + n2;
}
function subtract (n1, n2) {
    return n1 - n2;
}
function multiply (n1, n2) {
    return n1 * n2;
}
function divide (n1, n2) {
    return n1 / n2;
}
function operate (operator, n1, n2) {
    switch (operator) {
        case '+':
            return add(n1,n2);

        case '-':
            return subtract(n1,n2);

        case '*':
            return multiply(n1,n2);
        
        case '/':
            if (n2 === 0){
                setInterval(() => {
                    let num = Math.floor(Math.random() * 2);
                    updateDisplay(num);
                }, 50);
                break
            }
            return divide(n1,n2);
        
        default:
            console.log('ERROR: operator not found');
    }
}

const display = document.querySelector('.display');
let currentDisplay = [];
function updateDisplay (content) {
    currentDisplay.push(content);
    display.textContent = currentDisplay.join("");
}

const numBtns = document.querySelectorAll('.number');
for (let i = 0; i < numBtns.length; i++){
    numBtns[i].addEventListener('click', e => {
        updateDisplay(e.target.textContent);
    });
}
let firstNumber = 0;
let currentOperator = '';
let canOperate = false;
const opBtns = document.querySelectorAll('.operator');
for (let i = 0; i < opBtns.length; i++){
    opBtns[i].addEventListener('click', e => { 
        if (currentOperator != ''){
            equals();
            firstNumber = parseInt(currentDisplay.join("")); // save first number
            canOperate = true;
            display.textContent = 0;
            currentDisplay = [];
            currentOperator = e.target.textContent;
        } else{
            firstNumber = parseInt(currentDisplay.join("")); // save first number
            canOperate = true;
            currentDisplay = [];
            display.textContent = 0; // clear display
            currentOperator = e.target.textContent;
        }
    });
}

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', equals);

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', init);

function equals (){
    if (canOperate){
        let secondNumber = parseInt(display.textContent);
        let result = operate(currentOperator, firstNumber, secondNumber);
        currentDisplay = [];
        updateDisplay(result);
        canOperate = false;
        firstNumber = 0;
        currentOperator = '';
    }
}

function init () {
    firstNumber = 0;
    currentOperator = '';
    canOperate = false;
    currentDisplay = [];
    display.textContent = 0;
}