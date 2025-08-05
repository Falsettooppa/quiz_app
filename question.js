const questions = [
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    answer: "Float",
  },
  {
    question: "What does `typeof NaN` return?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number",
  },
  {
    question: "Which method converts JSON data into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toJS()"],
    answer: "JSON.parse()",
  },
  {
    question: "What is the output of: `console.log(0.1 + 0.2 === 0.3);`",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you declare a constant in JavaScript?",
    options: ["let", "var", "constant", "const"],
    answer: "const",
  },
  {
    question: "Which of these is not a falsy value?",
    options: ["0", "''", "null", "'false'"],
    answer: "'false'",
  },
  {
    question: "Which symbol is used for optional chaining in JavaScript?",
    options: [".", "?", "?.", "??"],
    answer: "?.",
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "===", "=", "!="],
    answer: "===",
  },
  {
    question: "How do you write an arrow function with one parameter named `x`?",
    options: ["x => x*2", "(x) => x*2", "function(x) => x*2", "Both A and B"],
    answer: "Both A and B",
  },
  {
    question: "What will `typeof null` return?",
    options: ["null", "object", "undefined", "NaN"],
    answer: "object",
  },
  {
    question: "Which JavaScript method is used to delay execution?",
    options: ["setInterval()", "setTimeout()", "sleep()", "delay()"],
    answer: "setTimeout()",
  },
  {
    question: "What is the output of `true + false`?",
    options: ["truefalse", "1", "0", "NaN"],
    answer: "1",
  },
  {
    question: "Which keyword is used to define a class in JavaScript?",
    options: ["object", "prototype", "class", "function"],
    answer: "class",
  },
  {
    question: "How do you access the first element of an array named `colors`?",
    options: ["colors[1]", "colors(0)", "colors[0]", "colors.first"],
    answer: "colors[0]",
  },
  {
    question: "Which array method adds one or more elements to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "What does `map()` return?",
    options: ["A new array", "Nothing", "Same array", "An object"],
    answer: "A new array",
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "0", "undefined", "NaN"],
    answer: "undefined",
  },
  {
    question: "Which of these is used to import modules in modern JavaScript?",
    options: ["#include", "require()", "import", "fetch"],
    answer: "import",
  },
  {
    question: "How can you copy an array using spread syntax?",
    options: ["let newArr = [...arr]", "let newArr = arr.copy()", "let newArr = arr.map()", "let newArr = arr.clone()"],
    answer: "let newArr = [...arr]",
  },
  {
    question: "What is the purpose of `async` keyword?",
    options: ["To define a callback", "To pause execution", "To handle promises", "To make a function return a promise"],
    answer: "To make a function return a promise",
  },
  {
    question: "How do you handle errors in async/await code?",
    options: ["try/catch", "then/catch", "await/catch", "if/else"],
    answer: "try/catch",
  },
  {
    question: "Which keyword creates a block scope variable?",
    options: ["var", "let", "scope", "static"],
    answer: "let",
  },
  {
    question: "What is the output of `[...'Hello']`?",
    options: ["['Hello']", "['H','e','l','l','o']", "['H', 'ello']", "Error"],
    answer: "['H','e','l','l','o']",
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    answer: "pop()",
  },
  {
    question: "Which event is fired when a user clicks an HTML element?",
    options: ["onhover", "onchange", "onclick", "onpress"],
    answer: "onclick",
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Dynamic Object Mode", "Display Object Manipulation"],
    answer: "Document Object Model",
  },
  {
    question: "How can you prevent the default action of a form submit?",
    options: ["stop()", "event.preventDefault()", "return false", "cancel()"],
    answer: "event.preventDefault()",
  },
  {
    question: "Which method is used to select an element by its ID?",
    options: ["getElementByName()", "querySelector()", "getElementById()", "getId()"],
    answer: "getElementById()",
  },
  {
    question: "How do you remove an element from the DOM?",
    options: [".delete()", ".remove()", ".detach()", ".pop()"],
    answer: ".remove()",
  },
  {
    question: "What is the output of `typeof []`?",
    options: ["array", "object", "list", "undefined"],
    answer: "object",
  },
  {
    question: "What will `Boolean('false')` return?",
    options: ["false", "true", "undefined", "null"],
    answer: "true",
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["parseInt()", "parseFloat()", "toInteger()", "Number()"],
    answer: "parseInt()",
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment", "/* comment"],
    answer: "// comment",
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "A function inside a class",
      "A function having access to its outer scope",
      "A class object",
      "A callback function"
    ],
    answer: "A function having access to its outer scope",
  },
  {
    question: "What will be returned: `typeof undefined == typeof null`?",
    options: ["true", "false", "Error", "undefined"],
    answer: "true",
  },
  {
    question: "How many values can a promise have?",
    options: ["1", "2", "3", "Unlimited"],
    answer: "3 (pending, fulfilled, rejected)",
  },
  {
    question: "Which function will merge two arrays?",
    options: ["concat()", "merge()", "spread()", "append()"],
    answer: "concat()",
  },
  {
    question: "What is hoisting?",
    options: [
      "Variable declaration moved to top",
      "Looping mechanism",
      "Error handling method",
      "Memory saving technique"
    ],
    answer: "Variable declaration moved to top",
  },
  {
    question: "Which method filters elements in an array?",
    options: ["filter()", "select()", "reduce()", "map()"],
    answer: "filter()",
  },
  {
    question: "Which statement ends a loop?",
    options: ["stop", "end", "break", "exit"],
    answer: "break",
  },
  {
    question: "Which JavaScript keyword is used to inherit from another class?",
    options: ["extends", "inherits", "super", "prototype"],
    answer: "extends",
  },
  {
    question: "What is the purpose of `super()` in a constructor?",
    options: [
      "To call parent class constructor",
      "To override method",
      "To create instance",
      "To declare private variable"
    ],
    answer: "To call parent class constructor",
  },
  {
    question: "Which of the following is a primitive data type?",
    options: ["Array", "Object", "Number", "Date"],
    answer: "Number",
  },
  {
    question: "What does `JSON.stringify()` do?",
    options: [
      "Parses a JSON string",
      "Converts a JS object to JSON",
      "Validates JSON",
      "Converts string to object"
    ],
    answer: "Converts a JS object to JSON",
  },
  {
    question: "Which method is used to chain Promises?",
    options: ["next()", "await", "then()", "catch()"],
    answer: "then()",
  },
  {
    question: "What is `this` keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to global window",
      "A reserved word",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "How do you check if a value is an array?",
    options: [
      "value.type == 'array'",
      "Array.isArray(value)",
      "value instanceof array",
      "typeof value == 'array'"
    ],
    answer: "Array.isArray(value)",
  },
  {
    question: "What will be the result of `false == '0'`?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  }
];
