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

 if (pressedButton === "+" || pressedButton === "-" || pressedButton === "/" || pressedButton === "*") {
        currentCalculation.push(currentNumber)
        currentCalculation.push(pressedButton)
        currentNumber = ""
    } else {
        currentNumber += pressedButton;
    }
    console.log(currentCalculation);
}


handleCalculation = () => {
    currentCalculation.push(currentNumber)
    const num1 = parseFloat(currentCalculation[0]);
    const num2 = parseFloat(currentCalculation[2]);
    const operator = currentCalculation[1];

    switch (operator) {
        case "+":
            result = num1 + num2;
            answer.innerText = result;
            break
        case "-":
            result = num1 - num2;
            answer.innerText = result;
            break;
        case "*":
            result = num1 * num2;
            answer.innerText = result;
            break;
        case "/":
            result = num1 / num2
            answer.innerText = result;
            break
    }

}




// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
);

equals.addEventListener("click", handleCalculation)





// --------------------------------LOGIC---------------------------------------
