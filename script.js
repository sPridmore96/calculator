// // ----------------------------GLOBAL VARIABLES------------------------------

let currentNumber = 0;
let currentCalculation = [];
let onScreenCalculation = [];
let memoryStorage = [];
let memoryStorageBack = {}


// ----------------------------HTML ELEMENTS------------------------------


const buttonInputs = document.querySelectorAll(".buttons__main");
let answer = document.getElementById("answer");
const equals = document.getElementById("equals");
const userInput = document.getElementById("user-input");
const backspace = document.getElementById("backspace");
const memoryList = document.getElementById("memory");
const selectedMemory = document.querySelectorAll(".new-memory-class");
const percent = document.getElementById("percent");



// -----------------------------FUNCTIONS-----------------------------------


const userMemReset = () => {
    pressedButton = "";
    currentNumber = 0;
    currentCalculation = [];
    onScreenCalculation = [];
    memoryStorage = [];
    userInput.value = "";
    answer.innerText = ""
}

const handleMainButtonClick = (event) => {
    pressedButton = event.target.innerText
    userInput.value += pressedButton
    switch (pressedButton) {
        case "+":
        case "-":
        case "/":
        case "*":
            currentCalculation.push(parseInt(currentNumber, 10));
            currentCalculation.push(pressedButton);
            currentNumber = 0;
            break;
        case "C":
            userMemReset()
            break;
        case "=":
            currentCalculation.push(parseInt(currentNumber, 10));
            handleCalculation()
            break
        default:
            if (currentNumber === 0) {
                currentNumber = pressedButton;
            } else {
                currentNumber += pressedButton;
            }
    }
}




const handleCalculation = () => {

    let calculation = []

    if (currentCalculation.length === 1) {
        answer.innerText = currentCalculation;
        memoryStorage = `${userInput.value} ${answer.innerText}`
        addToFrontMemory()
        return answer
    }
    console.log(currentCalculation);

    for (let i = 0; i < currentCalculation.length; i++) {
        if (currentCalculation[i] === "*" || currentCalculation[i] === "/") {
            let item = currentCalculation[i]
            if (item === "*") {
                for (let i = 0; i < currentCalculation.length; i++) {
                    if (currentCalculation[i] === "*") {
                        calculation = currentCalculation[i - 1] * currentCalculation[i + 1]

                        currentCalculation.splice([i - 1], 3, calculation);
        
                        handleCalculation()
                    }
                }
            } else if (item === "/") {
                for (let i = 0; i < currentCalculation.length; i++) {
                    if (currentCalculation[i] === "/") {
                        calculation = currentCalculation[i - 1] / currentCalculation[i + 1]
                        currentCalculation.splice([i - 1], 3, calculation);
        
                        handleCalculation()
                    }
                }
            }
        }
    }

    for (let i = 0; i < currentCalculation.length; i++) {

        if (currentCalculation[i] === "+") {
            calculation = currentCalculation[i - 1] + currentCalculation[i + 1]
            currentCalculation.splice([i - 1], 3, calculation);
            handleCalculation()


        }
        if (currentCalculation[i] === "-") {
            calculation = currentCalculation[i - 1] - currentCalculation[i + 1]
            currentCalculation.splice([i - 1], 3, calculation);
            handleCalculation()
        }
    }
}



const addToFrontMemory = () => {
    let newMemory = new Option(`${memoryStorage}`, `${memoryStorage}`);
    memoryList.add(newMemory, undefined);
    newMemory.classList.add("old-memory");
    memoryStorage = [];
}

const returnToUser = () => {
    let selectedOption = memoryList.options[memoryList.selectedIndex].value;
    selectedOptionArr = selectedOption.split(" ");
    answer.innerText = selectedOptionArr.pop();
    userInput.value = selectedOptionArr.join(" ");
}



// // -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleMainButtonClick)
);

memoryList.addEventListener("change", returnToUser)


// selectedMemory.addEventListener("select", returnToUser);

// percent.addEventListener("click", handleCalculation)

// backspace.addEventListener("click", handleBackSpace)

// --------------------------------LOGIC---------------------------------------

