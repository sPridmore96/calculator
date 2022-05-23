// // ----------------------------GLOBAL VARIABLES------------------------------

let currentNumber = "";
let currentCalculation = [];
let onScreenCalculation = [];
let memoryStorage = [];
let memoryStorageBack = {}



// ----------------------------HTML ELEMENTS------------------------------


const buttonInputs = document.querySelectorAll(".buttons__main");
const answer = document.getElementById("answer");
const equals = document.getElementById("equals");
const userInput = document.getElementById("user-input");
const backspace = document.getElementById("backspace");
const memoryList = document.getElementById("memory");
const selectedMemory = document.querySelectorAll(".new-memory-class");
const percent = document.getElementById("percent");


// -----------------------------FUNCTIONS-----------------------------------


const memReset = () => {
    pressedButton = "";
    currentNumber = "";
    currentCalculation = [];
    onScreenCalculation = [];
    memoryStorage = [];
    memoryStorageBack = {};
    userInput.value = "";

}



const handleBackSpace = () => {
    const changedCalculation = userInput.value.split(' ')
    changedCalculation.pop()
    userInput.value = changedCalculation.join(" ")
}



const handleMainButtonClick = (event) => {
    pressedButton = event.target.innerText

    console.log(userInput.value);
    switch (pressedButton) {

        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
            userInput.value += ` ${pressedButton} `
            break;
        case "C":
            memReset()
            answer.innerText = "";
            break;
        default:
            userInput.value += pressedButton;
            break;
    }
}

// operator = "+" || "-" || "*" || "/";



const handleCalculation = () => {
    currentCalculation = userInput.value.split(' ')
    memoryStorage = currentCalculation

    const num1 = parseFloat(currentCalculation[0]);
    const num2 = parseFloat(currentCalculation[2]);
    const operator = currentCalculation[1];

    switch (operator) {

        case "+":
            result = num1 + num2;
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            // addToBackMemory();
            answer.innerText = result;
            break
        case "-":
            result = num1 - num2;
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            currentCalculation = []
            // addToBackMemory();
            answer.innerText = result;
            break;
        case "*":
            result = num1 * num2;
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            currentCalculation = []
            // addToBackMemory();
            answer.innerText = result;
            break;
        case "/":
            result = num1 / num2
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            currentCalculation = []
            // addToBackMemory();
            answer.innerText = result;
            break
        case "%":
            result = num1 / 100;
            memoryStorage.push(`is ${result} in decimal form`)
            addToFrontMemory()
            currentCalculation = []
            answer.innerText = result
            break
    }
}

const addToFrontMemory = () => {
    memoryStorage = memoryStorage.join(" ");
    let newMemory = new Option(`${memoryStorage}`, `${memoryStorage}`);
    memoryList.add(newMemory, undefined);
    newMemory.classList.add("old-memory");
    memoryStorage = [];
}

const returnToUser = () => {
    memoryStorage.split (" ")
    memReset()

}



// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleMainButtonClick)
);

equals.addEventListener("click", handleCalculation);

// selectedMemory.addEventListener("select", returnToUser);

percent.addEventListener("click", handleCalculation)

backspace.addEventListener("click", handleBackSpace)

// --------------------------------LOGIC---------------------------------------
