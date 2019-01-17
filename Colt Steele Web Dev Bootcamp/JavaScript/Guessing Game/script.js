var stringGuess = prompt("What number am I thinking of?");
var guess = Number(stringGuess);
var number = Math.floor(Math.random() * 10 + 1);

	if (guess === number) {
		alert("You are correct");
	} else if (guess > number) {
		alert("You guessed to high, guess again");
	} else {
		alert("You guessed to low");
}