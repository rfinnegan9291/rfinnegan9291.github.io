const termBank = {
  all: [
    { term: "Object-Oriented Programming", keywords: ["class", "objects", "data", "methods", "behavior"], definition: "A programming style where code is organized around objects that contain data and behaviors." },
    { term: "Procedural Programming", keywords: ["steps", "functions", "sequence", "instructions", "code"], definition: "A style of programming where tasks are solved by writing a sequence of step-by-step instructions." },
    { term: "Variable", keywords: ["store", "data", "value", "named", "memory"], definition: "A named storage location used to hold a value that can change while a program runs." },
    { term: "Function", keywords: ["reusable", "block", "code", "task", "call"], definition: "A reusable block of code that performs a specific task when called." },
    { term: "Algorithm", keywords: ["steps", "solve", "problem", "process", "logic"], definition: "A set of step-by-step instructions used to solve a problem or complete a task." },
    { term: "Recursion", keywords: ["function", "calls", "itself", "base", "case"], definition: "When a function calls itself to solve a smaller version of the same problem until a base case is reached." },
    { term: "Array", keywords: ["list", "ordered", "values", "index", "collection"], definition: "A collection of data values stored in an ordered list, usually accessed by index." },
    { term: "Loop", keywords: ["repeat", "iteration", "code", "until", "condition"], definition: "A control structure that repeats a block of code until a condition is met or a number of times is reached." },
    { term: "Bug", keywords: ["error", "problem", "code", "fault", "unexpected"], definition: "A flaw or mistake in code that causes incorrect behavior or crashes." },
    { term: "Compiler", keywords: ["translate", "source", "machine", "code", "language"], definition: "A program that translates source code into machine code or another language that a computer can run." },
    { term: "Interpreter", keywords: ["read", "execute", "line", "code", "runtime"], definition: "A program that reads and executes code one instruction or line at a time." },
    { term: "API", keywords: ["interface", "software", "communication", "methods", "data"], definition: "An application programming interface that defines how software components communicate with each other." },
    { term: "Inheritance", keywords: ["class", "parent", "child", "reuse", "properties"], definition: "A feature where a class inherits behavior and properties from another class." },
    { term: "Encapsulation", keywords: ["hide", "data", "methods", "inside", "object"], definition: "The practice of hiding internal details and exposing only the necessary interface of an object." },
    { term: "Abstraction", keywords: ["simplify", "details", "concept", "model", "hide"], definition: "Reducing complexity by focusing on the important parts of a system and hiding unnecessary detail." }
  ],
  javascript: [
    { term: "Callback", keywords: ["function", "passed", "later", "execute", "async"], definition: "A function passed into another function to be called later after an event or operation completes." },
    { term: "Scope", keywords: ["visible", "variables", "function", "block", "context"], definition: "The region of a program where a variable or function can be accessed." },
    { term: "Promise", keywords: ["asynchronous", "future", "resolve", "reject", "value"], definition: "An object representing the eventual completion or failure of an asynchronous operation." },
    { term: "Closure", keywords: ["function", "remembers", "lexical", "scope", "environment"], definition: "A function that retains access to variables from the scope in which it was created." },
    { term: "Hoisting", keywords: ["function", "variable", "move", "top", "execution"], definition: "The behavior where function and variable declarations are treated as if they were moved to the top of their scope." },
    { term: "Event Loop", keywords: ["asynchronous", "tasks", "queue", "single", "thread"], definition: "The mechanism that handles asynchronous tasks in JavaScript by repeatedly checking the queue and executing callbacks." },
    { term: "DOM", keywords: ["document", "structure", "html", "elements", "browser"], definition: "The Document Object Model, which represents the structure of an HTML document as objects in the browser." }
  ],
  python: [
    { term: "List", keywords: ["ordered", "items", "mutable", "collection", "index"], definition: "An ordered, mutable collection of values that can be changed after creation." },
    { term: "Tuple", keywords: ["immutable", "ordered", "values", "sequence", "fixed"], definition: "An ordered collection of values that cannot be changed after it is created." },
    { term: "Dictionary", keywords: ["key", "value", "mapping", "lookup", "pairs"], definition: "A data structure that stores data as key-value pairs for fast lookup." },
    { term: "Module", keywords: ["file", "code", "import", "library", "functions"], definition: "A file containing Python code that can be imported and reused in another program." },
    { term: "Decorator", keywords: ["function", "modify", "wrap", "behavior", "syntax"], definition: "A function that modifies or wraps another function to change its behavior." }
  ],
  java: [
    { term: "Class", keywords: ["template", "object", "attributes", "methods", "blueprint"], definition: "A blueprint for creating objects that defines their attributes and behaviors." },
    { term: "Method", keywords: ["function", "class", "task", "behavior", "call"], definition: "A block of code within a class that performs a specific action or calculation." },
    { term: "Interface", keywords: ["contract", "methods", "implement", "class", "behavior"], definition: "A contract that defines methods a class must implement without providing the implementation." },
    { term: "Exception", keywords: ["error", "runtime", "throw", "catch", "handle"], definition: "An event that interrupts the normal flow of a program and must be handled or thrown." }
  ],
  csharp: [
    { term: "Namespace", keywords: ["organize", "classes", "code", "group", "scope"], definition: "A named grouping used to organize related code and avoid naming conflicts." },
    { term: "Property", keywords: ["field", "accessor", "value", "class", "get"], definition: "A member of a class that exposes a value while controlling how it is accessed or changed." },
    { term: "Null", keywords: ["empty", "missing", "reference", "value", "nothing"], definition: "A special value meaning there is no object or data assigned." }
  ],
  web: [
    { term: "HTTP", keywords: ["request", "response", "web", "protocol", "server"], definition: "The protocol used to send and receive data over the web between clients and servers." },
    { term: "CSS", keywords: ["style", "page", "layout", "design", "presentation"], definition: "A language used to control the visual styling and layout of web pages." },
    { term: "DOM", keywords: ["document", "browser", "elements", "tree", "page"], definition: "The browser’s tree-like representation of a web page that scripts can manipulate." }
  ]
};

