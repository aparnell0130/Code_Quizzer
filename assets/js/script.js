var timer = document.getElementById('time');
var startBtn = document.getElementById('start');


// function to start game press button jump to in game html
function startGame() {
    window.location.assign('./assets/pages/ingame.html');

}

startBtn.addEventListener('click', startGame)