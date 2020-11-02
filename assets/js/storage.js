// pulls high scores array from local storage
var quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];
var highScoresList = document.querySelector('#highScoreList');

// function to put high scores on page by looping through and appending li element to page for each score in local storage
function createHighScores() {
    for (var i = 0; i < quizScores.length; i++) {
        var li = quizScores[i].user + " : " + quizScores[i].score;

        var liEl = document.createElement('li');
        liEl.textContent = li

        highScoresList.appendChild(liEl);
        // styles highest score
        highScoresList.firstElementChild.nextElementSibling.style.backgroundColor = 'springgreen'
        highScoresList.firstElementChild.nextElementSibling.style.borderRadius = '10px'

    }

}
createHighScores()
