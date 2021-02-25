const headingInput = document.getElementById("headingInput");
const textInput = document.getElementById("textInput");
const noteInput = document.getElementById("noteInput");
const myForm = document.getElementById("myform");
const notesDisp = document.getElementById("notes");

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
  showNotes();
});

const showNotes = () => {
  let notes = localStorage.getItem("allNotes");
  if (notes == null) {
    existingNotes = [];
  } else {
    existingNotes = JSON.parse(notes);
  }
  let html = "";
  existingNotes.forEach((element) => {
    html += `<div class="note m-2">
            <h4 class="note_head">${element.heading}</h4>
            <p class="note_content">
              ${element.text}
            </p>
            <button type="submit" class="btn btn-primary my-1">Submit</button>
          </div>`;
  });
  if (notes.length != 0) {
    notesDisp.innerHTML = html;
  }
};

showNotes();
