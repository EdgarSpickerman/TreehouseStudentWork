// JavaScript source code
const randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;

function getRandomNumber(upper) {
    return Math.floor(upper * Math.random()) + 1;
}

do {
    guess = prompt("I am thinking of a number between 1 and 10. What is it?");
    guessCount += 1;
} while (parseInt(guess) !== randomNumber)

document.write("It took you " + guessCount + " tries to guess the random number I was thinking.");