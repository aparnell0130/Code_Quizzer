// global variables
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submitBtn');
var currentScore = document.querySelector('#currentScore');
// get current score from local storage
var newScore = localStorage.getItem('newScore');

// creates array for high scores in local storage
var quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];

// clears old score from screen
currentScore.innerHTM = "";
// sets new score on screen
currentScore.textContent = newScore;

// save score function
function saveScore() {

    // creates key value pair object for initials and new score
    var score = {
        user: initials.value,
        score: newScore
    }

    // pushes object to high scores array
    quizScores.push(score)

    // sorts scores from highest to lowest
    quizScores.sort(function (a, b) {
        return b.score - a.score;
    });

    // removes lowest score to add new if new score is higher than top 5 high scores 
    quizScores.splice(5);

    // pushes high scores array to local storage
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
}


// click save button
submitBtn.addEventListener('click', saveScore);