// global variables
var timer = document.getElementById('time');
var choices = Array.from(document.querySelectorAll('.content'))
var question = document.querySelector('#questions');
var currentQuestion = {};
var allQuestions = [];
var counter = 0;
var rightOrWrong = document.querySelector('.rightOrWrong')


// question array with objects
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

// set time left for countdown
var secondsLeft = 60;
startTimer()
function startTimer() {


    // interval function/ how timer counts down
    var timerInterval = setInterval(function () {
        // when timer starts subtract seconds
        secondsLeft--;
        // when timer starts add text to screen
        timer.textContent = secondsLeft;


        // when time reaches 0 
        if (secondsLeft <= 0 || allQuestions.length + 7 < counter) {
            // store secondLeft to score
            var score = secondsLeft;
            // put current score in local storage
            localStorage.setItem('newScore', score)
            // jump to high scores page
            window.location.assign('./highscores.html')
            // stop timer
            clearInterval(timerInterval);
        }

        // seconds below 20
        if (secondsLeft <= 20) {
            // turn bubble around time to red
            timer.style.background = 'red';
        }

        if (secondsLeft < 10) {
            // format time to have minimum 2 digits
            timer.textContent = "0" + secondsLeft;
        }

    }, 1000);
    questionGen();
}

// generate question function
function questionGen() {
    // counter used to exit game 

    counter++;
    rightOrWrong.textContent = ""
    rightOrWrong.style.padding = '0'
    // call random question
    randomQuestion();

    // gets each choice for random question
    choices.forEach(function (choice) {
        var number = choice.dataset['index'];
        choice.textContent = currentQuestion[number];

    });

    // get random question
    function randomQuestion() {
        var index = Math.floor(Math.random() * allQuestions.length);
        currentQuestion = allQuestions[index];
        question.textContent = currentQuestion.question;
        allQuestions.splice(index, 1)
    }
}

// adds click event to each choice for question
choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        event.preventDefault();
        var clicked = event.target
        var selected = clicked.dataset['index']

        // if wrong answer
        if (selected != currentQuestion.correctAnswer) {
            // subtract 10 seconds generate new question
            secondsLeft -= 10;
            wrongAnswer()

            setTimeout(function () {
                questionGen();

            }, 1000)
        }
        // if right question generate new question
        else {
            rightAnswer()
            setTimeout(function () {
                questionGen();
            }, 1000)
        }

    })

})

function rightAnswer() {
    rightOrWrong.textContent = "Correct"
    rightOrWrong.setAttribute('style', 'color: seashell; background-color: green; padding: 10px; border-radius: 5px')
}
function wrongAnswer() {
    rightOrWrong.textContent = "Wrong"
    rightOrWrong.setAttribute('style', 'color: seashell; background-color: red; padding: 10px; border-radius: 5px')
} 
