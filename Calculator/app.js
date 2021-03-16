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
      console.log(keyValue);
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      //! This makes sure if the last thing pressed was an operator then the subsequent pressed number will be replaced in the display.

      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
    calculator.dataset.previousKeyType = "number ";
  }
  //? Is this an operator key

  if (type === "operator") {
    console.log(keys);

    //! We make add this dataset to make sure that the last thing pressed was an operator

    calculator.dataset.previousKeyType = type;
  }
});
