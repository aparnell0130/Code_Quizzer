var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submitBtn');
var currentScore = document.querySelector('#currentScore');
var newScore = localStorage.getItem('newScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var top5 = 5;
currentScore.innerHTM = "";
currentScore.textContent = newScore;

console.log(localStorage.getItem('newScore'))

function saveScore() {

    var score = {
        score: newScore,
        user: initials.value
    }

    highScores.push(score)

    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(typeof score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
}
submitBtn.addEventListener('click', saveScore);
console.log(highScores)
