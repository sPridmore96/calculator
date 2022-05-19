let pressedButton = "";
let currentNumber = "";
let currentCalculation = [];


// ----------------------------HTML ELEMENTS------------------------------

const buttonInputs = document.querySelectorAll(".buttons__main");
const answer = document.getElementById("answer")
const equals = document.getElementById("equals")




// -----------------------------FUNCTIONS-----------------------------------

const handleButtonClick = (Event) => {
    pressedButton = Event.target.innerText;

    if (pressedButton === "+") {
        currentCalculation.push(currentNumber)
        currentCalculation.push(pressedButton)
        currentNumber = ""
    } else {
        currentNumber += pressedButton
    }
    console.log(currentCalculation);
}


handleCalculation = () => {
    currentCalculation.push(currentNumber)
    const num1 = parseFloat(currentCalculation[0]);
    const num2 = parseFloat(currentCalculation[2]);
    const operator = currentCalculation[1];

    if (operator === "+") {
        const result = num1 + num2;
        answer.innerText = result;
    }
}




// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
);

equals.addEventListener("click",handleCalculation)





// --------------------------------LOGIC---------------------------------------
