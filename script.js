const questions = [
  {
    question: "What is the output of: console.log(typeof null)?",
    answers: ["null", "object", "undefined", "number"],
    correct: "object"
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    answers: ["var", "let", "const", "define"],
    correct: "const"
  },
  {
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Data Output Method", "Document Oriented Module", "Display Object Model"],
    correct: "Document Object Model"
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObj()"],
    correct: "JSON.parse()"
  },
  {
    question: "Which of the following is a primitive type?",
    answers: ["Object", "Array", "String", "Function"],
    correct: "String"
  },
  // 👉 Add up to 50 similar questions below...
];

let currentIndex = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerList = document.getElementById("answer-list");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const current = questions[currentIndex];
  questionNumber.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.innerText = current.question;
  answerList.innerHTML = "";
  
  current.answers.forEach(answer => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(btn, current.correct);
    li.appendChild(btn);
    answerList.appendChild(li);
  });
}

function selectAnswer(button, correctAnswer) {
  const allButtons = answerList.querySelectorAll("button");
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "crimson";
      btn.style.color = "white";
    }
  });

  if (button.innerText === correctAnswer) {
    score++;
  }
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
}

restartBtn.onclick = () => {
  currentIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  showQuestion();
};

// Initialize
showQuestion();
