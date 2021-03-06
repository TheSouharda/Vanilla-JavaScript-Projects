const info = document.querySelector(".info");

const gen = document.querySelector(".btn");

gen.addEventListener("click", function () {
  if (info.classList.contains("info")) {
    info.classList.remove("hide");
  }

  getJoke();
});

const getJoke = async function () {
  const res = await fetch(
    `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=twopart`
  );

  const jokeInfo = await res.json();
  console.log(jokeInfo);
  console.log(jokeInfo.setup);
  console.log(jokeInfo.delivery);

  const html = ` <h3>${jokeInfo.setup}</h3>
          <p>
            ${jokeInfo.delivery}
            </p>`;
  info.innerHTML = html;
};
