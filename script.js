var startBtn = document.getElementById("start");
var questionTitle = document.getElementById("question")
var answerList = document.getElementById("answers")
var gameSpace = document.getElementById("game")
var n = 0
var score = 0
answerOne = document.getElementById("one")
answerTwo = document.getElementById("two")
answerThree = document.getElementById("three")
answerFour = document.getElementById("four")
highscoreBtn = document.getElementById("hiscore")
highscoreSpace = document.getElementById("highscores")
highscoreOne = document.getElementById("score1")
highscoreTwo = document.getElementById("score2")
highscoreThree = document.getElementById("score3")
highscoreFour = document.getElementById("score4")
highscoreFive = document.getElementById("score5")



var timer = document.getElementById("timer");
var timeLeft = 60;
var questions = [
    "How much gold does a ruby crystal cost?",
    "How much AD does a long sword provide?",
    "What type of damage is Rammus strongest against?",
    "What country was Season 1 World's held in?",
    "Who is the unkillable Demon King?"
]
var answers = [
    [200,300,400,450],
    [5,7,10,15],
    ["Physical","Magical","True","Percent Health"],
    ["Iceland","USA","Korea","Sweden"],
    ["Viego","Faker","Doublelift","Ryze"]
]
function setTime() {

    function nextQuestion() {
        if(n < 5) {
        questionTitle.textContent = questions[n];
        answerOne.textContent = answers[n][0];
        answerTwo.textContent = answers[n][1];
        answerThree.textContent = answers[n][2];
        answerFour.textContent = answers[n][3];
        } else {
            score = timeLeft;
            clearInterval(timerInterval)
            endGame()
        }
        }
    highscoreSpace.classList.add("hidden")
    gameSpace.classList.remove("hidden")
    n = 0
    timeLeft = 60;
    nextQuestion()
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining";
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            score = timeLeft
            endGame()
        }

    }, 1000)
    document.addEventListener("click", function(evnt){
        console.log(n)
        if(evnt.target.getAttribute("class")== "answer") {
            if(evnt.target.textContent.includes("400") || evnt.target.textContent.includes("10") || evnt.target.textContent.includes("Physical") || evnt.target.textContent.includes("Sweden") || evnt.target.textContent.includes("Faker")) {
                if(n < 5) {
                    n = n+1;
                    nextQuestion()
                } else {
                    score = timeLeft
                    clearInterval(timerInterval)
                    endGame()
                    return
                }
                
            } else {
                timeLeft = timeLeft-15;
                n = n+1;
                nextQuestion();
            }
        }


    });
    if(n == 5) {
        score = timeLeft
        clearInterval(timerInterval)
        endGame()
        return
    }

}
startBtn.addEventListener("click",function() {
    n = 0
    setTime()
    startBtn.classList.add("hidden")


})
// function nextQuestion() {
// if(n < 5) {
// questionTitle.textContent = questions[n];
// answerOne.textContent = answers[n][0];
// answerTwo.textContent = answers[n][1];
// answerThree.textContent = answers[n][2];
// answerFour.textContent = answers[n][3];
// } else {
//     score = timeLeft;
//     endGame()
// }
// }
   

function endGame() {
startBtn.classList.remove("hidden")
gameSpace.classList.add("hidden")
console.log(score)
}
highscoreBtn.addEventListener("click", function() {

    highscoreSpace.classList.remove("hidden")
    gameSpace.classList.add("hidden")

})
