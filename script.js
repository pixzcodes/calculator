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
        case 'add':
            return add(n1,n2);

        case 'subtract':
            return subtract(n1,n2);

        case 'multiply':
            return multiply(n1,n2);
        
        case 'divide':
            return divide(n1,n2);
        
        default:
            console.log('ERROR: operator not found');
    }
}

