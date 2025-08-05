let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const questionNumber = document.getElementById("question-number");
const questionDifficulty = document.getElementById("question-difficulty");
const explanation = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const resultScreen = document.getElementById("result-screen");
const quizContainer = document.getElementById("quiz-container");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

function renderQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionDifficulty.textContent = `Difficulty: ${q.difficulty || 'N/A'}`;
  explanation.classList.add("hidden");
  nextBtn.disabled = true;

  answerOptions.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleAnswer(btn, q.correct, q.explanation);
    li.appendChild(btn);
    answerOptions.appendChild(li);
  });

  progress.style.width = ((currentQuestion / questions.length) * 100) + "%";
}

function handleAnswer(button, correct, explain) {
  const buttons = answerOptions.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add("correct");
    if (btn !== button && btn.textContent !== correct) btn.classList.add("wrong");
  });

  if (button.textContent === correct) {
    score++;
  }

  explanation.textContent = "📘 " + explain;
  explanation.classList.remove("hidden");
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizContainer.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScore.textContent = `${score} / ${questions.length}`;
  resultMessage.textContent = score >= questions.length * 0.8
    ? "🏆 Excellent! You're a CodeChampion."
    : "📘 Keep practising. You'll get there!";
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  renderQuestion();
};

// INIT
renderQuestion();
