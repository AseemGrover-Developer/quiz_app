const allQuestions = {
  easy: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the correct extension for JavaScript files?",
      options: [".js", ".java", ".script", ".txt"],
      answer: ".js"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/*", "#", "<!--"],
      answer: "//"
    },
    {
      question: "Which method is used to display a message in a dialog box?",
      options: ["prompt()", "console.log()", "alert()", "message()"],
      answer: "alert()"
    },
    {
      question: "JavaScript runs on the:",
      options: ["Server", "Browser", "Compiler", "Terminal"],
      answer: "Browser"
    },
    {
      question: "How do you write 'Hello' in the console?",
      options: ["console('Hello')", "log('Hello')", "console.log('Hello')", "echo('Hello')"],
      answer: "console.log('Hello')"
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "block", "let", "int"],
      answer: "let"
    },
    {
      question: "Which data type is NOT in JavaScript?",
      options: ["String", "Boolean", "Character", "Number"],
      answer: "Character"
    },
    {
      question: "How do you create an array in JavaScript?",
      options: ["()", "[]", "{}", "<>"],
      answer: "[]"
    },
    {
      question: "What is the output of typeof 'hello'?",
      options: ["text", "string", "str", "word"],
      answer: "string"
    }
  ],

  medium: [
    {
      question: "What does the === operator do?",
      options: ["Checks value only", "Assigns value", "Checks value and type", "Checks type only"],
      answer: "Checks value and type"
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parse.JSON()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      answer: "React"
    },
    {
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "^^", "%"],
      answer: "**"
    },
    {
      question: "How to define a function in JavaScript?",
      options: ["function myFunc()", "def myFunc()", "fun myFunc()", "void myFunc()"],
      answer: "function myFunc()"
    },
    {
      question: "How do you add a comment block in JavaScript?",
      options: ["<!-- -->", "/* */", "//", "{ }"],
      answer: "/* */"
    },
    {
      question: "Which method is used to add an element at the end of an array?",
      options: ["push()", "pop()", "shift()", "append()"],
      answer: "push()"
    },
    {
      question: "How to check if a value is NaN?",
      options: ["isNaN()", "isNull()", "isUndefined()", "NaN()"],
      answer: "isNaN()"
    },
    {
      question: "Which value is falsy in JavaScript?",
      options: ["0", "false", "''", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is closure in JavaScript?",
      options: ["Nested loop", "Function within function with scope access", "Block of code", "Class method"],
      answer: "Function within function with scope access"
    }
  ],

  hard: [
    {
      question: "Which method is used to make asynchronous requests?",
      options: ["fetch()", "get()", "post()", "request()"],
      answer: "fetch()"
    },
    {
      question: "What is the result of '2' + 2 in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      answer: "22"
    },
    {
      question: "What is a promise in JavaScript?",
      options: ["Object representing future value", "Function call", "Loop", "Variable"],
      answer: "Object representing future value"
    },
    {
      question: "What does the 'this' keyword refer to?",
      options: ["Current function", "Global scope", "Object calling the function", "None"],
      answer: "Object calling the function"
    },
    {
      question: "Which loop is best for iterating over objects?",
      options: ["for", "while", "for...in", "for...of"],
      answer: "for...in"
    },
    {
      question: "Which function is used to delay code execution?",
      options: ["wait()", "timeout()", "setTimeout()", "delay()"],
      answer: "setTimeout()"
    },
    {
      question: "Which built-in object is used for regular expressions?",
      options: ["Math", "RegExp", "Regex", "Text"],
      answer: "RegExp"
    },
    {
      question: "What is the result of typeof null?",
      options: ["null", "undefined", "object", "NaN"],
      answer: "object"
    },
    {
      question: "What is event bubbling?",
      options: ["Propagating from inner to outer element", "Going backward in event chain", "Event stopped midway", "Error in DOM"],
      answer: "Propagating from inner to outer element"
    },
    {
      question: "Which JavaScript feature allows writing asynchronous code more naturally?",
      options: ["Callback", "Promise", "async/await", "Generator"],
      answer: "async/await"
    }
  ]
};
