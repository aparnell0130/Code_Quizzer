var username = document.querySelector('#initials');
var submitBtn = document.querySelector('#submitBtn');
var currentScore = document.querySelector('#currentScore');
var newScore = localStorage.getItem('newScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var top5 = 4;
currentScore.innerHTM = "";
currentScore.textContent = newScore;

console.log(localStorage.getItem('newScore'))