var timer = document.getElementById('time');
var startBtn = document.getElementById('start');

var allQuestions = [
    {
        question: "How old is Abe Lincoln",
        answers: {
            a: '100',
            b: '99',
            c: '88',
            d: 'dead'
        },
        correctAnswer: 'd'
    },
    {
        question: "How old is George Washington",
        answers: {
            a: '100',
            b: '99',
            c: '88',
            d: 'dead'
        },
        correctAnswer: 'd'
    },
    {
        question: "How old is Teddy Roosevelt",
        answers: {
            a: '100',
            b: '99',
            c: '88',
            d: 'dead'
        },
        correctAnswer: 'd'
    }
];

function startGame(){
    window.location.assign('./ingame.html');
    startTimer()
}

function startTimer(){
        // set time left for countdown
        var secondsLeft = 3;
        
        // interval function/ how timer counts down
        var timerInterval = setInterval(function () {
          // when timer starts add text to screen
          timer.textContent = secondsLeft;
          // when timer starts subtract seconds
          secondsLeft--;
      
          // when time reaches 0
          if (secondsLeft === 0) {
            // clear countdown text
            // start words 
            // speedRead();
            // clear timer
            clearInterval(timerInterval);
          }
      
        }, 1000);
}
startBtn.addEventListener('click',startGame)