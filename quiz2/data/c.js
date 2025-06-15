const allQuestions = {
  easy: [
    {
      question: "Who is the father of C programming?",
      options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
      answer: "Dennis Ritchie"
    },
    {
      question: "Which symbol is used to end a statement in C?",
      options: [".", ":", ";", ","],
      answer: ";"
    },
    {
      question: "C is a ___ level language.",
      options: ["High", "Low", "Middle", "Machine"],
      answer: "Middle"
    },
    {
      question: "What is the file extension of a C file?",
      options: [".cpp", ".java", ".c", ".py"],
      answer: ".c"
    },
    {
      question: "Which data type is used for characters?",
      options: ["int", "char", "float", "double"],
      answer: "char"
    },
    {
      question: "What is the output of: printf(\"%d\", 5 + 3);",
      options: ["8", "53", "5+3", "Error"],
      answer: "8"
    },
    {
      question: "Which keyword is used to define a constant?",
      options: ["final", "const", "define", "constant"],
      answer: "const"
    },
    {
      question: "Which loop is guaranteed to run at least once?",
      options: ["for", "while", "do-while", "if"],
      answer: "do-while"
    },
    {
      question: "Which function is used to read input?",
      options: ["cin", "printf", "scanf", "gets"],
      answer: "scanf"
    },
    {
      question: "Which of the following is a valid identifier?",
      options: ["int", "2value", "_sum", "#total"],
      answer: "_sum"
    }
  ],

  medium: [
    {
      question: "What is the size of `int` on most systems?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
      answer: "4 bytes"
    },
    {
      question: "What will `5/2` return in C?",
      options: ["2.5", "2", "2.0", "Error"],
      answer: "2"
    },
    {
      question: "What is the correct syntax to declare an array?",
      options: ["int arr[] = {1, 2};", "arr[2] int;", "array arr = int;", "int arr = {1,2};"],
      answer: "int arr[] = {1, 2};"
    },
    {
      question: "Which of these is a loop structure in C?",
      options: ["switch", "do-while", "if", "case"],
      answer: "do-while"
    },
    {
      question: "What does `sizeof()` return?",
      options: ["Variable value", "Memory size", "Data type", "Pointer"],
      answer: "Memory size"
    },
    {
      question: "What is a pointer?",
      options: ["A variable", "A constant", "An address", "A function"],
      answer: "An address"
    },
    {
      question: "How do you declare a pointer?",
      options: ["int *p;", "pointer p;", "int &p;", "int -> p;"],
      answer: "int *p;"
    },
    {
      question: "Which of these is a logical operator?",
      options: ["&&", "&", "|", "||"],
      answer: "&&"
    },
    {
      question: "Which keyword is used for decision making?",
      options: ["for", "if", "goto", "struct"],
      answer: "if"
    },
    {
      question: "What is the index of the first element in an array?",
      options: ["1", "0", "-1", "Depends"],
      answer: "0"
    }
  ],

  hard: [
    {
      question: "What is a segmentation fault?",
      options: ["Syntax error", "Invalid memory access", "Loop error", "Compiler error"],
      answer: "Invalid memory access"
    },
    {
      question: "Which function is used to dynamically allocate memory?",
      options: ["calloc()", "alloc()", "mem()", "new()"],
      answer: "calloc()"
    },
    {
      question: "What is the output of `printf(\"%c\", 65);`?",
      options: ["65", "A", "B", "Error"],
      answer: "A"
    },
    {
      question: "Which header file includes malloc()?",
      options: ["<malloc.h>", "<stdio.h>", "<stdlib.h>", "<memory.h>"],
      answer: "<stdlib.h>"
    },
    {
      question: "Which function ends a program immediately?",
      options: ["break", "exit()", "stop", "close()"],
      answer: "exit()"
    },
    {
      question: "What does `*ptr++` do?",
      options: ["Increments pointer", "Increments value", "Assigns value", "Multiplies value"],
      answer: "Increments pointer"
    },
    {
      question: "How is a structure defined?",
      options: ["struct A {int x;};", "class A {}", "define struct", "data struct A {};"],
      answer: "struct A {int x;};"
    },
    {
      question: "What is the output: printf(\"%d\", sizeof('A'));",
      options: ["1", "2", "4", "Depends"],
      answer: "4"
    },
    {
      question: "What is `void` return type used for?",
      options: ["Returns nothing", "Returns void", "Returns int", "None"],
      answer: "Returns nothing"
    },
    {
      question: "Which of these is used to prevent header inclusion multiple times?",
      options: ["#define", "#ifndef", "#include", "#endif"],
      answer: "#ifndef"
    }
  ]
};
