const calculator = document.querySelector(".container");
const display = calculator.querySelector(".calculator_display");
const keys = calculator.querySelector(".calculator_keys");
const opKeys = document.querySelectorAll(".operator");

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
    
    opKeys.forEach((el) => {
      el.classList.remove("selected");
    });

    //!Setting up the operands and the operators in HTML

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;

    //! Adds the selected class
    key.classList.add("selected");
    console.log(keys);
  }

  if(type=="clear"){
    display.textContent=0;
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  if (type === "equal") {
    //!Taking up the operands and the operators in HTML
    const secondNum = display.textContent;
    const firstNum =calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;

    if(!operator){
      alert("Enter an operator!");
      return;
    }
    console.log(firstNum, operator, secondNum);
    display.textContent = "";
    display.textContent = calculate(firstNum, operator, secondNum);
    console.log(display.textContent);
    clearOperator();
  }

  //! We make add this dataset to make sure that the last thing pressed was an operator
  calculator.dataset.previousKeyType = type;
});


const calculate=(firstNum,operator,secondNum)=>{
  firstNum=parseInt(firstNum);
  secondNum=parseInt(secondNum)

  let result;
    if (operator == "plus") {
      result = firstNum + secondNum;
    }
    if (operator == "minus") {
      result = firstNum - secondNum;
    }
    if (operator == "times") {
      result = firstNum * secondNum;
    }
    if (operator == "divide") {
      result = firstNum / secondNum;
    }
    console.log(result);
    return result;

};

const clearOperator=()=>{
  
  delete calculator.dataset.operator;
  opKeys.forEach((el) => {
    el.classList.remove("selected");
  });
}