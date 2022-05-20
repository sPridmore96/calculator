
// // ----------------------------GLOBAL VARIABLES------------------------------

let pressedButton = "";
let currentNumber = "";
let currentCalculation = [];
let onScreenCalculation = [];
let memoryStorage = [];
let memoryStorageBack = {}

console.log(memoryStorageBack);
console.log(memoryStorage);

// ----------------------------HTML ELEMENTS------------------------------


const buttonInputs = document.querySelectorAll(".buttons__main");
const answer = document.getElementById("answer");
const equals = document.getElementById("equals");
const userInput = document.getElementById("user-input");
const backspace = document.getElementById("backspace");
const memoryList = document.getElementById("memory")
const selectedMemory = document.querySelectorAll(".new-memory-class")







// -----------------------------FUNCTIONS-----------------------------------

const handleButtonClick = (Event) => {

    pressedButton = Event.target.innerText;
    userInput.value += pressedButton;
    memoryStorage.push(pressedButton)

    switch (pressedButton) {
        case "+":
        case "-":
        case "/":
        case "*":
            currentCalculation.push(currentNumber);
            currentCalculation.push(pressedButton);
            currentNumber = "";
            break;
        case "C":
            currentNumber = "";
            currentCalculation = [];
            answer.innerText = "";
            userInput.value = "";
            memoryStorage = [];
            break;
        default:
            currentNumber += pressedButton;
            break;
    }
}




const handleCalculation = () => {
    currentCalculation.push(currentNumber)
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
            // addToBackMemory();
            answer.innerText = result;
            break;
        case "*":
            result = num1 * num2;
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            // addToBackMemory();
            answer.innerText = result;
            break;
        case "/":
            result = num1 / num2
            memoryStorage.push(`= ${result}`);
            addToFrontMemory();
            // addToBackMemory();
            answer.innerText = result;
            break
        case "%":
            result 
    }
}

const addToFrontMemory = () => {
    memoryStorageBack[memoryStorage] = memoryStorage;
    memoryStorage = memoryStorage.join(" ");
    let newMemory = new Option(`${memoryStorage}`, `${memoryStorage}`);
    memoryList.add(newMemory, undefined);
    newMemory.classList.add("new-memory-class");
    memoryStorage = [];
}

const addToBackMemory = () => {
    memoryStorage = memoryStorage
    memoryStorageBack.memoryStorage = memoryStorage;
}



// const returnToUser = () => {
//     newMemory.split(" ")
//    console.log(newMemory.innerText.length -2);
// }

// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
);

equals.addEventListener("click", handleCalculation);

// selectedMemory.addEventListener("select", returnToUser);


// --------------------------------LOGIC---------------------------------------
