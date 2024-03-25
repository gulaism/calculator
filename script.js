const buttons = document.querySelector('#buttons')
const input = document.querySelector("#input")
let displayValue = 0
let firstValue = ''
let operator = ''
selectOperator = false


const displayView = () => {
    input.value = displayValue
}
displayView()


const dotDisplay = (value) => {
    if (!displayValue.toString().includes('.')) {
        displayValue += value
    }
}

const updateDisplay = (value) => {
    if (displayValue === 0 || selectOperator) displayValue = value.toString()
    else displayValue += value.toString()
}


const clearAll = () => {
    displayValue = 0
    firstValue = ''
    operator = '0'
    selectOperator = false
}


const operate = (value) => {
    operator = value
    firstValue = displayValue
    selectOperator = true
}


const calculate = () => {
    if (operator === '+') {
        displayValue = parseFloat(firstValue) + parseFloat(displayValue)
    }
    else if (operator === '-') {
        displayValue = parseFloat(firstValue) - parseFloat(displayValue)
    }
    else if (operator === '*') {
        displayValue = parseFloat(firstValue) * parseFloat(displayValue)
    }
    else if (operator === '/') {
        displayValue = parseFloat(firstValue) / parseFloat(displayValue)
    }
    displayView()
    
}


buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const value = e.target.innerText
        if (e.target.classList.contains('operator')) {

            if (value === '=') calculate()
            else {
                operate(value)
                displayView()
            }
        }
        else if (e.target.classList.contains('dot')) {
            dotDisplay(value)
            displayView()
        }
        else if (e.target.classList.contains('clear')) {
            clearAll()
            displayView()
        }
        else {
            updateDisplay(value)
            displayView()
        }
    }
})