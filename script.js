/**
 * CampusJS - Production Grade Architecture Engine
 * Scalable state containment, decoupled event binding, and defensive storage structures.
 */

// ==========================================
// 1. Immutable Data Repositories
// ==========================================
const LESSONS_REGISTRY = [
  {
    title: "Introduction to JavaScript",
    description: "JavaScript helps us add logic and interaction to a website.",
    theory: "When we create a website, HTML gives the page its structure and CSS makes it look good. JavaScript adds life to the website. It helps us respond to button clicks, validate forms, show quiz results, update content, create animations, and much more. In simple words, JavaScript is the language that makes a website interactive.",
    points: [
      "JavaScript is mainly used to make websites interactive.",
      "It works together with HTML and CSS.",
      "It can respond to user actions like clicks, typing, and form submissions.",
      "It can change webpage content without refreshing the page.",
      "JavaScript can also be used for backend development with Node.js."
    ],
    useCase: "You will use JavaScript in quizzes, login forms, calculators, menus, games, dashboards, animations, and many real-world websites.",
    code: `console.log("Welcome to JavaScript");\n\nlet student = "CampusJS Student";\nconsole.log(student);`,
    output: "Welcome to JavaScript\nCampusJS Student"
  },
  {
    title: "Data Types in JavaScript",
    description: "Data types tell us what kind of value is stored inside a variable.",
    theory: "In JavaScript, every value has a type. For example, text is stored as a string, numbers are stored as number, and true or false values are stored as boolean. If a variable is declared but no value is assigned, its type becomes undefined. Objects and arrays help us store multiple values in a structured way. Understanding data types is important because JavaScript behaves differently with different types of data.",
    points: [
      "String is used to store text.",
      "Number is used to store numeric values.",
      "Boolean stores true or false.",
      "Undefined means a variable has no assigned value.",
      "Null means an empty value is intentionally assigned.",
      "Objects store data in key-value pairs.",
      "Arrays store multiple values in one variable."
    ],
    useCase: "Data types are used to store names, marks, prices, login status, quiz answers, product details, and student records.",
    code: `let studentName = "CampusJS Student";\nlet age = 20;\nlet isStudent = true;\nlet marks;\nlet emptyValue = null;\n\nconsole.log(typeof studentName);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);\nconsole.log(typeof marks);\nconsole.log(typeof emptyValue);`,
    output: "string\nnumber\nboolean\nundefined\nobject"
  },
  {
    title: "Operators in JavaScript",
    description: "Operators are used to perform operations on values and variables.",
    theory: "Operators help us perform basic actions in JavaScript. We use arithmetic operators for calculations, comparison operators to compare values, assignment operators to store values, and logical operators to combine conditions. Without operators, it would be difficult to calculate, compare, or make decisions in a program.",
    points: [
      "Arithmetic operators are used for calculations.",
      "Assignment operators assign values to variables.",
      "Comparison operators compare two values.",
      "Logical operators combine multiple conditions.",
      "Operators are commonly used in conditions, loops, and calculations."
    ],
    useCase: "Operators are used in calculators, marks calculation, login checks, shopping cart totals, form validation, and decision-making logic.",
    code: `let a = 10;\nlet b = 5;\n\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a > b);`,
    output: "15\n5\n50\n2\ntrue"
  },
  {
    title: "Operators and Math Functions",
    description: "Math functions help us perform common mathematical tasks easily.",
    theory: "JavaScript has a built-in Math object that provides many useful functions. We can round numbers, find the largest or smallest value, generate random numbers, calculate powers, and much more. These functions save time because we do not need to write all calculations manually.",
    points: [
      "Math.floor() rounds a number down.",
      "Math.ceil() rounds a number up.",
      "Math.round() rounds to the nearest integer.",
      "Math.max() returns the largest value.",
      "Math.min() returns the smallest value.",
      "Math.random() generates a random decimal between 0 and 1."
    ],
    useCase: "Math functions are used in games, OTP generation, random quiz questions, dice rolling, billing systems, and number-based apps.",
    code: `console.log(Math.floor(4.9));\nconsole.log(Math.ceil(4.1));\nconsole.log(Math.round(4.5));\nconsole.log(Math.max(10, 20, 5));\nconsole.log(Math.floor(Math.random() * 10) + 1);`,
    output: "4\n5\n5\n20\nRandom number from 1 to 10"
  },
  {
    title: "Loops and Pattern Printing",
    description: "Loops are used when we want to repeat a task multiple times.",
    theory: "Loops help us avoid writing the same code again and again. Suppose we want to print numbers from 1 to 100. Writing console.log one hundred times is not practical. Instead, we use a loop. Pattern printing is a useful way to practice loops because it improves logic building and helps us understand nested loops clearly.",
    points: [
      "Loops are used for repetition.",
      "for loop is useful when the number of repetitions is known.",
      "while loop runs while a condition is true.",
      "do-while loop runs at least once.",
      "Nested loops are loops inside another loop.",
      "Pattern printing improves problem-solving skills."
    ],
    useCase: "Loops are used to display lists, print tables, run quizzes, check arrays, create patterns, repeat animations, and process data.",
    code: `for (let i = 1; i <= 5; i++) {\n  let pattern = "";\n  for (let j = 1; j <= i; j++) {\n    pattern += "* ";\n  }\n  console.log(pattern);\n}`,
    output: "*\n* *\n* * *\n* * * *\n* * * *"
  }
];

