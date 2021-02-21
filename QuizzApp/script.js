const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const question = document.getElementById("question");
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");

let currentQuestion = 0;

const loadQuestion = () => {
  let quizQuestion = quizData[currentQuestion];

  question.innerText = quizQuestion.question;
  a.innerText = quizQuestion.a;
  b.innerText = quizQuestion.b;
  c.innerText = quizQuestion.c;
  d.innerText = quizQuestion.d;
};

loadQuestion();

const getCheckedAns = () => {
  let checkedAns;

  answers.forEach((element) => {
    if (element.checked) {
      checkedAns = element.id;
    }
  });
  return checkedAns;
};

submitBtn.addEventListener("click", () => {
    const answer = getCheckedAns();
    if () {
        
    }
});
