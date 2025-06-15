const allQuestions = {
  easy: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".pt", ".pyt", ".python"],
      answer: ".py"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "define", "def", "function"],
      answer: "def"
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/*", "<!--"],
      answer: "#"
    },
    {
      question: "Which function is used to output data in Python?",
      options: ["echo()", "print()", "output()", "write()"],
      answer: "print()"
    },
    {
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "exp", "^^"],
      answer: "**"
    },
    {
      question: "Which data type is used to store True or False?",
      options: ["bool", "int", "char", "str"],
      answer: "bool"
    },
    {
      question: "How do you create a variable with the value 10?",
      options: ["x = 10", "int x = 10", "x := 10", "10 = x"],
      answer: "x = 10"
    },
    {
      question: "Which keyword is used for conditional branching?",
      options: ["if", "case", "when", "choose"],
      answer: "if"
    },
    {
      question: "What is the output of: print(2 + 3 * 2)?",
      options: ["10", "12", "8", "9"],
      answer: "8"
    },
    {
      question: "Which of these is a valid variable name?",
      options: ["1value", "_value", "value-1", "value!"],
      answer: "_value"
    }
  ],

  medium: [
    {
      question: "What is the output of: len('Python')?",
      options: ["5", "6", "7", "Error"],
      answer: "6"
    },
    {
      question: "Which data type is immutable?",
      options: ["list", "dict", "set", "tuple"],
      answer: "tuple"
    },
    {
      question: "How do you start a for loop in Python?",
      options: [
        "for (i in range):",
        "for i = range():",
        "for i in range():",
        "foreach i in range():"
      ],
      answer: "for i in range():"
    },
    {
      question: "What is the output of: bool(0)?",
      options: ["True", "False", "0", "Error"],
      answer: "False"
    },
    {
      question: "Which keyword is used to handle exceptions?",
      options: ["catch", "try", "throw", "except"],
      answer: "except"
    },
    {
      question: "Which method is used to add an item to a list?",
      options: ["insert()", "push()", "append()", "add()"],
      answer: "append()"
    },
    {
      question: "How do you define a dictionary in Python?",
      options: [
        "[]",
        "()",
        "{}",
        "<>"
      ],
      answer: "{}"
    },
    {
      question: "Which function converts a string to an integer?",
      options: ["str()", "int()", "eval()", "float()"],
      answer: "int()"
    },
    {
      question: "Which module is used to generate random numbers?",
      options: ["math", "time", "random", "numbers"],
      answer: "random"
    },
    {
      question: "Which method returns the index of a value in a list?",
      options: ["find()", "search()", "index()", "locate()"],
      answer: "index()"
    }
  ],

  hard: [
    {
      question: "What is a lambda function?",
      options: [
        "A type of loop",
        "An anonymous function",
        "A module",
        "A data type"
      ],
      answer: "An anonymous function"
    },
    {
      question: "What will `print(type([]))` return?",
      options: [
        "<class 'list'>",
        "<type 'list'>",
        "list",
        "<list>"
      ],
      answer: "<class 'list'>"
    },
    {
      question: "What is the output of: 3 <= 3 and 3 >= 3?",
      options: ["True", "False", "None", "Error"],
      answer: "True"
    },
    {
      question: "Which of these is used to define a class?",
      options: ["object", "def", "class", "struct"],
      answer: "class"
    },
    {
      question: "How do you raise an exception?",
      options: ["throw", "raise", "error", "except"],
      answer: "raise"
    },
    {
      question: "What is the purpose of `__init__` in a class?",
      options: [
        "Destructor",
        "Main method",
        "Initializer/Constructor",
        "Compiler"
      ],
      answer: "Initializer/Constructor"
    },
    {
      question: "Which keyword is used for inheritance?",
      options: ["inherits", "extends", "super", "class(Subclass)"],
      answer: "class(Subclass)"
    },
    {
      question: "Which operator is used to check identity?",
      options: ["==", "is", "=", "!"],
      answer: "is"
    },
    {
      question: "What does the `pass` statement do?",
      options: [
        "Skips the current loop",
        "Ends the function",
        "Does nothing",
        "Breaks the program"
      ],
      answer: "Does nothing"
    },
    {
      question: "Which of the following is a Python generator expression?",
      options: [
        "[x for x in range(5)]",
        "{x for x in range(5)}",
        "(x for x in range(5))",
        "<x for x in range(5)>"
      ],
      answer: "(x for x in range(5))"
    }
  ]
};
