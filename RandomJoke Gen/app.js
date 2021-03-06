const info = document.querySelector(".info");

const gen = document.querySelector(".btn");

gen.addEventListener("click", function () {
  if (info.classList.contains("info")) {
    info.classList.remove("hide");
  }
});