const QUIZ_REGISTRY = [
  {
    question: "What will be the output?",
    code: `let x = 10;\nlet y = x;\nlet a = [10];\nlet b = a;\ny = 20;\nb[0] = 20;\nconsole.log(x + a[0]);`,
    options: ["20", "30", "40", "50"],
    answer: "30"
  },
  {
    question: "Guess the output?",
    code: `const obj1 = { name: "Strike" };\nconst obj2 = { name: "Strike" };\nconsole.log(obj1 == obj2);`,
    options: ["true", "false", "null", "NaN"],
    answer: "false"
  },
  {
    question: "Guess the output?",
    code: `const a = {\n  roll: 15\n};\na.roll = 12;\nconsole.log(a.roll);`,
    options: ["15", "12", "3", "27"],
    answer: "12"
  },
  {
    question: "What will be the output?",
    code: `const a = {\n  roll: 15\n};\na = {\n  roll: 20\n};\nconsole.log(a.roll);`,
    options: ["15", "20", "30", "Error"],
    answer: "Error"
  },
  {
    question: "What will be the output?",
    code: `console.log(x);\nvar x = 5;`,
    options: ["5", "NaN", "undefined", "null"],
    answer: "undefined"
  },
  {
    question: "What will be the output?",
    code: `let a = 6;\nlet b = a++;\nb = ++a;\nconsole.log(a);`,
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
    options: ["Faster calculation", "Easier coding", "Save memory", "Avoid floating-point precision errors"],
    answer: "Avoid floating-point precision errors"
  },
  {
    question: "How many times will the loop execute?",
    code: `let i = 10;\ndo {\n  console.log(i);\n} while (i < 5);`,
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
    code: `let num = Math.floor(Math.random() * 10);\nconsole.log(num);`,
    options: ["1 to 10", "0 to 10", "0 to 9", "1 to 9"],
    answer: "0 to 9"
  },
  {
    question: "What is the correct code to generate a random integer from 1 to 10?",
    code: ``,
    options: ["Math.floor(Math.random() * 10)", "Math.floor(Math.random() * 10) + 1", "Math.random() * 10", "Math.ceil(Math.random() * 10) + 1"],
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
    code: `let num = Math.floor(Math.random() * 6) + 5;\nconsole.log(num);`,
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
    code: `let str = "JavaScript";\nconsole.log(str.slice(-6));`,
    options: ["Java", "Error", "aScript", "Script"],
    answer: "Script"
  },
  {
    question: "What will be the output?",
    code: `let str = "Hello World";\nconsole.log(str.replace("World", "JS"));`,
    options: ["Hello World", "World JS", "Hello JS", "JS"],
    answer: "Hello JS"
  }
];

// ==========================================
// 2. Defensive Storage Wrapper Utility
// ==========================================
const StorageEngine = {
  get(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error(`Storage Engine Read Failure for key: ${key}`, e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Storage Engine Write Failure for key: ${key}`, e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Storage Engine Removal Failure for key: ${key}`, e);
    }
  }
};

// ==========================================
// 3. Central Application State Management
// ==========================================
const AppState = {
  currentLesson: 0,
  quizScore: 0,
  quizAttempted: 0,
  completedLessons: StorageEngine.get("completedLessons", []),
  
  markLessonComplete(index) {
    if (!this.completedLessons.includes(index)) {
      this.completedLessons.push(index);
      StorageEngine.set("completedLessons", this.completedLessons);
    }
  },
  
  clearProgress() {
    this.completedLessons = [];
    StorageEngine.remove("completedLessons");
  }
};

