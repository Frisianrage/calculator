const resultScreen = document.getElementById("result")
let inputNumber = ""
let storedNumber = ""
let operator = ""
let result = 0

resultScreen.innerHTML = 0

//This updates screen of the calculator
const screenUpdate = (number) => { 
    resultScreen.innerHTML = number
}

//This function does the actual math
const operations = (num1, num2, oper) => {
    switch(oper) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "x":
            result = num1 * num2
            break;
        case "÷":
            result = num1 / num2
            break;   
        default:
            result = 0
    }
}

//Handles the input
const input = (e) => {
    let btn = e.target
    const number = btn.innerHTML

    if(btn.classList.contains("operator")){
        operator = btn.innerHTML
        //next line is needed if you want to use the result for the next calculation
        result == 0 ? storedNumber = parseInt(inputNumber) : storedNumber = result
        inputNumber = ""
        screenUpdate(0)
    } else {
            inputNumber = inputNumber + number
            screenUpdate(inputNumber)       
    }
}

//Gives the buttons divided by equal-button, clear-button and every other button it's functionality
const selector = (e) => {
    const btn = e.target

    if(btn.classList.contains("equal")) {
        //clicking the equals button
        operations(storedNumber, parseInt(inputNumber), operator)
        screenUpdate(result)
    } else if(btn.classList.contains("clear")) {
        //clicking the clear-button
        inputNumber = ""
        storedNumber = ""
        result = 0
        screenUpdate(0)
    } else {
        //every other button
        input(e)
    }   
}

//Eventlistener for the whole button area
const buttonArea = document.getElementById("button-area")
buttonArea.addEventListener('click', selector)