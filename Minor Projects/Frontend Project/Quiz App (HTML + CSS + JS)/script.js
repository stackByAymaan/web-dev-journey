const startBtn = document.getElementById("start-quiz-btn");
console.log(startBtn);


const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const howItWorks = document.getElementById("how-it-works");
const questionText = document.getElementById("question-text");


startBtn.addEventListener("click", function () {
   setupScreen.hidden = true; // Settings hide
   howItWorks.hidden = true;  // Instructions hide
   quizScreen.hidden = false; // Quiz show
});



 