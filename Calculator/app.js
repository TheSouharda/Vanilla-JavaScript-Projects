const calculator = document.querySelector(".container");
const display = calculator.querySelector(".calculator_display");
const keys = calculator.querySelector(".calculator_keys");

console.log(typeof display.textContent);

keys.addEventListener("click", (e) => {
  const key = e.target;
  const keyValue = e.target.textContent;
  let displayValue = display.textContent;
  const type = key.dataset.type;
  const previousKeyType = calculator.dataset.previousKeyType;

  //? Is this an number key

  if (type === "number") {
    if (displayValue === "0") {
      //* if displayValue is zero then we can replace it  with keyValue

      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      //! This makes sure if the last thing pressed was an operator then the subsequent pressed number will be replaced in the display.

      display.textContent = keyValue;
    } else {
      //* if displayValue isnt zero then we attach the subsequent numbers
      display.textContent = displayValue + keyValue;
    }
  }
  //? Is this an operator key

  if (type === "operator") {
    //! Removes the preselcted class
    const opKeys = document.querySelectorAll(".operator");
    opKeys.forEach((el) => {
      el.classList.remove("selected");
    });

    calculator.dataset.firstNumber = displayValue;

    //! Adds the selected class
    key.classList.add("selected");
    console.log(keys);
  }

  if (type === "equal") {
    const secondNum = display.textContent;
    const firstNum = calculator.dataset.firstNumber;
    console.log(firstNum, secondNum);
  }

  //! We make add this dataset to make sure that the last thing pressed was an operator
  calculator.dataset.previousKeyType = type;
});
