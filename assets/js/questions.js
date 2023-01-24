//message correct or wrong
var message = document.querySelector("#feedback")
var Showmessage = document.createElement("div");
Showmessage.textContent = "";
message.appendChild(Showmessage);

//questions
let questions = [  {    question: "Arrays is JavaScript can be used to store ___________",    answers: [      "1. numbers and strings",      "2. other arrays",      "3. booleans",      "4. All of above"    ],
    correctAnswer: "4. All of above"
  },

  {    question: "commonly used data types DO not Include:",    answers: [      "1. Strings",      "2. Booleans",      "3. Alerts",      "4. Numbers"    ],
    correctAnswer: "3. Alerts"
  },
  {    question: "What is the syntax for a for loop in JavaScript?",    answers: [      "1. for (let i = 0; i < 10; i++)",      "2. for i in range(10)",      "3. for (i = 0; i < 10; i++)",      "4. for i = 1 to 10"    ],
    correctAnswer: "1. for (let i = 0; i < 10; i++)"
  },
  {    question: "A very useful tool used during development and debugging for printing content to the debugger is:",    answers: [      "1. JavaScript",      "2. terminal/bash",      "3. console.log",      "4. for loops"    ],
    correctAnswer: "3. console.log"
  },
  {    question: "The condition in an if/else statement is enclosed with ________.",    answers: [      "1. quotes",      "2. curly brackets",      "3. parenthesis",      "4. square brackets"    ],
    correctAnswer: "2. curly brackets"
  },
  {    question: "Strings values must be enclosed within ______ when being assigned to variables.",    answers: [      "1. commas",      "2. curly brackets",      "3. quotes",      "4. parenthesis"    ],
    correctAnswer: "3. quotes"
  },
  
];

























