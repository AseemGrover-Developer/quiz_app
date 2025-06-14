// data/cpp.js

const questions = [
  {
    question: "Which of the following is used to create an object in C++?",
    options: ["class", "struct", "new", "define"],
    answer: "new"
  },
  {
    question: "What is the correct syntax for defining a class in C++?",
    options: ["class MyClass {}", "MyClass class {}", "define class MyClass", "struct class MyClass"],
    answer: "class MyClass {}"
  },
  {
    question: "What is the output of: cout << 3 + 4 << endl;",
    options: ["7", "34", "3+4", "Error"],
    answer: "7"
  },
  {
    question: "Which header file is required for cout and cin?",
    options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<conio.h>"],
    answer: "<iostream>"
  },
  {
    question: "Which operator is overloaded for output?",
    options: ["<<", ">>", "::", "&&"],
    answer: "<<"
  },
  {
    question: "Which concept allows multiple functions with same name?",
    options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
    answer: "Overloading"
  },
  {
    question: "Which access specifier makes data accessible only inside the class?",
    options: ["private", "public", "protected", "internal"],
    answer: "private"
  },
  {
    question: "C++ is an extension of which language?",
    options: ["Python", "C", "Java", "Pascal"],
    answer: "C"
  },
  {
    question: "Which of these is not a feature of OOP?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Compilation"],
    answer: "Compilation"
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["inherits", "extends", "using", "public"],
    answer: "public"
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
