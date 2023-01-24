// let currentQuestion = 0;
// let timeLeft = 60;
// let score = 0;

var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var scores = document.getElementById("scores");
var feedback = document.getElementById("feedback");




startButton.addEventListener("click", function() {
    startQuiz();

   
});


// Function to start the quiz
function startQuiz() {
  currentQuestion = 0;
  timeLeft = 60;
  score = 0;
  showQuestion();
  startTimer();
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  feedback.classList.remove("hide");
}

// Function to show the current question
function showQuestion() {
  // Clear the previous question
  document.getElementById("question-title").innerHTML = "";
  document.getElementById("choices").innerHTML = "";

  // Get the current question and answers
  let question = questions[currentQuestion].question;
  let answers = questions[currentQuestion].answers;

  // Display the question
  document.getElementById("question-title").innerHTML = question;

  // Display the answers
  for (let i = 0; i < answers.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = answers[i];
    button.onclick = checkAnswer;
    document.getElementById("choices").appendChild(button);
  }
}

// Function to check if the answer is correct
function checkAnswer() {
  let correctAnswer = questions[currentQuestion].correctAnswer;
  if (this.innerHTML === correctAnswer) {
    score+=10;
    Showmessage.textContent = "Correct!";
  } else {
    timeLeft -= 10;
    Showmessage.textContent = "Wrong!";
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
   setInterval(function() {
    timeLeft--;
    document.getElementById("time").innerHTML = timeLeft;
    if (timeLeft <= 0) {
     document.getElementById("time").innerHTML = "0"
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval();
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerHTML = score;
  
}

// Function to save the score
function saveScore() {
  let initials = document.getElementById("initials").value

  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);

  let savedInitials = localStorage.getItem("initials");
  let savedScore = localStorage.getItem("score");

}
 
 //submit button
 submitButton.addEventListener("click", function(event) {
  event.preventDefault();
    saveScore();
    location.href = "highscores.html";

});
















