// // ----------------------------GLOBAL VARIABLES------------------------------

let currentNumber = "";
let currentCalculation = [];
let onScreenCalculation = [];
let memoryStorage = [];
let memoryStorageBack = {}
const operator = "+" || "-" || "*" || "/";

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

// console.log(changedCalculation[changedCalculation.length-1]);

const handleBackSpace = () => {

    
    answer.innerText = "";

    if (userInput.value.length === 5) {
    userInput.value = userInput.value.slice(0,4)
        } else if (userInput.value.length === 4) {
            userInput.value = userInput.value.slice(0,1)
        }
}

const handleMainButtonClick = (event) => {
    pressedButton = event.target.innerText
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





const handleCalculation = () => {
    console.log(userInput.value.length);
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
    let selectedOption = memoryList.options[memoryList.selectedIndex].value;
    selectedOptionArr = selectedOption.split(" ");
    answer.innerText = selectedOptionArr.pop()
    selectedOptionArr.pop()
    userInput.value = selectedOptionArr.join(" ")
    console.log(selectedOptionArr);
}



// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleMainButtonClick)
);

memoryList.addEventListener("change", returnToUser)

equals.addEventListener("click", handleCalculation);

// selectedMemory.addEventListener("select", returnToUser);

percent.addEventListener("click", handleCalculation)

backspace.addEventListener("click", handleBackSpace)

// --------------------------------LOGIC---------------------------------------
