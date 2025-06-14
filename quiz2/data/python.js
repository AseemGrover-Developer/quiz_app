// python.js

const pythonQuestions = [
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["5", "6", "8", "9"],
    answer: "8"
  },
  {
    question: "Which of the following is a Python tuple?",
    options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
    answer: "(1, 2, 3)"
  },
  {
    question: "Which keyword is used for function in Python?",
    options: ["func", "def", "function", "define"],
    answer: "def"
  },
  {
    question: "What is the output of: print('Hello' * 2)?",
    options: ["HelloHello", "Hello2", "Hello Hello", "Error"],
    answer: "HelloHello"
  },
  {
    question: "Which of the following is NOT a valid Python data type?",
    options: ["list", "tuple", "array", "set"],
    answer: "array"
  },
  {
    question: "What is the correct way to create a dictionary in Python?",
    options: ["{1: 'a', 2: 'b'}", "[1: 'a', 2: 'b']", "(1: 'a', 2: 'b')", "<1: 'a', 2: 'b'>"],
    answer: "{1: 'a', 2: 'b'}"
  },
  {
    question: "How do you insert COMMENTS in Python code?",
    options: ["// this is a comment", "<!-- comment -->", "# this is a comment", "** comment **"],
    answer: "# this is a comment"
  },
  {
    question: "Which operator is used for floor division in Python?",
    options: ["/", "//", "%", "**"],
    answer: "//"
  },
  {
    question: "How do you start a for loop in Python?",
    options: ["for i = 1 to 10:", "for i in range(10)", "for(i=0;i<10;i++)", "foreach i in range(10)"],
    answer: "for i in range(10)"
  },
  {
    question: "Which function is used to get the length of a list in Python?",
    options: ["length()", "len()", "count()", "size()"],
    answer: "len()"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

function showQuestion() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;

  const questionObj = pythonQuestions[currentQuestion];
  document.getElementById("question").textContent = questionObj.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  questionObj.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      endQuiz("Time's up! You Failed.");
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);
  const correct = pythonQuestions[currentQuestion].answer;
  const options = document.querySelectorAll("#options button");
  options.forEach(btn => {
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
    btn.disabled = true;
  });
  if (selected === correct) {
    score += 10;
  } else {
    score -= 5;
  }
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < pythonQuestions.length) {
      showQuestion();
    } else {
      endQuiz("Quiz Completed!");
    }
  }, 1000);
}

function endQuiz(message) {
  document.querySelector(".quiz-container").style.display = "none";
  const popup = document.getElementById("resultPopup");
  popup.style.display = "block";
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("scoreDisplay").textContent = score;
}

window.onload = showQuestion;