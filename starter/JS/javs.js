var start = document.getElementById("start");
var timer = document.getElementById("time");

var seconds = 60;

// Start the timer when start is pressed

start.addEventListener("click", function () {
    var interval = setInterval(function () {
        seconds--;
        timer.innerText= seconds;
        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
})
