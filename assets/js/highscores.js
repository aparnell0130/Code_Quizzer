var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submitBtn');
var currentScore = document.querySelector('#currentScore');
var newScore = localStorage.getItem('newScore');


var quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];

var top5 = 5;
currentScore.innerHTM = "";
currentScore.textContent = newScore;

function saveScore() {

    var score = {
        user: initials.value,
        score: newScore
    }

    quizScores.push(score)

    quizScores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(typeof score)
    quizScores.splice(5);

    localStorage.setItem('quizScores', JSON.stringify(quizScores));
}



submitBtn.addEventListener('click', saveScore);
// console.log(quizScores)
