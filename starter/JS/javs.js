var start = document.getElementById("start");
var timer = document.getElementById("time");
var question = document.getElementById("questions");
var choices = document.getElementById("choices");
var question_title = document.getElementById("question-title");
var wrapper = document.querySelector('.wrapper');
var elements = document.querySelectorAll('.hide');
var firstHide = elements[0];
var feedBack = elements[1];
var thirdHide = elements[2];
var starrScreen = document.getElementById("start-screen");


var score = 0;
var seconds = 60;
currentQuestionIndex = 0;

const questionsArray = [
  {
      question: "The Skeleton of a web page ____?",
      choices: [
          { text: "HTML", isCorrect: true },
          { text: "CSS", isCorrect: false },
          { text: "JS", isCorrect: false },
          { text: "Choice 4", isCorrect: false }
      ]
  },
  {
      question: "What does CSS stand for?",
      choices: [
          { text: "Cascading Style Sheet", isCorrect: true },
          { text: "Computer Style Sheet", isCorrect: false },
          { text: "Creative Style Sheet", isCorrect: false },
          { text: "Correct Style Sheet", isCorrect: false }
      ]
  }
];

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
    question_title.innerText = "The Skeleton of a web page ____?"
    choices.innerHTML = "<button id='choice1' data-answer='true'>HTML</button> <button id='choice2'>CSS</button> <button id='choice3'>JS</button> <button id='choice4'>Choice 4</button>"
  } 

document.getElementById('choices').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    
      var isCorrect = event.target.getAttribute('data-answer') === 'true';
      if (isCorrect) {
          // Increment the score for a correct answer
          score++;
          ifCorrect()
          
          // Perform additional actions for a correct answer
      } else {
          ifIncorrect()
          // Perform actions for an incorrect answer
      }
      setTimeout(function() {
        nextQuestion();
    }, 2000);
  }
});

function ifCorrect() {
  feedBack.classList.remove('hide')
  feedBack.innerText = "Correct"
  feedBack.style.color = "green"
  feedBack.style.fontWeight = "bold"
  feedBack.style.fontSize = "20px"
  feedBack.style.textAlign = "center"
}

function ifIncorrect() {
  feedBack.classList.remove('hide')
  feedBack.innerText = "Wrong"
  feedBack.style.color = "red"
  feedBack.style.fontWeight = "bold"
  feedBack.style.fontSize = "20px"
  feedBack.style.textAlign = "center"
}

function nextQuestion() {
  question_title.innerText = "A good name for a web page is ____?"
  choices.innerHTML = "<button id='choice1' data-answer='true'>Mybody</button> <button id='choice2'>Myname</button> <button id='choice3'>Choice 3</button> <button id='choice4' data-answer='true'>Choice 4</button>"
}
cument.getElementById('choices').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
      var isCorrect = event.target.getAttribute('data-answer') === 'true';
      if (isCorrect) {
          // Increment the score for a correct answer
          score++;
          ifCorrect()
          
          // Perform additional actions for a correct answer
      } else {
          ifIncorrect()
          // Perform actions for an incorrect answer
      }
  }
});