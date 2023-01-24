let LastScore = document.getElementById("highscores");
let clearScore = document.getElementById("clear");
var result = document.createElement("li");
LastScore.appendChild(result)

let savedInitials = localStorage.getItem("initials");
let savedScore = localStorage.getItem("score");

result.textContent = savedInitials +" - "+ savedScore;



function clear(){
    LastScore.textContent = " ";
}

clearScore.addEventListener("click", clear)



