const allQuestions = {
  easy: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML tag is used to link an external CSS file?",
      options: ["<link>", "<style>", "<css>", "<script>"],
      answer: "<link>"
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-color", "color", "text-color", "background-color"],
      answer: "color"
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["font-style: bold;", "font-weight: bold;", "bold: true;", "text-weight: bold;"],
      answer: "font-weight: bold;"
    },
    {
      question: "Which property sets the background color?",
      options: ["color", "bgcolor", "background", "background-color"],
      answer: "background-color"
    },
    {
      question: "How do you select an element with id 'main'?",
      options: ["#main", ".main", "main", "*main"],
      answer: "#main"
    },
    {
      question: "How do you select all paragraph elements?",
      options: ["#p", "*p", "p", ".p"],
      answer: "p"
    },
    {
      question: "Which CSS unit is relative to the root element?",
      options: ["em", "rem", "%", "px"],
      answer: "rem"
    },
    {
      question: "Which CSS property controls the size of text?",
      options: ["text-size", "font-size", "size", "font-style"],
      answer: "font-size"
    },
    {
      question: "What does 'px' stand for in CSS?",
      options: ["Pixels", "Percentage", "Points", "Parts"],
      answer: "Pixels"
    }
  ],

  medium: [
    {
      question: "Which property is used to make rounded corners?",
      options: ["corner-radius", "border-radius", "round-corner", "radius"],
      answer: "border-radius"
    },
    {
      question: "How do you apply a style to all elements?",
      options: ["*", "all", "body", "html"],
      answer: "*"
    },
    {
      question: "Which CSS property makes an element invisible but still takes space?",
      options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
      answer: "visibility: hidden"
    },
    {
      question: "What is the default position value in CSS?",
      options: ["relative", "absolute", "static", "fixed"],
      answer: "static"
    },
    {
      question: "Which CSS property adds space inside the border?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      answer: "padding"
    },
    {
      question: "Which property adds space outside the border?",
      options: ["padding", "gap", "margin", "spacing"],
      answer: "margin"
    },
    {
      question: "How do you make a flex container?",
      options: ["display: block", "display: inline", "display: flex", "flex: container"],
      answer: "display: flex"
    },
    {
      question: "What value of z-index places an element on top?",
      options: ["0", "-1", "auto", "Higher value"],
      answer: "Higher value"
    },
    {
      question: "Which property is used for transparency?",
      options: ["opacity", "alpha", "visibility", "display"],
      answer: "opacity"
    },
    {
      question: "Which property is used to change the font of text?",
      options: ["font-type", "text-style", "font-family", "text-font"],
      answer: "font-family"
    }
  ],

  hard: [
    {
      question: "Which value of `position` allows positioning relative to the viewport?",
      options: ["absolute", "relative", "fixed", "sticky"],
      answer: "fixed"
    },
    {
      question: "Which selector targets elements inside another element?",
      options: ["E > F", "E + F", "E F", "E ~ F"],
      answer: "E F"
    },
    {
      question: "What is the default `flex-direction`?",
      options: ["row", "column", "row-reverse", "none"],
      answer: "row"
    },
    {
      question: "Which property is used to align items in the center (flex)?",
      options: ["align-center", "justify-content: center", "text-align: center", "center-align"],
      answer: "justify-content: center"
    },
    {
      question: "What does `calc()` function do in CSS?",
      options: [
        "Calculate media queries",
        "Performs math operations in values",
        "Adds styles dynamically",
        "Resets margin and padding"
      ],
      answer: "Performs math operations in values"
    },
    {
      question: "How do you animate an element using CSS?",
      options: ["@keyframes", "@motion", "@transition", "@move"],
      answer: "@keyframes"
    },
    {
      question: "Which CSS function is used for gradients?",
      options: ["color-gradient()", "gradient()", "linear-gradient()", "bg-gradient()"],
      answer: "linear-gradient()"
    },
    {
      question: "Which property controls stacking order?",
      options: ["index", "stack", "z-order", "z-index"],
      answer: "z-index"
    },
    {
      question: "What is the difference between em and rem?",
      options: [
        "em is root-based, rem is parent-based",
        "rem is root-based, em is parent-based",
        "Both are same",
        "None of the above"
      ],
      answer: "rem is root-based, em is parent-based"
    },
    {
      question: "Which pseudo-class selects the first child?",
      options: [":first", ":first-child", ":start", ":begin"],
      answer: ":first-child"
    }
  ]
};
