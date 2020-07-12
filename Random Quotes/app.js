const quotes = [
  {
    name: "Jack Ma",
    quote: "Don’t hire the most qualified, hire the craziest.",
    image: "jackma",
  },

  {
    name: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    image: "chrchill",
  },

  {
    name: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
    image: "einstein",
  },
  {
    name: "Pablo Escobar",
    quote: "All empires are created of blood and fire.",
    image: "pablo",
  },
];
const quoteBtn = document.querySelector("#quoteBtn");
const quoteTxt = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quoteImage = document.querySelector("#quoteImage");

quoteBtn.addEventListener("click", () => {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quoteTxt.innerHTML = quotes[number].quote;
});
