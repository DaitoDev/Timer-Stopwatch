// Grabbing buttons

// Navbar buttons
const timerBtn = document.querySelector(".time-nav");
const stopwatchBtn = document.querySelector(".stopwatch-nav");

// Timer btns
const tmStart = document.querySelector("#tm-start");
const tmStop = document.querySelector("#tm-stop");
const tmReset = document.querySelector("#tm-reset");

// Stopwatch btns
const swStart = document.querySelector("#sw-start");
const swStop = document.querySelector("#sw-stop");
const swReset = document.querySelector("#sw-reset");

// Timer numbers
const tmHr = document.querySelector(".tm-hr");
const tmMin = document.querySelector(".tm-min");
const tmSec = document.querySelector(".tm-sec");

// Stopwatch numbers
const swHr = document.querySelector(".sw-hr");
const swMin = document.querySelector(".sw-min");
const swSec = document.querySelector(".sw-sec");
const swMs = document.querySelector(".sw-ms");

// time containers
const timer = document.querySelector(".timer-container");
const stopwatch = document.querySelector(".stopwatch-container");

// TIMER CODE ===========================================================
let startingTime = 10;
let countDownTime = startingTime * 60;
let tmInterval;

// Timer Function
const updateCountDown = () => {
  let tmMinutes = Math.floor(countDownTime / 60);
  let tmSeconds = countDownTime % 60;

  // Seconds
  if (tmSeconds < 10) {
    tmSec.textContent = `0${tmSeconds}`;
  }
  if (tmSeconds >= 10) {
    tmSec.textContent = tmSeconds;
  }

  // Minutes
  if (tmMinutes < 10) {
    tmMin.textContent = `0${tmMinutes}`;
  }
  if (tmMinutes >= 10) {
    tmMin.textContent = tmMinutes;
  }

  if (tmMinutes > 60) {
    tmMin.textContent = tmMinutes;
  }

  countDownTime--;
};

// STOP WATCH CODE ===========================================================
// Global Variables
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timerOn = false;
let swInterval;

// STOPWATCH
const startStopwatch = () => {
  millisecond++;

  if (millisecond <= 9) {
    swMs.textContent = `0${millisecond}`;
  }
  if (millisecond > 9) {
    swMs.textContent = millisecond;
  }
  if (millisecond > 99) {
    second++;
    swSec.textContent = `0${second}`;
    millisecond = 0;
    swMs.textContent = `0${0}`;
  }
  if (second > 9) {
    swSec.textContent = second;
  }
  if (second >= 60) {
    minute++;
    second = 0;
    swMin.textContent = `0${minute}`;
    swSec.textContent = `0${second}`;
  }
  if (minute > 9) {
    swMin.textContent = minute;
  }
  if (minute >= 60) {
    hour++;
    minute = 0;
    swHr.textContent = `0${hour}`;
    swMin.textContent = `0${minute}`;
  }
};

// Resets all
const resetAll = () => {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  timerOn = false;

  tmMin.textContent = "00";
  tmSec.textContent = "00";

  swHr.textContent = "00";
  swMin.textContent = "00";
  swSec.textContent = "00";
  swMs.textContent = "00";
  clearInterval(tmInterval);
  clearInterval(swInterval);
};

// Toggle display and highlight TIMER
const timerToggle = () => {
  timerBtn.classList.add("highlight");
  stopwatchBtn.classList.remove("highlight");
  timer.classList.remove("hide");
  stopwatch.classList.add("hide");
  resetAll();
};

// Toggle display and highlight STOPWATCH
const stopwatchToggle = () => {
  timerBtn.classList.remove("highlight");
  stopwatchBtn.classList.add("highlight");
  timer.classList.add("hide");
  stopwatch.classList.remove("hide");
  resetAll();
};

// All Event Listeners ============================
// Toggle Timer
timerBtn.addEventListener("click", () => {
  timerToggle();
});

// Toggle Stopwatch
stopwatchBtn.addEventListener("click", () => {
  stopwatchToggle();
});
// ======================================================
// Start Timer
tmStart.addEventListener("click", () => {
  clearInterval(tmInterval);
  tmInterval = setInterval(updateCountDown, 1000);
});

// Stop timer
tmStop.addEventListener("click", () => {
  clearInterval(tmInterval);
});

// Reset timer
tmReset.addEventListener("click", () => {
  clearInterval(tmInterval);
  resetAll();
});

// =========================================================
// Start stopwatch
swStart.addEventListener("click", () => {
  clearInterval(swInterval);
  swInterval = setInterval(startStopwatch, 10);
});

// Stop stopwatch
swStop.addEventListener("click", () => {
  clearInterval(swInterval);
});

// Reset stopwatch
swReset.addEventListener("click", () => {
  clearInterval(swInterval);
  resetAll();
});