// ==========================================
// 4. UI Rendering & Interaction Orchestrator
// ==========================================
const UIManager = {
  elements: {},

  initCache() {
    this.elements = {
      themeToggle: document.getElementById("themeToggle"),
      heroBtn: document.querySelector(".hero button"),
      progressFill: document.getElementById("progressFill"),
      progressText: document.getElementById("progressText"),
      resetProgressBtn: document.querySelector(".reset-progress-btn"),
      sidebarContainer: document.querySelector(".lesson-sidebar"),
      lessonTitle: document.getElementById("lessonTitle"),
      lessonDescription: document.getElementById("lessonDescription"),
      lessonTheory: document.getElementById("lessonTheory"),
      lessonPoints: document.getElementById("lessonPoints"),
      lessonUseCase: document.getElementById("lessonUseCase"),
      lessonCode: document.getElementById("lessonCode"),
      lessonOutput: document.getElementById("lessonOutput"),
      completeBtn: document.getElementById("completeBtn"),
      scoreText: document.getElementById("scoreText"),
      quizContainer: document.getElementById("quizContainer"),
      resetQuizBtn: document.querySelector(".quiz-section .reset-btn"),
      notesBox: document.getElementById("notesBox"),
      saveNotesBtn: document.querySelector(".notes-section button"),
      notesMessage: document.getElementById("notesMessage")
    };
  },

  bindEventListeners() {
    // Structural Decoupling of Events
    if (this.elements.themeToggle) {
      this.elements.themeToggle.addEventListener("click", () => this.handleThemeToggle());
    }
    if (this.elements.heroBtn) {
      this.elements.heroBtn.addEventListener("click", () => {
        document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });
      });
    }
    if (this.elements.resetProgressBtn) {
      this.elements.resetProgressBtn.addEventListener("click", () => this.handleResetProgress());
    }
    if (this.elements.completeBtn) {
      this.elements.completeBtn.addEventListener("click", () => this.handleMarkComplete());
    }
    if (this.elements.resetQuizBtn) {
      this.elements.resetQuizBtn.addEventListener("click", () => this.handleResetQuiz());
    }
    if (this.elements.saveNotesBtn) {
      this.elements.saveNotesBtn.addEventListener("click", () => this.handleSaveNotes());
    }
  },

  // --- Theme Engine ---
  applySavedTheme() {
    const savedTheme = localStorage.getItem("campusJSTheme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      this.elements.themeToggle.textContent = "Dark Mode";
    } else {
      document.body.classList.remove("light-theme");
      this.elements.themeToggle.textContent = "Light Mode";
    }
  },

  handleThemeToggle() {
    const featuresLight = document.body.classList.toggle("light-theme");
    if (featuresLight) {
      localStorage.setItem("campusJSTheme", "light");
      this.elements.themeToggle.textContent = "Dark Mode";
    } else {
      localStorage.setItem("campusJSTheme", "dark");
      this.elements.themeToggle.textContent = "Light Mode";
    }
  },

  // --- Lesson Engine ---
  renderSidebar() {
    if (!this.elements.sidebarContainer) return;
    this.elements.sidebarContainer.innerHTML = "";

    LESSONS_REGISTRY.forEach((lesson, index) => {
      const button = document.createElement("button");
      button.className = `lesson-btn ${index === AppState.currentLesson ? "active" : ""}`;
      button.textContent = lesson.title;
      button.addEventListener("click", () => this.loadLesson(index));
      this.elements.sidebarContainer.appendChild(button);
    });
  },

  loadLesson(index) {
    AppState.currentLesson = index;
    const data = LESSONS_REGISTRY[index];
    if (!data) return;

    this.elements.lessonTitle.textContent = data.title;
    this.elements.lessonDescription.textContent = data.description;
    this.elements.lessonTheory.textContent = data.theory;
    this.elements.lessonUseCase.textContent = data.useCase;

    // Fast innerHTML clearing via text manipulation
    this.elements.lessonPoints.innerHTML = "";
    data.points.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      this.elements.lessonPoints.appendChild(li);
    });

    this.elements.lessonCode.textContent = data.code;
    this.elements.lessonOutput.textContent = data.output;

    // Sync button states smoothly
    const trackButtons = this.elements.sidebarContainer.querySelectorAll(".lesson-btn");
    trackButtons.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });

    this.syncCompletionUI();
    if (window.Prism) window.Prism.highlightAll();
  },

  handleMarkComplete() {
    AppState.markLessonComplete(AppState.currentLesson);
    this.syncProgressUI();
    this.syncCompletionUI();
  },

  handleResetProgress() {
    AppState.clearProgress();
    this.syncProgressUI();
    this.syncCompletionUI();
  },

  syncCompletionUI() {
    const isDone = AppState.completedLessons.includes(AppState.currentLesson);
    this.elements.completeBtn.textContent = isDone ? "Completed" : "Mark as Completed";
    this.elements.completeBtn.disabled = isDone;
    this.elements.completeBtn.style.backgroundColor = isDone ? "#22c55e" : "";
  },

  syncProgressUI() {
    const total = LESSONS_REGISTRY.length;
    const completed = AppState.completedLessons.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;

    this.elements.progressFill.style.width = `${percentage}%`;
    this.elements.progressText.textContent = `${completed} / ${total} lessons completed`;
  },

  // --- Quiz Engine ---
  loadQuiz() {
    if (!this.elements.quizContainer) return;
    this.elements.quizContainer.innerHTML = "";

    QUIZ_REGISTRY.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      let codeMarkup = "";
      if (item.code && item.code.trim() !== "") {
        codeMarkup = `<pre class="quiz-code"><code class="language-js">${this.escapeHTML(item.code)}</code></pre>`;
      }

      card.innerHTML = `
        <h3>${index + 1}. ${item.question}</h3>
        ${codeMarkup}
        <div class="options"></div>
      `;

      const optionsDiv = card.querySelector(".options");
      item.options.forEach(option => {
        const optBtn = document.createElement("button");
        optBtn.className = "option";
        optBtn.textContent = option;
        optBtn.addEventListener("click", () => this.evaluateQuizAnswer(optBtn, option, item.answer, optionsDiv));
        optionsDiv.appendChild(optBtn);
      });

      this.elements.quizContainer.appendChild(card);
    });

    this.syncQuizScoreUI();
    if (window.Prism) window.Prism.highlightAll();
  },

  evaluateQuizAnswer(selectedBtn, selectedVal, correctVal, optionsContainer) {
    const siblings = optionsContainer.querySelectorAll(".option");
    siblings.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctVal) {
        btn.classList.add("correct");
      }
    });

    AppState.quizAttempted++;
    if (selectedVal === correctVal) {
      AppState.quizScore++;
    } else {
      selectedBtn.classList.add("wrong");
    }

    this.syncQuizScoreUI();
  },

  syncQuizScoreUI() {
    this.elements.scoreText.textContent = 
      `Score: ${AppState.quizScore} / ${QUIZ_REGISTRY.length} | Attempted: ${AppState.quizAttempted}`;
  },

  handleResetQuiz() {
    AppState.quizScore = 0;
    AppState.quizAttempted = 0;
    this.loadQuiz();
  },

  // --- Notes System ---
  loadNotes() {
    try {
      const savedNotes = localStorage.getItem("campusJSNotes");
      if (savedNotes && this.elements.notesBox) {
        this.elements.notesBox.value = savedNotes;
      }
    } catch (e) {
      console.error("Failed to read user notes config.", e);
    }
  },

  handleSaveNotes() {
    const rawVal = this.elements.notesBox.value;
    try {
      localStorage.setItem("campusJSNotes", rawVal);
      this.elements.notesMessage.textContent = "Notes saved successfully!";
      this.elements.notesMessage.style.color = "#22c55e";
      
      setTimeout(() => {
        this.elements.notesMessage.textContent = "";
      }, 3000);
    } catch (e) {
      this.elements.notesMessage.textContent = "Storage full. Action canceled.";
      this.elements.notesMessage.style.color = "#ef4444";
    }
  },

  // --- HTML Protection Sanitizer ---
  escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
};

// ==========================================
// 5. System Boot Initializer
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  UIManager.initCache();
  UIManager.bindEventListeners();
  UIManager.applySavedTheme();
  UIManager.renderSidebar();
  UIManager.loadLesson(AppState.currentLesson);
  UIManager.syncProgressUI();
  UIManager.loadQuiz();
  UIManager.loadNotes();
});
