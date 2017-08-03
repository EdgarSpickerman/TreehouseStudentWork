// JavaScript source code
/*
    Computer vs computer program. 
        how many times it takes a computer to guess a randomly generated number.
*/

const upper = 10000;
const randomNumber = getRandomNumber(upper);
var guess; 
let attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(upper * Math.random) - 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write("<p>The random number was " + randomNumber + ".</p><p> It took the computer " + attempts+ "attempts to guess correctly.</p>");