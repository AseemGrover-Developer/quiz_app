const allQuestions = {
  easy: [
    {
      question: "Who developed Java?",
      options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"],
      answer: "James Gosling"
    },
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["function", "define", "class", "struct"],
      answer: "class"
    },
    {
      question: "Which of these is a valid Java variable name?",
      options: ["2number", "my-var", "myVariable", "new"],
      answer: "myVariable"
    },
    {
      question: "Which method is the entry point of any Java program?",
      options: ["start()", "main()", "run()", "execute()"],
      answer: "main()"
    },
    {
      question: "Which file extension is used for Java source files?",
      options: [".js", ".java", ".class", ".cpp"],
      answer: ".java"
    },
    {
      question: "Which symbol is used for single-line comments in Java?",
      options: ["//", "/*", "#", "<!--"],
      answer: "//"
    },
    {
      question: "What does JVM stand for?",
      options: ["Java Virtual Method", "Java Variable Model", "Java Virtual Machine", "Java Verified Memory"],
      answer: "Java Virtual Machine"
    },
    {
      question: "Which data type is used to store true or false in Java?",
      options: ["char", "int", "boolean", "bit"],
      answer: "boolean"
    },
    {
      question: "Which of these is not a Java primitive data type?",
      options: ["int", "float", "String", "char"],
      answer: "String"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implements", "inherits", "extends", "include"],
      answer: "extends"
    }
  ],

  medium: [
    {
      question: "What is the size of an int variable in Java?",
      options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
      answer: "4 bytes"
    },
    {
      question: "Which package contains Scanner class?",
      options: ["java.util", "java.io", "java.lang", "java.net"],
      answer: "java.util"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "none"],
      answer: "do-while"
    },
    {
      question: "Which keyword prevents method overriding?",
      options: ["static", "private", "final", "super"],
      answer: "final"
    },
    {
      question: "What is the default value of boolean in Java?",
      options: ["true", "false", "0", "null"],
      answer: "false"
    },
    {
      question: "Which access modifier allows visibility within package only?",
      options: ["public", "private", "protected", "default"],
      answer: "default"
    },
    {
      question: "Which method is used to read user input in Java?",
      options: ["System.in()", "Scanner.next()", "input()", "read()"],
      answer: "Scanner.next()"
    },
    {
      question: "Which class is the superclass of all classes in Java?",
      options: ["Object", "Class", "Base", "Super"],
      answer: "Object"
    },
    {
      question: "Which exception is thrown when a null object is accessed?",
      options: ["ArithmeticException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"],
      answer: "NullPointerException"
    },
    {
      question: "What is method overloading?",
      options: ["Same method name with different return type", "Same method name with different parameters", "Same class in different packages", "Extending a method"],
      answer: "Same method name with different parameters"
    }
  ],

  hard: [
    {
      question: "Which Java keyword is used to create a thread?",
      options: ["synchronized", "thread", "run", "implements Runnable"],
      answer: "implements Runnable"
    },
    {
      question: "What is the output of 5/2 in Java?",
      options: ["2.5", "2", "2.0", "Error"],
      answer: "2"
    },
    {
      question: "Which collection allows only unique elements?",
      options: ["List", "ArrayList", "Set", "Map"],
      answer: "Set"
    },
    {
      question: "What is the use of the 'super' keyword?",
      options: ["Access parent class constructor", "Call a static method", "Override a method", "Define a superclass"],
      answer: "Access parent class constructor"
    },
    {
      question: "Which operator is used for object comparison?",
      options: ["==", "equals()", "!=", "compare()"],
      answer: "equals()"
    },
    {
      question: "Which interface must be implemented for sorting?",
      options: ["Serializable", "Comparable", "Runnable", "Clonable"],
      answer: "Comparable"
    },
    {
      question: "Which stream is used for reading binary data?",
      options: ["FileReader", "BufferedReader", "FileInputStream", "Scanner"],
      answer: "FileInputStream"
    },
    {
      question: "Which keyword is used for exception handling?",
      options: ["throw", "exception", "try", "finally"],
      answer: "try"
    },
    {
      question: "What is the purpose of 'finally' block?",
      options: ["Catch exceptions", "Skip code", "Execute after try-catch", "Stop execution"],
      answer: "Execute after try-catch"
    },
    {
      question: "Which Java version introduced switch expressions?",
      options: ["Java 7", "Java 8", "Java 12", "Java 15"],
      answer: "Java 12"
    }
  ]
};
