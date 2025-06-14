// html.js

const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Marking Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<heading>", "<h6>", "<head>", "<h1>"],
    answer: "<h1>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["*", "/", "<", "^"],
    answer: "/"
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ul>", "<ol>", "<list>", "<dl>"],
    answer: "<ol>"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    answer: "alt"
  },
  {
    question: "What is the correct HTML for making a hyperlink?",
    options: [
      "<a>http://example.com</a>",
      "<a name='http://example.com'>Example</a>",
      "<a href='http://example.com'>Example</a>",
      "<link href='http://example.com'>Example</link>"
    ],
    answer: "<a href='http://example.com'>Example</a>"
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<b>", "<i>", "<strong>"],
    answer: "<strong>"
  },
  {
    question: "What is the correct HTML element for inserting a horizontal rule?",
    options: ["<hr>", "<line>", "<break>", "<tr>"],
    answer: "<hr>"
  },
  {
    question: "Which element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<sectionfooter>", "<end>"],
    answer: "<footer>"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const resultPopup = document.getElementById("resultPopup");
const resultMessage = document.getElementById("resultMessage");
const scoreDisplay = document.getElementById("scoreDisplay");

function loadQuestion() {
  resetTimer();
  const current = htmlQuestions[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, current.answer);
    optionsEl.appendChild(btn);
  });
  startTimer();
}

function selectAnswer(button, correctAnswer) {
  clearInterval(timer);
  const userAnswer = button.textContent;
  if (userAnswer === correctAnswer) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
    score += 10;
  } else {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    score -= 5;
    [...optionsEl.children].forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
      }
    });
  }
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < htmlQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function startTimer() {
  timeLeft = 30;
  timeEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      showResult(true);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeEl.textContent = 30;
}

function showResult(timeout = false) {
  document.querySelector(".quiz-container").style.display = "none";
  resultPopup.style.display = "block";
  if (timeout) {
    resultMessage.textContent = "Time's up! You failed to complete the quiz.";
  } else if (score >= 80) {
    resultMessage.textContent = "Excellent Work!";
  } else if (score >= 60) {
    resultMessage.textContent = "Good Job!";
  } else if (score >= 40) {
    resultMessage.textContent = "Fair Attempt!";
  } else {
    resultMessage.textContent = "Very Poor. Better luck next time.";
  }
  scoreDisplay.textContent = score;
}

// Load the first question on page load
window.onload = loadQuestion;
