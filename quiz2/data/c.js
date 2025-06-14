// data/c.js

const questions = [
  {
    question: "Which of the following is a valid C keyword?",
    options: ["function", "void", "define", "include"],
    answer: "void"
  },
  {
    question: "What is the size of an int in C (on most systems)?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    answer: "4 bytes"
  },
  {
    question: "What symbol is used for a single-line comment in C?",
    options: ["//", "#", "/*", "--"],
    answer: "//"
  },
  {
    question: "Which function is used to print output in C?",
    options: ["echo()", "print()", "printf()", "cout"],
    answer: "printf()"
  },
  {
    question: "Which header file is needed for printf()?",
    options: ["<conio.h>", "<string.h>", "<stdio.h>", "<math.h>"],
    answer: "<stdio.h>"
  },
  {
    question: "What is the correct file extension for a C program?",
    options: [".cp", ".c", ".cpp", ".cs"],
    answer: ".c"
  },
  {
    question: "What is the output of: printf(\"%d\", 5+2);",
    options: ["7", "52", "Error", "undefined"],
    answer: "7"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
  },
  {
    question: "What is used to define a constant in C?",
    options: ["#define", "const", "final", "static"],
    answer: "#define"
  },
  {
    question: "Which data type is used to store characters?",
    options: ["char", "int", "string", "float"],
    answer: "char"
  }
];

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
    🔢 Total Score: ${score} / 100
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
    🔢 Total Score: ${score} / 100
  `;

  scoreDisplay.innerHTML = summary;
}

window.onload = loadQuestion;
