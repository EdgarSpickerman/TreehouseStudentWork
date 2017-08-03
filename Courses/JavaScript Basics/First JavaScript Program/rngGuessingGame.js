// JavaScript source code
const upperBound = 6;
const randomNumber = Math.floor(upperBound * Math.random()) + 1;

const guess = prompt("I'm thinking of a random number between 1 and 6. What is it?")

if (parseInt(guess) === randomNumber) {
    document.write("Way to go that's right.")
} else {
    doucment.write("Sorry, that's wrong. The number was " + randomNumber);
}