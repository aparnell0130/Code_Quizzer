var timer = document.getElementById('time');
var choices = Array.from(document.querySelectorAll('.content'))
var question = document.querySelector('#questions');
var currentQuestion = {};
var questionArray = [];
var counter = 0;




var allQuestions = [
    {
        question: "How would you check for how many items are in an array?",
        1: 'array.length',
        2: 'check(array)',
        3: 'length.array',
        4: 'array.items',
        correctAnswer: 1,
    },
    {
        question: 'Array = ["A","B","C","D"] Array.length = ____',
        1: 'B',
        2: '4',
        3: 'C',
        4: '2',
        correctAnswer: 2,
    },
    {
        question: "What is js short for?",
        1: 'Just saying',
        2: 'Java Script',
        3: 'JavaScript',
        4: 'June Solstice',
        correctAnswer: 3,
    },
    {
        question: "What is => used for in JavaScript?",
        1: 'arrow function',
        2: 'equals greater than',
        3: 'excited face',
        4: 'next',
        correctAnswer: 1,
    },
    {
        question: "setInterval is used to start a timer ______ is used to stop it.",
        1: 'stop-Interval',
        2: 'stopInterval',
        3: 'clearInterval',
        4: 'clear-Interval',
        correctAnswer: 3,
    },
    {
        question: "What belongs at the top of every HTML page",
        1: '<html>',
        2: '<head>',
        3: '<h1>',
        4: '<!DOCTYPE html>',
        correctAnswer: 4,
    },
    {
        question: "score.sort(function (a, b) {return b - a}) is _____",
        1: 'removing "a" from an array',
        2: 'sorting an array in reverse order',
        3: 'removing the first item from an array',
        4: 'removing the last item from an array',
        correctAnswer: 2,
    }
];
var secondsLeft = 60;
startTimer()
function startTimer() {
    // set time left for countdown


    // interval function/ how timer counts down
    var timerInterval = setInterval(function () {
        // when timer starts subtract seconds
        secondsLeft--;
        // when timer starts add text to screen
        timer.textContent = secondsLeft;


        // when time reaches 0
        if (secondsLeft <= 0 || questionArray.length == counter) {
            var score = secondsLeft;
            console.log(score)
            localStorage.setItem('newScore', score)
            window.location.assign('./highscores.html')
            clearInterval(timerInterval);
        }

        if (secondsLeft <= 20) {
            timer.style.background = 'red';
        }

        if (secondsLeft < 10) {
            timer.textContent = "0" + secondsLeft;
        }

    }, 1000);
    questionGen();
}

function questionGen() {
    counter++;
    questionArray = [...allQuestions]


    var index = Math.floor(Math.random() * questionArray.length);
    currentQuestion = questionArray[index];
    question.textContent = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset['index'];
        choice.textContent = currentQuestion[number];

    });

    console.log(index)
}

choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        var clicked = event.target
        var selected = clicked.dataset['index']

        if (selected != currentQuestion.correctAnswer) {
            secondsLeft -= 10;
            questionGen();
        }
        if (selected == currentQuestion.correctAnswer) {

            questionGen();
        }

    })
})

