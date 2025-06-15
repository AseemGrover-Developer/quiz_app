const allQuestions = {
  easy: [
    {
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "Private Home Page",
        "Preprocessed Hyper Pages",
        "PHP: Hypertext Preprocessor"
      ],
      answer: "PHP: Hypertext Preprocessor"
    },
    {
      question: "Which symbol is used to start a PHP variable?",
      options: ["&", "%", "$", "#"],
      answer: "$"
    },
    {
      question: "Which function is used to output text in PHP?",
      options: ["echo()", "write()", "printText()", "say()"],
      answer: "echo()"
    },
    {
      question: "Which of the following is a valid PHP variable?",
      options: ["1var", "$_name", "var-name", "#value"],
      answer: "$_name"
    },
    {
      question: "How does a PHP script start?",
      options: ["<php>", "<?php", "<script>", "<?script>"],
      answer: "<?php"
    },
    {
      question: "PHP is a...",
      options: ["Client-side language", "Server-side language", "Markup language", "Database"],
      answer: "Server-side language"
    },
    {
      question: "Which operator is used to concatenate strings in PHP?",
      options: ["+", "&", ".", "*"],
      answer: "."
    },
    {
      question: "Which function is used to get the length of a string in PHP?",
      options: ["len()", "count()", "strlen()", "length()"],
      answer: "strlen()"
    },
    {
      question: "What does `isset()` do?",
      options: [
        "Checks if a variable is declared and not null",
        "Creates a variable",
        "Destroys a variable",
        "Displays variable name"
      ],
      answer: "Checks if a variable is declared and not null"
    },
    {
      question: "Which tag is used to write PHP code?",
      options: ["<script>", "<?php ?>", "<php></php>", "<% %>"],
      answer: "<?php ?>"
    }
  ],

  medium: [
    {
      question: "Which superglobal is used to collect form data sent with POST method?",
      options: ["$_GET", "$POST", "$_POST", "$POSTDATA"],
      answer: "$_POST"
    },
    {
      question: "How do you define a constant in PHP?",
      options: ["var MYVAL = 10;", "const MYVAL = 10;", "define('MYVAL', 10);", "let MYVAL = 10;"],
      answer: "define('MYVAL', 10);"
    },
    {
      question: "Which loop is guaranteed to run at least once?",
      options: ["for", "while", "do...while", "foreach"],
      answer: "do...while"
    },
    {
      question: "What is the output of `echo 5 == '5';`?",
      options: ["false", "true", "error", "null"],
      answer: "true"
    },
    {
      question: "How do you connect to a MySQL database in PHP (procedural)?",
      options: ["mysql_connect()", "mysqli_connect()", "db_connect()", "pdo_connect()"],
      answer: "mysqli_connect()"
    },
    {
      question: "Which function is used to include another file in PHP?",
      options: ["require()", "link()", "attach()", "echo()"],
      answer: "require()"
    },
    {
      question: "What does `empty()` function do?",
      options: ["Checks if variable is undefined", "Checks if variable is 0", "Checks if variable is empty", "Checks if variable is null"],
      answer: "Checks if variable is empty"
    },
    {
      question: "Which statement is used to end script execution?",
      options: ["return", "exit", "stop", "end"],
      answer: "exit"
    },
    {
      question: "How are arrays created in PHP?",
      options: ["array()", "new Array()", "list()", "{}"],
      answer: "array()"
    },
    {
      question: "Which method is used to prevent SQL injection?",
      options: ["Using echo", "Using GET", "Prepared statements", "Session filtering"],
      answer: "Prepared statements"
    }
  ],

  hard: [
    {
      question: "Which PHP function is used to send email?",
      options: ["email_send()", "sendMail()", "mail()", "postMail()"],
      answer: "mail()"
    },
    {
      question: "Which function is used to start a session in PHP?",
      options: ["session_open()", "start_session()", "session_start()", "begin_session()"],
      answer: "session_start()"
    },
    {
      question: "What does `$_SERVER['REQUEST_METHOD']` return?",
      options: ["GET or POST", "SERVER IP", "Current file name", "Page name"],
      answer: "GET or POST"
    },
    {
      question: "How do you declare a class in PHP?",
      options: ["function ClassName {}", "class ClassName {}", "def ClassName {}", "create ClassName {}"],
      answer: "class ClassName {}"
    },
    {
      question: "Which function is used to convert special characters to HTML entities?",
      options: ["encode()", "htmlentities()", "specialchars()", "htmlspecial()"],
      answer: "htmlentities()"
    },
    {
      question: "Which PHP feature helps to handle exceptions?",
      options: ["catch-try", "try-catch", "exception()", "if-else"],
      answer: "try-catch"
    },
    {
      question: "What is the default port for MySQL?",
      options: ["3306", "8080", "1433", "1521"],
      answer: "3306"
    },
    {
      question: "What will `count([1, 2, 3, 4])` return?",
      options: ["3", "4", "5", "1"],
      answer: "4"
    },
    {
      question: "Which function is used to destroy a session?",
      options: ["session_stop()", "end_session()", "session_destroy()", "session_close()"],
      answer: "session_destroy()"
    },
    {
      question: "Which function is used to hash passwords in PHP (modern)?",
      options: ["md5()", "sha1()", "password_hash()", "encode()"],
      answer: "password_hash()"
    }
  ]
};
