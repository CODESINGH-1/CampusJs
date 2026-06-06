const lessons = [
  {
    title: "Introduction to JavaScript",
    description:
      "JavaScript helps us add logic and interaction to a website.",

    theory:
      "When we create a website, HTML gives the page its structure and CSS makes it look good. JavaScript adds life to the website. It helps us respond to button clicks, validate forms, show quiz results, update content, create animations, and much more. In simple words, JavaScript is the language that makes a website interactive.",

    points: [
      "JavaScript is mainly used to make websites interactive.",
      "It works together with HTML and CSS.",
      "It can respond to user actions like clicks, typing, and form submissions.",
      "It can change webpage content without refreshing the page.",
      "JavaScript can also be used for backend development with Node.js."
    ],

    useCase:
      "You will use JavaScript in quizzes, login forms, calculators, menus, games, dashboards, animations, and many real-world websites.",

    code: `console.log("Welcome to JavaScript");

let student = "CampusJS Student";
console.log(student);`,

    output: `Welcome to JavaScript
CampusJS Student`
  },

  {
    title: "Data Types in JavaScript",
    description:
      "Data types tell us what kind of value is stored inside a variable.",

    theory:
      "In JavaScript, every value has a type. For example, text is stored as a string, numbers are stored as number, and true or false values are stored as boolean. If a variable is declared but no value is assigned, its type becomes undefined. Objects and arrays help us store multiple values in a structured way. Understanding data types is important because JavaScript behaves differently with different types of data.",

    points: [
      "String is used to store text.",
      "Number is used to store numeric values.",
      "Boolean stores true or false.",
      "Undefined means a variable has no assigned value.",
      "Null means an empty value is intentionally assigned.",
      "Objects store data in key-value pairs.",
      "Arrays store multiple values in one variable."
    ],

    useCase:
      "Data types are used to store names, marks, prices, login status, quiz answers, product details, and student records.",

    code: `let studentName = "CampusJS Student";
let age = 20;
let isStudent = true;
let marks;
let emptyValue = null;

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof marks);
console.log(typeof emptyValue);`,

    output: `string
number
boolean
undefined
object`
  },

  {
    title: "Operators in JavaScript",
    description:
      "Operators are used to perform operations on values and variables.",

    theory:
      "Operators help us perform basic actions in JavaScript. We use arithmetic operators for calculations, comparison operators to compare values, assignment operators to store values, and logical operators to combine conditions. Without operators, it would be difficult to calculate, compare, or make decisions in a program.",

    points: [
      "Arithmetic operators are used for calculations.",
      "Assignment operators assign values to variables.",
      "Comparison operators compare two values.",
      "Logical operators combine multiple conditions.",
      "Operators are commonly used in conditions, loops, and calculations."
    ],

    useCase:
      "Operators are used in calculators, marks calculation, login checks, shopping cart totals, form validation, and decision-making logic.",

    code: `let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a > b);`,

    output: `15
5
50
2
true`
  },

  {
    title: "Operators and Math Functions",
    description:
      "Math functions help us perform common mathematical tasks easily.",

    theory:
      "JavaScript has a built-in Math object that provides many useful functions. We can round numbers, find the largest or smallest value, generate random numbers, calculate powers, and much more. These functions save time because we do not need to write all calculations manually.",

    points: [
      "Math.floor() rounds a number down.",
      "Math.ceil() rounds a number up.",
      "Math.round() rounds to the nearest integer.",
      "Math.max() returns the largest value.",
      "Math.min() returns the smallest value.",
      "Math.random() generates a random decimal between 0 and 1."
    ],

    useCase:
      "Math functions are used in games, OTP generation, random quiz questions, dice rolling, billing systems, and number-based apps.",

    code: `console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.round(4.5));
console.log(Math.max(10, 20, 5));
console.log(Math.floor(Math.random() * 10) + 1);`,

    output: `4
5
5
20
Random number from 1 to 10`
  },

  {
    title: "Loops and Pattern Printing",
    description:
      "Loops are used when we want to repeat a task multiple times.",

    theory:
      "Loops help us avoid writing the same code again and again. Suppose we want to print numbers from 1 to 100. Writing console.log one hundred times is not practical. Instead, we use a loop. Pattern printing is a useful way to practice loops because it improves logic building and helps us understand nested loops clearly.",

    points: [
      "Loops are used for repetition.",
      "for loop is useful when the number of repetitions is known.",
      "while loop runs while a condition is true.",
      "do-while loop runs at least once.",
      "Nested loops are loops inside another loop.",
      "Pattern printing improves problem-solving skills."
    ],

    useCase:
      "Loops are used to display lists, print tables, run quizzes, check arrays, create patterns, repeat animations, and process data.",

    code: `for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}`,

    output: `*
* *
* * *
* * * *
* * * * *`
  }
];

let currentLesson = 0;
let score = 0;
let answeredQuestions = 0;

