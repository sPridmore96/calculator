let pressedButton = "";
let currentNumber = "";
let currentCalculation = [];


// ----------------------------HTML ELEMENTS------------------------------

const buttonInputs = document.querySelectorAll(".buttons__main");






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


handleCalculation = (pressedButton) = {

    if() {
        
    }

}




// -----------------------------EVENT LISTENERS------------------------------

buttonInputs.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
);





// --------------------------------LOGIC---------------------------------------
