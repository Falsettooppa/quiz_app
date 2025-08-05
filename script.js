const questionBox = document.getElementById("question-box");
const answersBox = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("time");
const progressText = document.getElementById("progress");
const difficultyTag = document.getElementById("difficulty");
const currentQuestionSpan = document.getElementById("current");
const totalQuestionsSpan = document.getElementById("total");

let currentIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

// 👇 Choose difficulty level here (can be set dynamically later)
const selectedDifficulty = "medium"; // Options: "easy", "medium", "hard"

// 👇 Filter questions by difficulty
const filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
totalQuestionsSpan.innerText = filteredQuestions.length;

function startQuiz() {
  showQuestion();
  nextBtn.addEventListener("click", handleNext);
}

function showQuestion() {
  resetState();
  const current = filteredQuestions[currentIndex];
  questionBox.innerText = current.question;
  difficultyTag.innerText = `Difficulty: ${current.difficulty.toUpperCase()}`;
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(btn, current.answer);
    answersBox.appendChild(btn);
  });
  currentQuestionSpan.innerText = currentIndex + 1;
  startTimer();
}

function resetState() {
  clearInterval(timer);
  timeLeft = 30;
  timerText.innerText = timeLeft;
  answersBox.innerHTML = "";
  nextBtn.disabled = true;
}

function selectAnswer(button, correctAnswer) {
  clearInterval(timer);
  const isCorrect = button.innerText === correctAnswer;
  if (isCorrect) {
    button.style.backgroundColor = "#00b894"; // green
    score++;
  } else {
    button.style.backgroundColor = "#d63031"; // red
  }

  // Highlight correct answer
  Array.from(answersBox.children).forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.style.border = "2px solid #00b894";
    }
  });

  nextBtn.disabled = false;
}

function handleNext() {
  currentIndex++;
  if (currentIndex < filteredQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function startTimer() {
  timerText.innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerText.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleNext(); // Auto move to next on timeout
    }
  }, 1000);
}

function showScore() {
  document.querySelector(".quiz-header").style.display = "none";
  questionBox.style.display = "none";
  answersBox.style.display = "none";
  nextBtn.style.display = "none";
  scoreBox.classList.remove("hide");
  scoreText.innerText = `${score} / ${filteredQuestions.length}`;
}

startQuiz();
