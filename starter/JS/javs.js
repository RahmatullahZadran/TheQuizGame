var start = document.getElementById("start");
var timer = document.getElementById("time");
var question = document.getElementById("questions");
var choices = document.getElementById("choices");
var question_title = document.getElementById("question-title");
var wrapper = document.querySelector('.wrapper');
var elements = document.querySelectorAll('.hide');
var firstHide = elements[0];
var secondHide = elements[1];
var thirdHide = elements[2];
var starrScreen = document.getElementById("start-screen");

var seconds = 60;

// Start the timer when start is pressed

start.addEventListener("click", function () {
    var interval = setInterval(function () {
        seconds--;
        timer.innerText= seconds;
        start.disabled = true;
        starrScreen.classList.add('hide')
        firstHide.classList.remove('hide')
        questions()
        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
})


function questions() {
    question_title.innerText = "Question 1"
    choices.innerHTML = "<button id='choice1'>Choice 1</button> <button id='choice2'>Choice 2</button> <button id='choice3'>Choice 3</button> <button id='choice4'>Choice 4</button>"
}

  
