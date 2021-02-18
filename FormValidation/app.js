const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = "";
  if (name.value === "" || name.value == null) {
    message = `Name is required`;
  }

  if (password.value.length <= 6) {
    message = `Very short password`;
  }
  if (password.value.length >= 20) {
    message = `Very long password`;
  }
  if (message) {
    e.preventDefault();
    errorElement.innerText = message;
  }
});
