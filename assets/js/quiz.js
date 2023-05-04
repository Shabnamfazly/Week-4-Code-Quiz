var beginQuiz = document.getElementById("BeginQuiz");
var saveScore = document.getElementById("SaveScore");
var viewScores = document.getElementById("ViewScores");
var playAgain = document.getElementById("PlayAgain");
var Welcome = document.getElementById("Welcome");
var Quiz = document.getElementById("Quiz");
var Results = document.getElementById("Results");
var Options = document.getElementById("Options");
var Message = document.getElementById("Message");
var Timer = document.getElementById("Timer");
var Summary = document.getElementById("Summary");
var secondsLeft = 0;
var scores = 0;
var currentQuestion = 0;
var countdownTimer;

function stopGame(e) {
  clearInterval(countdownTimer);
  Timer.textContent = "";
  Quiz.style.display = "none";
  Results.style.display = "block";
  Summary.textContent = "Your final score is:" + scores;
}
function onSaveScore(e) {
  var name = document.getElementById("name").value;
  if (name !== "") {
    var storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];
    var userScore = {
      name: name,
      scores: scores,
    };
    storedScores.push(userScore);
    localStorage.setItem("storedScores", JSON.stringify(storedScores));
    document.getElementById("name").value = "";
    
    window.location.href = "scores.html";
  }
}

function onViewScores(e) {
  window.location.href = "scores.html";
}
function displayQuestion() {
  console.log("The current question is" + currentQuestion);
  if (currentQuestion >= questions.length) {
    stopGame();
    return;
  }
  Options.innerHTML = "";
  console.log(questions.choices);
  Quiz.style.display = "block";
  var questionsEl = document.getElementById("Questions");
  questionsEl.textContent = questions[currentQuestion].title;
  var answerOptions = questions[currentQuestion].choices;
  for (var i = 0; i < answerOptions.length; i++) {
    console.log(answerOptions);
    var option = document.createElement("li");
    option.textContent = answerOptions[i];
    option.classList.add("options");
    Options.appendChild(option);
    option.classList.add("options");
    Options.appendChild(option);
  }
}
Options.addEventListener("click", function (e) {
  var userAnswer = e.target;
  if (userAnswer.matches("li")) {
    onSelectAnswer(userAnswer.textContent);
  }
});
function onSelectAnswer(userAnswer) {
  var rightAnswer = questions[currentQuestion].answer;
  console.log(scores);
  console.log(rightAnswer, userAnswer);
  if (rightAnswer === userAnswer) {
    scores++;
    displayMessage("That Is Correct! Well Done.");
  } else {
    scores--;
    displayMessage("That Is Incorrect :(");
  }
  currentQuestion++;
  if (questions.length > currentQuestion) {
    displayQuestion();
  } else {
    
    stopGame();
  }
}
function displayMessage(msg) {
  Message.textContent = msg;
  setTimeout(function () {
    Message.textContent = " ";
  }, 1000);
}
function onBeginQuiz() {
  secondsLeft = 60;
  currentQuestion = 0;
  scores = 0;
  countdownTimer = setInterval(function () {
    if (secondsLeft > 0) {
      Timer.textContent = secondsLeft;
    } else {
      stopGame();
    }
    secondsLeft--;
  }, 1000);
  Welcome.style.display = "none";
  Results.style.display = "none";
  Quiz.style.display = "none";
  displayQuestion();
}

beginQuiz.addEventListener("click", onBeginQuiz);
saveScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onBeginQuiz);
