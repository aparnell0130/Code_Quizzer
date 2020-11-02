var quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];
var highScoresList = document.querySelector('#highScoreList');
// console.log(quizScores)
function createHighScores() {
    for (var i = 0; i < quizScores.length; i++) {
        var li = quizScores[i].user + " : " + quizScores[i].score;

        var liEl = document.createElement('li');
        liEl.textContent = li
        console.log(li, liEl)

        highScoresList.appendChild(liEl);
        highScoresList.firstElementChild.nextElementSibling.style.backgroundColor = 'springgreen'
        highScoresList.firstElementChild.nextElementSibling.style.borderRadius = '10px'

    }

}
createHighScores()
