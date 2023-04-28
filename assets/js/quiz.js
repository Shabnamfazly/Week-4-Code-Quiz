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

function stopGame (e) {
    clearInterval(countdownTimer);
    Timer.textContent = ""
    Quiz.style.display = 'none';
    Results.style.display = 'flex'
   Summary.textContent = "Your final score is:" + scores;

}
 function onSaveScore (e) {
    var name = document.getElementById("name").value
    if (name !== ""){
      localStorage.setItem(initials,scores)
      document.getElementById("name").value = "";
    }
    }
function onViewScores (e) {
   window.location.href = 'scores.html';

}
function onSelectAnswer (e) {
   var rightAnswer = questions[currentQuestion].answer;
   var userAnswer = e.target.textContent;

   if (rightAnswer === userAnswer) {
      scores++ ;
      displayMessage ('That Is Correct! Well Done.')
   } else{
      scores--;
      displayMessage ('That Is Incorrect :(')
   }
   displayQuestion();
}

function displayMessage (msg) {
   Message.textContent = msg;

   setTimeout(function () {
      Message.textContent = " ";
   }, 1000);
}

function displayQuestion() {
   currentQuestion++;

   console.log('The current question is'+ currentQuestion);

if (currentQuestion >= questions.length) {
   stopGame();
   return;
}



Options.innerHTML = "";

for (var i = 0; i< questions.choices.length; i++) {

   var option = document.createElement ("div");
   option.textContent = questions.choices[i];
   option.onclick = onSelectAnswer;
   option.classList.add.apply("options");
   
   Options.appendChild(option);
   option.classList.add("options");

   Options.appendChild(option);

}
}

function onBeginQuiz () {

   secondsLeft = 100;
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

Welcome.style.display = 'none';
Results.style.display = 'none';
Quiz.style.display = 'none';

displayQuestion ();
}

beginQuiz.addEventListener("click", onBeginQuiz);
saveScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onBeginQuiz);

