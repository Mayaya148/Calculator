let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = '0';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert('Error: Division by zero');
        return null;
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function addDigit(digit) {
    if (displayValue === '0') {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator === null) {
        firstNumber = parseFloat(displayValue);
        operator = op;
        displayValue = '0';
    } else {
        calculateResult();
        operator = op;
    }
}

function clearCalculator() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    if (operator !== null) {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        if (result !== null) {
            displayValue = result.toString();
            firstNumber = parseFloat(result);
            operator = null;
            secondNumber = null;
        }
        updateDisplay();
    }
}

updateDisplay();
