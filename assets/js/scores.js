var scoresheet = document.getElementById("scoresheet")
var playAgain = document.getElementById("PlayAgain")

function onPlayAgain(){
   window.location.href = 'index.html';
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