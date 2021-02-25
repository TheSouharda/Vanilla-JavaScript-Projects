const headingInput = document.getElementById("headingInput");
const textInput = document.getElementById("textInput");
const noteInput = document.getElementById("noteInput");
const myForm = document.getElementById("myform");

let myarr = [];
let myobj = {};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const heading = headingInput.value.trim();
  const text = textInput.value.trim();
  console.log(heading);
  console.log(text);

  myobj.heading = heading;
  myobj.text = text;

  myarr.push(myobj);
  console.log(myobj);
});
