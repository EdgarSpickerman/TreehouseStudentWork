// JavaScript source code
const lowerBound = parseInt(prompt("Please tell me which number to start from"));
const upperBound = parseInt(prompt("Please tell me which number to stop at"));

function printMessage(message){
    document.write(message);
}

function getRandomNumber(lowerBound, upperBound) {
    return Math.floor((upperBound - lowerBound + 1) * Math.random()) + lowerBound;
}

let result = getRandomNumber(lowerBound, upperBound);

let message = "result + " is a number between " + lowerBound + "and " + upperBound"

printMessage(message);