const stopWords = new Set([
  "the","a","an","of","to","in","on","for","and","or","is","are","that","this","it","with","from","by","as","at","be","was","were","into","their","its","your","you","we","they","them","using","used","when","while","has","have","having","about","how","which","what","where","why","who","whom","different","same","like","than","then","there","here","is"
]);

const state = {
  selectedLanguage: "all",
  timerValue: 60,
  score: 0,
  streak: 0,
  currentTerm: null,
  lastUsed: new Set(),
  intervalId: null,
  gameOver: false,
  gameStarted: false
};

const languageSelect = document.getElementById("languageSelect");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const termEl = document.getElementById("term");
const answerInput = document.getElementById("answerInput");
const feedbackEl = document.getElementById("feedback");
const officialEl = document.getElementById("official");

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getAvailableTerms() {
  const pool = termBank[state.selectedLanguage] || termBank.all;
  return shuffle(pool.filter(item => !state.lastUsed.has(item.term)));
}

function pickNextTerm() {
  const available = getAvailableTerms();
  const item = available[0] || shuffle(termBank[state.selectedLanguage] || termBank.all)[0];
  if (!item) return;

  state.currentTerm = item;
  state.lastUsed.add(item.term);

  if (state.lastUsed.size > 24) {
    state.lastUsed.clear();
  }

  termEl.textContent = item.term;
  answerInput.value = "";
  if (state.gameStarted) answerInput.focus();
  feedbackEl.textContent = "Type your definition...";
  feedbackEl.className = "feedback";
  officialEl.hidden = true;
  officialEl.textContent = "";
}

function updateStats() {
  timerEl.textContent = `${state.timerValue}s`;
  scoreEl.textContent = String(state.score);
  streakEl.textContent = String(state.streak);
}

function setFeedback(type, message) {
  feedbackEl.className = `feedback ${type}`;
  feedbackEl.textContent = message;
}

function computeDefinitionQuality(answer, item) {
  const normalizedAnswer = normalize(answer);
  const expected = normalize(item.definition);

  const answerWords = new Set(normalizedAnswer.split(" ").filter(w => w && !stopWords.has(w)));
  const expectedWords = new Set(expected.split(" ").filter(w => w && !stopWords.has(w)));

  const overlap = [...expectedWords].filter(word => answerWords.has(word)).length;
  const overlapRatio = expectedWords.size ? overlap / expectedWords.size : 0;

  const keywordHits = item.keywords.filter(keyword => normalizedAnswer.includes(normalize(keyword))).length;
  const keywordRatio = item.keywords.length ? keywordHits / item.keywords.length : 0;

  const quality = Math.max(overlapRatio, keywordRatio);
  return { quality, overlapRatio, keywordRatio };
}

