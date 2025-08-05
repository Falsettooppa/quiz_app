const questions = [
  // EASY LEVEL QUESTIONS (1–20)
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
    difficulty: "easy",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
    difficulty: "easy",
  },
  {
    question: "Which is not a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    answer: "Float",
    difficulty: "easy",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
    ],
    answer: "alert('Hello World');",
    difficulty: "easy",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//",
    difficulty: "easy",
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>",
    difficulty: "easy",
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script ref='script.js'>",
      "<script name='script.js'>",
    ],
    answer: "<script src='script.js'>",
    difficulty: "easy",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "create myFunction()",
      "function:myFunction()",
      "def myFunction()",
    ],
    answer: "function myFunction()",
    difficulty: "easy",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
    difficulty: "easy",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    answer: "onclick",
    difficulty: "easy",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
    difficulty: "easy",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "!="],
    answer: "=",
    difficulty: "easy",
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5",
      "for (i <= 5; i++)",
      "for (i = 0; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
    difficulty: "easy",
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "** This is a comment **",
    ],
    answer: "// This is a comment",
    difficulty: "easy",
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    options: ["let", "int", "dim", "varname"],
    answer: "let",
    difficulty: "easy",
  },
  {
    question: "Which method can be used to find the length of a string?",
    options: ["length()", "getLength()", "len", "string.length"],
    answer: "string.length",
    difficulty: "easy",
  },
  {
    question: "Which symbol is used for strict equality comparison?",
    options: ["==", "=", "===", "!=="],
    answer: "===",
    difficulty: "easy",
  },
  {
    question: "Which method can add an element to the end of an array?",
    options: ["add()", "append()", "push()", "insert()"],
    answer: "push()",
    difficulty: "easy",
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["undefined", "null", "0", "false"],
    answer: "undefined",
    difficulty: "easy",
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["send", "return", "give", "output"],
    answer: "return",
    difficulty: "easy",
  },

  // MEDIUM LEVEL QUESTIONS (21–35)
  {
    question: "What is the output of typeof null in JavaScript?",
    options: ["null", "object", "undefined", "NaN"],
    answer: "object",
    difficulty: "medium",
  },
  {
    question: "What does the 'this' keyword refer to in a regular function?",
    options: [
      "Global object",
      "Current object",
      "Window",
      "It depends on the invocation context",
    ],
    answer: "It depends on the invocation context",
    difficulty: "medium",
  },
  {
    question: "Which built-in method removes the last element from an array and returns that element?",
    options: ["last()", "pop()", "get()", "remove()"],
    answer: "pop()",
    difficulty: "medium",
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "An inner function that has access to the outer enclosing function’s variables",
      "A function that closes a window",
      "A variable that is enclosed",
      "None of the above",
    ],
    answer: "An inner function that has access to the outer enclosing function’s variables",
    difficulty: "medium",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["const", "let", "var", "define"],
    answer: "const",
    difficulty: "medium",
  },
  {
    question: "What will be the result of 1 + '2' + '2'?",
    options: ["122", "5", "14", "32"],
    answer: "122",
    difficulty: "medium",
  },
  {
    question: "What is the result of 2 == '2'?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    difficulty: "medium",
  },
  {
    question: "Which array method sorts the elements of an array?",
    options: ["changeOrder(order)", "order()", "sort()", "arrange()"],
    answer: "sort()",
    difficulty: "medium",
  },
  {
    question: "How can you convert a string to an integer in JavaScript?",
    options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
    answer: "All of the above",
    difficulty: "medium",
  },
  {
    question: "What does the '===' operator do?",
    options: ["Assigns a value", "Compares value and type", "Compares only value", "Checks if true"],
    answer: "Compares value and type",
    difficulty: "medium",
  },
  {
    question: "What is the purpose of the JavaScript 'map' method?",
    options: [
      "To map two arrays",
      "To create a new array by transforming each element",
      "To delete elements from an array",
      "To check the length of an array",
    ],
    answer: "To create a new array by transforming each element",
    difficulty: "medium",
  },
  {
    question: "What does 'NaN' stand for?",
    options: ["Not a Number", "No assigned Name", "Negative and Null", "Null and Noted"],
    answer: "Not a Number",
    difficulty: "medium",
  },
  {
    question: "Which keyword is used to define an asynchronous function?",
    options: ["async", "await", "setTimeout", "defer"],
    answer: "async",
    difficulty: "medium",
  },
  {
    question: "Which object represents the browser window in JavaScript?",
    options: ["screen", "document", "window", "navigator"],
    answer: "window",
    difficulty: "medium",
  },

  // HARD LEVEL QUESTIONS (36–50)
  {
    question: "What will be the output of console.log(typeof NaN)?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
    difficulty: "hard",
  },
  {
    question: "What is the purpose of the 'bind' method in JavaScript?",
    options: [
      "To create a new function with a specific 'this' value",
      "To execute a function",
      "To delay function execution",
      "To remove an object",
    ],
    answer: "To create a new function with a specific 'this' value",
    difficulty: "hard",
  },
  {
    question: "What is the output of 'false == 0'?",
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
    difficulty: "hard",
  },
  {
    question: "Which of the following is NOT a JavaScript framework?",
    options: ["React", "Angular", "Laravel", "Vue"],
    answer: "Laravel",
    difficulty: "hard",
  },
  {
    question: "What is tail call optimisation?",
    options: [
      "An optimisation for recursive functions",
      "A way to handle exceptions",
      "A design pattern",
      "A memory leak issue",
    ],
    answer: "An optimisation for recursive functions",
    difficulty: "hard",
  },
  {
    question: "Which method is used to serialize an object into a JSON string?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.serialize()"],
    answer: "JSON.stringify()",
    difficulty: "hard",
  },
  {
    question: "What is the purpose of the 'Object.create' method?",
    options: [
      "To instantiate a new object",
      "To create a new object with a specified prototype",
      "To clone an object",
      "To delete an object",
    ],
    answer: "To create a new object with a specified prototype",
    difficulty: "hard",
  },
  {
    question: "What is a promise in JavaScript?",
    options: [
      "A value that may be available now, later, or never",
      "A type of variable",
      "A conditional statement",
      "None of the above",
    ],
    answer: "A value that may be available now, later, or never",
    difficulty: "hard",
  },
  {
    question: "Which function is used to delay execution in JavaScript?",
    options: ["setInterval()", "setTimeout()", "delay()", "pause()"],
    answer: "setTimeout()",
    difficulty: "hard",
  },
  {
    question: "What is a JavaScript generator?",
    options: [
      "A function that can be paused and resumed",
      "A loop",
      "A class",
      "An array method",
    ],
    answer: "A function that can be paused and resumed",
    difficulty: "hard",
  },
  {
    question: "What is the use of Symbol in JavaScript?",
    options: [
      "To create unique object property keys",
      "To define class methods",
      "To instantiate arrays",
      "To clone objects",
    ],
    answer: "To create unique object property keys",
    difficulty: "hard",
  }
];

// Organize into difficulty levels
window.allQuestions = {
  easy: questions.filter(q => q.difficulty === 'easy'),
  medium: questions.filter(q => q.difficulty === 'medium'),
  hard: questions.filter(q => q.difficulty === 'hard')
};

