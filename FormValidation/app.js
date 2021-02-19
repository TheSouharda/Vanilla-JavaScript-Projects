const form = document.getElementById("form");
const nam = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
console.log(nam.parentElement);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const nameValue = nam.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  console.log(nam);

  if (nameValue === "") {
    setErrorfor(nam, "Name cannot be blank!");
  } else {
    setSuccessfor(nam);
  }

  if (emailValue === "") {
    setErrorfor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorfor(email, "Not a valid email");
  } else {
    setSuccessfor(email);
  }

  if (passwordValue === "") {
    setErrorfor(password, "Password cannot be blank");
  } else {
    setSuccessfor(password);
  }

  if (password2Value === "") {
    setErrorfor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorfor(password2, "Passwords does not match");
  } else {
    setSuccessfor(password2);
  }
}

function setErrorfor(info, message) {
  const formControl = info.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessfor(data) {
  const formControl = data.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
