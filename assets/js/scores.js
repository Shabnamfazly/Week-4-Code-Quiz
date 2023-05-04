var scoresheet = document.getElementById("scoresheet")
var playAgain = document.getElementById("PlayAgain")
var clearHighscores = document.getElementById("clear-btn")

function onPlayAgain(){
   window.location.href = 'index.html';
}
function onClearHighscores(e) {
    console.log("clearing-highscores")

}
var storedScores = JSON.parse(localStorage.getItem("storedScores"))
console.log(storedScores)
for (var i = 0; i < storedScores.length; i++) {
    var player = storedScores[i].name
    var scores = storedScores[i].scores;
    var result = document.createElement("div");
    result.classList.add("results")
    result.innerHTML = `<div class="score-item">${player} - ${scores}</div>`

    scoresheet.appendChild(result);
}
backtoQuiz.addEventListener("click", onBackToQuiz);
clearHighscores.addEventListener("click", onClearHighscores);