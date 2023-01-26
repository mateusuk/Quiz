var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var scores = document.getElementById("scores");
var feedback = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen");
var questionDisplay = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var time = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initialsId = document.getElementById("initials");




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
  startScreen.classList.add("hide");
  questionDisplay.classList.remove("hide");
  feedback.classList.remove("hide");
}

// Function to show the current question
function showQuestion() {
  // Clear the previous question
  questionTitle.innerHTML = "";
  choices.innerHTML = "";

  // Get the current question and answers
  let question = questions[currentQuestion].question;
  let answers = questions[currentQuestion].answers;

  // Display the question
  questionTitle.innerHTML = question;

  // Display the answers
  for (let i = 0; i < answers.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = answers[i];
    button.onclick = checkAnswer;
    choices.appendChild(button);
  }
}

// Function to check if the answer is correct
function checkAnswer() {
  let correctAnswer = questions[currentQuestion].correctAnswer;
  if (this.innerHTML == correctAnswer) {
    score+=10;
    Showmessage.textContent = "Correct!";
    rightAudio.play();
  } else {
    timeLeft -= 10;
    Showmessage.textContent = "Wrong!";
    wrongAudio.play();
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
    time.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      time.innerHTML = "0"
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval();
  questionDisplay.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.innerHTML = score;
  
}





// Function to save the score
function saveScore() {
  let initials = initialsId.value

  let scoreObject = { initials: initials, score: score }

let scores = JSON.parse(localStorage.getItem("scores")) || [];
scores.push(scoreObject);
localStorage.setItem("scores", JSON.stringify(scores));


 
}

 //submit button
 submitButton.addEventListener("click", function(event) {
  event.preventDefault();
    saveScore();

    // link to highscores html
    location.href = "highscores.html";


});

//sounds for right and wrong answers
let rightAudio = document.getElementById("right-audio");
let wrongAudio = document.getElementById("wrong-audio");