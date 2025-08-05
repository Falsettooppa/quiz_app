const startBtn = document.getElementById('start-btn');
const difficultySelect = document.getElementById('difficulty');
const quizBox = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('answers'); // Assuming answers = options container
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('score-box'); // Reused score-box as result box
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const currentQuestionSpan = document.getElementById('current');
const totalQuestionsSpan = document.getElementById('total');
const difficultyTag = document.getElementById('difficulty-level'); // Add this span in HTML

let currentIndex = 0;
let score = 0;
let currentQuestions = [];
let timeLeft = 15;
let timer;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);

function startQuiz() {
    const difficulty = difficultySelect.value;
    currentQuestions = [...window.allQuestions[difficulty]];
    shuffle(currentQuestions);

    startBtn.style.display = 'none';
    difficultySelect.disabled = true;
    quizBox.classList.remove('hidden');
    resultBox.classList.add('hidden');

    totalQuestionsSpan.textContent = Math.min(50, currentQuestions.length);
    currentIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    resetState();

    const current = currentQuestions[currentIndex];
    questionEl.textContent = current.question;
    difficultyTag.textContent = `Difficulty: ${current.difficulty?.toUpperCase() || ''}`;
    currentQuestionSpan.textContent = currentIndex + 1;

    current.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add("option-btn");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(btn, opt);
        optionsEl.appendChild(btn);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    nextBtn.disabled = true;
    optionsEl.innerHTML = "";
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextBtn.disabled = false;
            disableOptions();
        }
    }, 1000);
}

function checkAnswer(button, selected) {
    clearInterval(timer);
    const correct = currentQuestions[currentIndex].answer;
    const isCorrect = selected === correct;
    if (isCorrect) {
        score++;
        button.style.background = "#00b894"; // green
    } else {
        button.style.background = "#d63031"; // red
    }

    disableOptions(correct);
    nextBtn.disabled = false;
}

function disableOptions(correctAnswer) {
    Array.from(optionsEl.children).forEach(btn => {
        btn.disabled = true;
        if (correctAnswer && btn.textContent === correctAnswer) {
            btn.style.border = "2px solid #00b894"; // highlight correct
        }
    });
}

function loadNextQuestion() {
    currentIndex++;
    if (currentIndex < Math.min(50, currentQuestions.length)) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    scoreEl.textContent = `${score} / ${Math.min(50, currentQuestions.length)}`;
    startBtn.style.display = 'inline-block';
    difficultySelect.disabled = false;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
