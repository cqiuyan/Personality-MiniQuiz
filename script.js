/*Add your JavaScript here*/

var growthScore = 0; // Store the growth Score
var fixedScore = 0; // Store the fixed Score

var questionCount = 0; // Store the number of answers clicked on

// // Store HTML elements using DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked 
q1a1.addEventListener("click", fixedmindset);
q1a2.addEventListener("click", growthmindset);

q2a1.addEventListener("click", growthmindset);
q2a2.addEventListener("click", fixedmindset);

q3a1.addEventListener("click", fixedmindset);
q3a2.addEventListener("click", growthmindset);

// Track fixed mindset score and check if quiz is complete
function growthmindset() {
  growthScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " growthmindset = " + growthScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

function fixedmindset() {
  fixedScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " fixedmindset = " + fixedScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult(); 
  }

}

// Update quiz result

function updateResult() {
   if (fixedScore >= 2) {
     result.innerHTML = "You are a fixed mindset person."
     console.log("You are a fixed mindset person.");
   } else if (growthScore >= 2) {
     result.innerHTML = "You are a growth mindset person."
     console.log("You are a growth mindset person."); 
   }
}


