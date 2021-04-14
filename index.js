const resultScreen = document.getElementById("result")
let inputNumber = ""
let storedNumber = ""
let operator = ""
let result = 0

resultScreen.innerHTML = 0

const screenUpdate = (number) => { 
    resultScreen.innerHTML = number
}

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

const input = (e) => {
    let btn = e.target
    const number = btn.innerHTML

    if(btn.classList.contains("operator")){
        operator = btn.innerHTML
        result == 0 ? storedNumber = parseInt(inputNumber) : storedNumber = result
        inputNumber = ""
        screenUpdate(0)
    } else {
            inputNumber = inputNumber + number
            screenUpdate(inputNumber)       
    }
}

const selector = (e) => {
    const btn = e.target

    if(btn.classList.contains("equal")) {
        operations(storedNumber, parseInt(inputNumber), operator)
        screenUpdate(result)
    } else if(btn.classList.contains("clear")) {
        inputNumber = ""
        storedNumber = ""
        result = 0
        screenUpdate(0)
    } else {
        input(e)
    }   
}

const buttonArea = document.getElementById("button-area")
buttonArea.addEventListener('click', selector)