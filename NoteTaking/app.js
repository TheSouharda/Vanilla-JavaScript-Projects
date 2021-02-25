const headingInput = document.getElementById("headingInput");
const textInput = document.getElementById("textInput");
const noteInput = document.getElementById("noteInput");
const myForm = document.getElementById("myform");

let note = {};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const heading = headingInput.value.trim();
  const text = textInput.value.trim();

  let existingNotes = JSON.parse(localStorage.getItem("allNotes"));
  if (existingNotes == null) {
    existingNotes = [];
  }

  if (heading && text != null) {
    note = {
      heading: heading,
      text: text,
    };
    existingNotes.push(note);
    console.log(existingNotes);

    localStorage.setItem("allNotes", JSON.stringify(existingNotes));
  } else {
    alert("Enter all the fields");
  }
});
