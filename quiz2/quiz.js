
let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let timer;
let timeLeft = 30;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time");
const popup = document.getElementById("resultPopup");
const message = document.getElementById("resultMessage");
const scoreDisplay = document.getElementById("scoreDisplay");

// Load difficulty from localStorage
const selectedDifficulty = localStorage.getItem("selectedDifficulty") || "easy";
const questions = allQuestions[selectedDifficulty] || [];

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  resetTimer();
  startTimer();

  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  clearInterval(timer);

  const selected = button.textContent;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "green";
      btn.style.color = "#fff";
    } else if (btn === button) {
      btn.style.backgroundColor = "red";
      btn.style.color = "#fff";
    }
  });

  if (selected === correctAnswer) {
    score += 10;
    correctCount++;
  } else {
    score -= 5;
    wrongCount++;
  }

  setTimeout(() => {
    currentQuestion++;
    loadQuestion();
  }, 1000);
}

function startTimer() {
  timeLeft = 30;
  timerEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showFailedPopup();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerEl.textContent = timeLeft;
}

function showResult() {
  document.querySelector("main").style.display = "none";
  popup.style.display = "block";

  let summary = `
    ✅ Correct Answers: ${correctCount} (Score: ${correctCount * 10})<br>
    ❌ Wrong Answers: ${wrongCount} (Penalty: ${wrongCount * 5})<br><br>
    🔢 Total Score: ${score} / ${questions.length * 10}
  `;

  scoreDisplay.innerHTML = summary;

  if (score >= 90) {
    message.textContent = "Excellent! 🎉";
  } else if (score >= 70) {
    message.textContent = "Great Job!";
  } else if (score >= 50) {
    message.textContent = "Good Effort!";
  } else if (score >= 30) {
    message.textContent = "Keep Practicing!";
  } else {
    message.textContent = "Very Poor 😞";
  }
}

function showFailedPopup() {
  document.querySelector("main").style.display = "none";
  popup.style.display = "block";
  message.textContent = "Time's up! You Failed.";

  let summary = `
    ✅ Correct Answers: ${correctCount} (Score: ${correctCount * 10})<br>
    ❌ Wrong Answers: ${wrongCount} (Penalty: ${wrongCount * 5})<br><br>
    🔢 Total Score: ${score} / ${questions.length * 10}
  `;

  scoreDisplay.innerHTML = summary;
}

window.onload = loadQuestion;
