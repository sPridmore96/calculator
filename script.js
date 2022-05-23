
// // ----------------------------GLOBAL VARIABLES------------------------------

let pressedButton = "";
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
    if (currentCalculation.length > 1) {
        userInput.value = userInput.value.slice(0,- 2);
        memoryStorage = Array.from(memoryStorage)
        memoryStorage.pop();
        currentCalculation = Array.from(currentCalculation)
        currentCalculation.pop();
        currentNumber = currentCalculation[1];
        pressedButton = currentCalculation[1];

    } else {
        memReset();
    }

}


const handleMainButtonClick = (Event) => {

    pressedButton = Event.target.innerText;
    userInput.value += pressedButton;
    memoryStorage.push(pressedButton)

    


    switch (pressedButton) {

        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
            currentCalculation.push(currentNumber, pressedButton);
            currentNumber = "";
            break;
        case "C":
            memReset()
            answer.innerText = "";
            break;
        case "" :
        default:
            currentNumber += pressedButton;
            break;
    }
    console.log(currentNumber);
    console.log(currentCalculation);
}

354460115302984/01


const handleCalculation = () => {
    currentCalculation.push(currentNumber)
    console.log(currentNumber);
    console.log(currentCalculation);
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
    newMemory.classList.add("new-memory-class");
    memoryStorage = [];
}

const returnToUser = () => {
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