function applySavedTheme() {
  const savedTheme = localStorage.getItem("campusJSTheme");
  const themeToggle = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.innerText = "Dark Mode";
  } else {
    document.body.classList.remove("light-theme");
    themeToggle.innerText = "Light Mode";
  }
}

function toggleTheme() {
  const themeToggle = document.getElementById("themeToggle");

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("campusJSTheme", "light");
    themeToggle.innerText = "Dark Mode";
  } else {
    localStorage.setItem("campusJSTheme", "dark");
    themeToggle.innerText = "Light Mode";
  }
}

function showLesson(index) {
  currentLesson = index;

  document.getElementById("lessonTitle").innerText = lessons[index].title;
  document.getElementById("lessonDescription").innerText = lessons[index].description;
  document.getElementById("lessonTheory").innerText = lessons[index].theory;
  document.getElementById("lessonUseCase").innerText = lessons[index].useCase;

  const pointsList = document.getElementById("lessonPoints");
  pointsList.innerHTML = "";

  lessons[index].points.forEach((point) => {
    const li = document.createElement("li");
    li.innerText = point;
    pointsList.appendChild(li);
  });

  document.getElementById("lessonCode").textContent = lessons[index].code;
  document.getElementById("lessonOutput").innerText = lessons[index].output;

  const buttons = document.querySelectorAll(".lesson-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  buttons[index].classList.add("active");

  checkCompletedButton();
  Prism.highlightAll();
}

function markCompleted() {
  let completedLessons =
    JSON.parse(localStorage.getItem("completedLessons")) || [];

  if (!completedLessons.includes(currentLesson)) {
    completedLessons.push(currentLesson);
  }

  localStorage.setItem("completedLessons", JSON.stringify(completedLessons));

  updateProgress();
  checkCompletedButton();
}

function checkCompletedButton() {
  let completedLessons =
    JSON.parse(localStorage.getItem("completedLessons")) || [];

  const completeBtn = document.getElementById("completeBtn");

  if (completedLessons.includes(currentLesson)) {
    completeBtn.innerText = "Completed";
    completeBtn.disabled = true;
    completeBtn.style.backgroundColor = "#22c55e";
  } else {
    completeBtn.innerText = "Mark as Completed";
    completeBtn.disabled = false;
    completeBtn.style.backgroundColor = "";
  }
}

function updateProgress() {
  let completedLessons =
    JSON.parse(localStorage.getItem("completedLessons")) || [];

  let totalLessons = lessons.length;
  let completedCount = completedLessons.length;

  let percentage = (completedCount / totalLessons) * 100;

  document.getElementById("progressFill").style.width = percentage + "%";
  document.getElementById("progressText").innerText =
    `${completedCount} / ${totalLessons} lessons completed`;
}

function resetProgress() {
  localStorage.removeItem("completedLessons");
  updateProgress();
  checkCompletedButton();
}

function scrollToLessons() {
  document.getElementById("lessons").scrollIntoView({
    behavior: "smooth"
  });
}

const quizQuestions = [
  {
    question: "What will be the output?",
    code: `let x = 10;
let y = x;

let a = [10];
let b = a;

y = 20;
b[0] = 20;

console.log(x + a[0]);`,
    options: ["20", "30", "40", "50"],
    answer: "30"
  },
  {
    question: "Guess the output?",
    code: `const obj1 = { name: "Strike" };
const obj2 = { name: "Strike" };

console.log(obj1 == obj2);`,
    options: ["true", "false", "null", "NaN"],
    answer: "false"
  },
  {
    question: "Guess the output?",
    code: `const a = {
  roll: 15
};

a.roll = 12;

console.log(a.roll);`,
    options: ["15", "12", "3", "27"],
    answer: "12"
  },
  {
    question: "What will be the output?",
    code: `const a = {
  roll: 15
};

a = {
  roll: 20
};

console.log(a.roll);`,
    options: ["15", "20", "30", "Error"],
    answer: "Error"
  },
  {
    question: "What will be the output?",
    code: `console.log(x);

var x = 5;`,
    options: ["5", "NaN", "undefined", "null"],
    answer: "undefined"
  },
  {
    question: "What will be the output?",
    code: `let a = 6;
let b = a++;
b = ++a;

console.log(a);`,
    options: ["5", "6", "7", "8"],
    answer: "8"
  },
  {
    question: "What will be the output?",
    code: `console.log("6" + 5);`,
    options: ["6", "5", "11", "65"],
    answer: "65"
  },
  {
    question: "What will be the output?",
    code: `console.log("7" == 7);`,
    options: ["true", "false"],
    answer: "true"
  },
  {
    question: "What will be the output?",
    code: `console.log(10 && 15);`,
    options: ["0", "15", "150", "10"],
    answer: "15"
  },
  {
    question: "What will be the output?",
    code: `console.log(10 || 15);`,
    options: ["10", "15", "25", "150"],
    answer: "10"
  },
  {
    question: "What will be the output?",
    code: `console.log(5 + "5");`,
    options: ["55", "10", "5", "NaN"],
    answer: "55"
  },
  {
    question: "What will be the output?",
    code: `console.log(3 + 4 + "4");`,
    options: ["34", "74", "11", "NaN"],
    answer: "74"
  },
  {
    question: "Why do banks often store money as paisa/cents instead of decimal values?",
    code: ``,
    options: [
      "Faster calculation",
      "Easier coding",
      "Save memory",
      "Avoid floating-point precision errors"
    ],
    answer: "Avoid floating-point precision errors"
  },
  {
    question: "How many times will the loop execute?",
    code: `let i = 10;

do {
  console.log(i);
} while (i < 5);`,
    options: ["0", "1", "5", "Infinite"],
    answer: "1"
  },
  {
    question: "What will be the output?",
    code: `console.log(parseInt("20px") + parseFloat("7.5"));`,
    options: ["20.5", "27.5", "7.5", "NaN"],
    answer: "27.5"
  },
  {
    question: "What is the possible output range?",
    code: `let num = Math.floor(Math.random() * 10);
console.log(num);`,
    options: ["1 to 10", "0 to 10", "0 to 9", "1 to 9"],
    answer: "0 to 9"
  },
  {
    question: "What is the correct code to generate a random integer from 1 to 10?",
    code: ``,
    options: [
      "Math.floor(Math.random() * 10)",
      "Math.floor(Math.random() * 10) + 1",
      "Math.random() * 10",
      "Math.ceil(Math.random() * 10) + 1"
    ],
    answer: "Math.floor(Math.random() * 10) + 1"
  },
  {
    question: "What will be the output?",
    code: `console.log(Math.max(-5, -20, -Math.min(-10, -2)));`,
    options: ["-5", "10", "5", "-25"],
    answer: "10"
  },
  {
    question: "What is the possible output range?",
    code: `let num = Math.floor(Math.random() * 6) + 5;
console.log(num);`,
    options: ["0 to 6", "1 to 5", "5 to 10", "5 to 9"],
    answer: "5 to 10"
  },
  {
    question: "What will be the output type?",
    code: `console.log(typeof Math.LOG2E);`,
    options: ["string", "number", "object", "boolean"],
    answer: "number"
  },
  {
    question: "What will be the output?",
    code: `let str = "JavaScript";

console.log(str.slice(-6));`,
    options: ["Java", "Error", "aScript", "Script"],
    answer: "Script"
  },
  {
    question: "What will be the output?",
    code: `let str = "Hello World";

console.log(str.replace("World", "JS"));`,
    options: ["Hello World", "World JS", "Hello JS", "JS"],
    answer: "Hello JS"
  }
];

function loadQuiz() {
  const quizContainer = document.getElementById("quizContainer");

  quizContainer.innerHTML = "";

  quizQuestions.forEach((item, index) => {
    const quizCard = document.createElement("div");
    quizCard.className = "quiz-card";

    let codeBlock = "";

    if (item.code.trim() !== "") {
      codeBlock = `
        <pre class="quiz-code"><code class="language-js">${escapeHTML(item.code)}</code></pre>
      `;
    }

    quizCard.innerHTML = `
      <h3>${index + 1}. ${item.question}</h3>
      ${codeBlock}
      <div class="options"></div>
    `;

    const optionsDiv = quizCard.querySelector(".options");

    item.options.forEach((option) => {
      const optionBtn = document.createElement("button");
      optionBtn.className = "option";
      optionBtn.innerText = option;

      optionBtn.onclick = function () {
        checkAnswer(optionBtn, option, item.answer, optionsDiv);
      };

      optionsDiv.appendChild(optionBtn);
    });

    quizContainer.appendChild(quizCard);
  });

  updateScore();
  Prism.highlightAll();
}

function checkAnswer(selectedBtn, selectedAnswer, correctAnswer, optionsDiv) {
  const allOptions = optionsDiv.querySelectorAll(".option");

  allOptions.forEach((btn) => {
    btn.disabled = true;

    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  answeredQuestions++;

  if (selectedAnswer === correctAnswer) {
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  updateScore();
}

function updateScore() {
  document.getElementById("scoreText").innerText =
    `Score: ${score} / ${quizQuestions.length} | Attempted: ${answeredQuestions}`;
}

function resetQuiz() {
  score = 0;
  answeredQuestions = 0;
  loadQuiz();
}

function saveNotes() {
  const notes = document.getElementById("notesBox").value;

  localStorage.setItem("campusJSNotes", notes);

  document.getElementById("notesMessage").innerText =
    "Notes saved successfully!";
}

function loadNotes() {
  const savedNotes = localStorage.getItem("campusJSNotes");

  if (savedNotes) {
    document.getElementById("notesBox").value = savedNotes;
  }
}

function escapeHTML(code) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

applySavedTheme();
showLesson(0);
updateProgress();
loadQuiz();
loadNotes();
