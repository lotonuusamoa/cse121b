/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add ( number1 , number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value= add(addNumber1 , addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function( number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value= subtract(subtractNumber1 , subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = function( number1, number2) {
    return number1 * number2;
}
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value= multiply(multiplyNumber1  , multiplyNumber2 );
}
document.querySelector('#multiplyNumbers').addEventListener('click', () => multiplyNumbers());


/* Open Function Use - Divide Numbers */
const divide = function( number1 , number2) {
    return number1 / number2;
} 
const divideNumbers = function(){
    let divideNumber1 = Number(document.querySelector('#dividend').value)
    let divideNumber2 = Number(document.querySelector('#divisor').value)

    document.querySelector('#quotient').value= divide(divideNumber1  , divideNumber2 );
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

function calculateTotal() {
    let subtotalAmount = parseFloat(document.getElementById('subtotal').value) || 0;

    // Check if the membership checkbox is checked
    let isMember = document.getElementById('member').checked;

    // Apply a 20% discount if the user is a member
    if (isMember) {
        subtotalAmount *= 0.8; // Apply a 20% discount
    }

    
    let totalFormatted = subtotalAmount.toFixed(2);
    document.getElementById('total').textContent = `$ ${totalFormatted}`;
}
document.getElementById('getTotal').addEventListener('click', calculateTotal);



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;