function enableInput(enabled) {
  answerInput.disabled = !enabled;
  submitBtn.disabled = !enabled;
  if (enabled) answerInput.focus();
}

function showOfficialDefinition(item) {
  officialEl.hidden = false;
  officialEl.innerHTML = `<strong>${item.term}:</strong> ${item.definition}`;
}

function addScoreEffect(amount) {
  if (!amount || amount <= 0) return;

  const fly = document.createElement("div");
  fly.className = "score-fly";
  fly.textContent = `+${amount}`;

  document.body.appendChild(fly);

  setTimeout(() => fly.remove(), 900);
}

function startGame() {
  state.score = 0;
  state.streak = 0;
  state.timerValue = 60;
  state.gameOver = false;
  state.gameStarted = true;
  state.lastUsed.clear();

  updateStats();
  pickNextTerm();
  enableInput(true);

  clearInterval(state.intervalId);
  state.intervalId = setInterval(() => {
    if (state.gameOver) return;

    state.timerValue -= 1;
    if (state.timerValue <= 0) {
      state.timerValue = 0;
      updateStats();
      endGame();
      return;
    }

    updateStats();
  }, 1000);

  setFeedback("success", "Game started! Type your best definition and press Check.");
  startBtn.disabled = true;
}

function endGame() {
  state.gameOver = true;
  state.gameStarted = false;
  clearInterval(state.intervalId);

  setFeedback("warning", `Time's up! Final score: ${state.score}. Press Start to play again.`);
  termEl.textContent = "Game Over";
  answerInput.value = "";
  enableInput(false);
  startBtn.disabled = false;
}

function submitAnswer() {
  if (!state.gameStarted || state.gameOver || !state.currentTerm) {
    setFeedback("error", "Start the game first to submit answers.");
    return;
  }

  const answer = answerInput.value.trim();
  if (!answer) {
    setFeedback("error", "You need to type a definition before submitting.");
    return;
  }

  const { quality, overlapRatio, keywordRatio } = computeDefinitionQuality(answer, state.currentTerm);
  const accuracy = Math.max(quality, Math.min(1, (overlapRatio * 0.7) + (keywordRatio * 0.3)));

  let timeBonus = 0;
  let scoreGain = 0;

  if (accuracy >= 0.7) {
    const bonusFromTime = Math.max(2, Math.round(state.timerValue * 0.12));
    timeBonus = bonusFromTime;
    scoreGain = Math.max(20, Math.round((accuracy * 100) + (state.timerValue / 60) * 35 + (state.streak * 5)));
    state.streak += 1;
    state.score += scoreGain;
    state.timerValue += timeBonus;
    setFeedback("success", `Great answer! +${scoreGain} points and +${timeBonus}s.`);
    addScoreEffect(scoreGain);
  } else if (accuracy >= 0.35) {
    const partialBonus = Math.max(1, Math.round(state.timerValue * 0.05));
    timeBonus = partialBonus;
    scoreGain = Math.max(8, Math.round((accuracy * 50) + (state.streak * 2)));
    state.streak = 0;
    state.score += scoreGain;
    state.timerValue += timeBonus;
    setFeedback("warning", `Close! You earned ${scoreGain} points and +${timeBonus}s for effort.`);
    addScoreEffect(scoreGain);
  } else {
    state.streak = 0;
    state.timerValue = Math.max(0, state.timerValue - 4);
    setFeedback("error", `Not quite — the official definition is below.`);
  }

  updateStats();
  showOfficialDefinition(state.currentTerm);

  setTimeout(() => {
    if (state.timerValue <= 0) {
      endGame();
      return;
    }
    pickNextTerm();
  }, 900);
}

languageSelect.addEventListener("change", (event) => {
  state.selectedLanguage = event.target.value;
  if (!state.gameStarted) {
    pickNextTerm();
  }
});

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submitAnswer);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitAnswer();
  }
});

updateStats();
pickNextTerm();
enableInput(false);
