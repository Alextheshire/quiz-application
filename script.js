var timer = document.getElementById("timer");
var timeLeft = 60;
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining";
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endGame()
        }

    }, 1000)
}
startBtn = document.getElementById("start")
startBtn.addEventListener("click",function() {
    setTime()
});

function endGame() {

}
