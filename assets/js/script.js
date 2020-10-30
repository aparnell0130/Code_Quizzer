var timer = document.getElementById('time');
var startBtn = document.getElementById('start');



function startGame() {
    window.location.assign('./assets/pages/ingame.html');

}

startBtn.addEventListener('click', startGame)