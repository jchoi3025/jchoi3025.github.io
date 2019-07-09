var wins = 0;
var losses = 0;
var Guessesremaining = 10;
var lettersGuessed = prompt("What's your guess?");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(game) {
    userGuess = game.key.toLowerCase();
	lettersGuessed.push(userGuess);
	remainingGuesses--;
	document.getElementById("letters-guessed").innerHTML = lettersGuessed
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses
    
    if ((userGuess === randomGuess) && (remainingGuesses > 0)) {
		alert("You Win!");
		wins++;
		lettersGuessed.length = 0;
        document.getElementById("wins").innerHTML = wins
        location.reload("game");
}

if (userGuess !== randomGuess) {
    alert("Try Again!");
    losses++;
    document.getElementById("losses").innerHTML = losses

    if (remainingGuesses === 0) {
		alert("You lost!")
    }
    
    else if (remainingGuesses === 0) {
		location.reload("game");
	}