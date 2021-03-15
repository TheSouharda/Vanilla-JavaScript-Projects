const calculator = document.querySelector(".container");
const display = calculator.querySelector(".calculator_display");
const keys = calculator.querySelector(".calculator_keys");

console.log(typeof display.textContent);

keys.addEventListener("click", (e) => {
  const key = e.target;
  const keyValue = e.target.textContent;
  let displayValue = display.textContent;

  if (key.classList.contains("number")) {
    if (displayValue === "0") {
      console.log(keyValue);
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (key.dataset.type === "operator") {
    console.log(keys);
  }
});
