var timer = document.getElementById('time');
var choices = Array.from(document.querySelector('.content'))
var question = document.querySelector('#questions');
var currentQuestion = {};
var questionArray = [];
var counter = 0;



var allQuestions = [
    {
        question: "How old is Abe Lincoln",
        choice1: '100',
        choice2: '99',
        choice3: '88',
        choice4: 'dead',
        correctAnswer: 4,
    },
    {
        question: "How old is George Washington",
        choice1: '100',
        choice2: '99',
        choice3: '88',
        choice4: 'dead',
        correctAnswer: 4,
    },
    {
        question: "How old is Teddy Roosevelt",
        choice1: '100',
        choice2: '99',
        choice3: '88',
        choice4: 'dead',
        correctAnswer: 4,
    }
];

startTimer()
function startTimer() {
    // set time left for countdown
    var secondsLeft = 60;

    // interval function/ how timer counts down
    var timerInterval = setInterval(function () {
        // when timer starts subtract seconds
        secondsLeft--;
        // when timer starts add text to screen
        timer.textContent = secondsLeft;


        // when time reaches 0
        if (secondsLeft <= 0) {
            // window.location.assign('./highscores.html')
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
    questionArray = [...allQuestions]
    counter++;

    var index = Math.floor(Math.random() * questionArray.length);
    currentQuestion = questionArray[index];
    question.textContent = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset['index'];
        choice.textContent = currentQuestion['choice' + number];

        return choice.textContent;
    }); console.log(choice.textContent)


    // questionArray.splice(index, 1)
    // console.log(currentQuestion.question)
}
