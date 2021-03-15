const display = document.querySelector(".calculator_display");
const keys = document.querySelector(".calculator_keys");

console.log(typeof display.textContent);

keys.addEventListener("click", (e) => {
  const keyValue = e.target.textContent;
  let displayValue = display.textContent;

  if (displayValue === "0") {
    console.log(keyValue);
    display.textContent = keyValue;
  } else {
    display.textContent = displayValue + keyValue;
  }
});
