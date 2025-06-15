const allQuestions = {
  easy: [
    {
      question: "Who developed C++?",
      options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
      answer: "Bjarne Stroustrup"
    },
    {
      question: "Which of the following is a correct extension of C++ files?",
      options: [".c", ".cpp", ".cp", ".cxx"],
      answer: ".cpp"
    },
    {
      question: "Which operator is used to insert data into output stream?",
      options: ["<<", ">>", "<=", ">="],
      answer: "<<"
    },
    {
      question: "Which of these is not a data type in C++?",
      options: ["int", "char", "float", "stringify"],
      answer: "stringify"
    },
    {
      question: "Which header file is used for input/output in C++?",
      options: ["iostream", "stdio.h", "conio.h", "math.h"],
      answer: "iostream"
    },
    {
      question: "What is the correct way to start main function in C++?",
      options: ["void main()", "start()", "main()", "int main()"],
      answer: "int main()"
    },
    {
      question: "Which keyword is used to define a class?",
      options: ["object", "struct", "class", "define"],
      answer: "class"
    },
    {
      question: "Which symbol is used for single-line comment in C++?",
      options: ["//", "/*", "#", "--"],
      answer: "//"
    },
    {
      question: "Which of the following is used for dynamic memory allocation?",
      options: ["malloc", "alloc", "new", "define"],
      answer: "new"
    },
    {
      question: "What will `cout << 2 + 3;` output?",
      options: ["2 + 3", "5", "Error", "23"],
      answer: "5"
    }
  ],

  medium: [
    {
      question: "What is encapsulation?",
      options: [
        "Wrapping data and functions",
        "Inheritance of classes",
        "Overriding base class",
        "Accessing private data"
      ],
      answer: "Wrapping data and functions"
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["extends", "inherits", "derived", "public"],
      answer: "public"
    },
    {
      question: "What is a constructor?",
      options: [
        "Function with return type",
        "Member function to initialize objects",
        "Function to destroy objects",
        "Static method"
      ],
      answer: "Member function to initialize objects"
    },
    {
      question: "Which concept allows function overloading?",
      options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
      answer: "Polymorphism"
    },
    {
      question: "Which access specifier makes members accessible to child classes only?",
      options: ["private", "protected", "public", "internal"],
      answer: "protected"
    },
    {
      question: "Which keyword is used to create an object?",
      options: ["class", "object", "new", "create"],
      answer: "new"
    },
    {
      question: "What is the use of 'this' pointer?",
      options: [
        "Refers to current object",
        "Access parent class",
        "Destroy object",
        "Returns pointer"
      ],
      answer: "Refers to current object"
    },
    {
      question: "Which operator is overloaded to input data?",
      options: ["<<", ">>", "==", "!="],
      answer: ">>"
    },
    {
      question: "What is the default access specifier for class members?",
      options: ["private", "protected", "public", "none"],
      answer: "private"
    },
    {
      question: "Which function is automatically called when object is destroyed?",
      options: ["constructor", "main", "delete", "destructor"],
      answer: "destructor"
    }
  ],

  hard: [
    {
      question: "What is the use of virtual functions?",
      options: [
        "For static polymorphism",
        "For dynamic polymorphism",
        "To hide data",
        "To define templates"
      ],
      answer: "For dynamic polymorphism"
    },
    {
      question: "Which of these can be overloaded?",
      options: ["if", "class", "function", "switch"],
      answer: "function"
    },
    {
      question: "Which feature allows reusability of code?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: "Inheritance"
    },
    {
      question: "What is the output of sizeof(char)?",
      options: ["2", "4", "1", "8"],
      answer: "1"
    },
    {
      question: "Which concept hides internal details?",
      options: ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
      answer: "Abstraction"
    },
    {
      question: "What does the `delete` operator do?",
      options: ["Free memory", "Allocate memory", "Copy data", "Create array"],
      answer: "Free memory"
    },
    {
      question: "Which keyword is used for templates?",
      options: ["class", "template", "generic", "define"],
      answer: "template"
    },
    {
      question: "Which of these is not a type of inheritance?",
      options: ["Single", "Double", "Multiple", "Ternary"],
      answer: "Ternary"
    },
    {
      question: "What is a pure virtual function?",
      options: [
        "Function without return",
        "Function with no parameters",
        "Function declared with = 0",
        "Function with inline logic"
      ],
      answer: "Function declared with = 0"
    },
    {
      question: "Which of the following is true about abstract classes?",
      options: [
        "Can be instantiated",
        "Cannot contain pure virtual function",
        "Used as base class only",
        "Must contain only virtual functions"
      ],
      answer: "Used as base class only"
    }
  ]
};
