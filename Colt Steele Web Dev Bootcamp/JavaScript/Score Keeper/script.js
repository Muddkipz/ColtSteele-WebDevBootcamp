//global variables
var playerOne = document.getElementById("p1");
var playerTwo = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Points = document.getElementById("score1");
var p2Points = document.getElementById("score2");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p");


//update winning score var from input
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = numInput.value;
});

//add score to player1
playerOne.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		if(p1Score == winningScore) {
			p1Points.classList.add("winner");
			gameOver = true;
		}
	}
	p1Points.textContent = p1Score;
});

//add score to player2
playerTwo.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score == winningScore) {
			p2Points.classList.add("winner");
			gameOver = true;
		}
	}
	p2Points.textContent = p2Score;
});

//resets scoreboard
reset.addEventListener("click", function() {
	p1Points.textContent = 0;
	p2Points.textContent = 0;
	p1Points.classList.remove("winner");
	p2Points.classList.remove("winner");
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
});