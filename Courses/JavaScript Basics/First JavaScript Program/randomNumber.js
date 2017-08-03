// JavaScript source code
const lower = parseInt(prompt("Please tell me which number to start from"));
const upper = parseInt(prompt("Please tell me which number to stop at"));

function printMessage(message){
    document.write(message);
}

function getRandomNumber(lower, upper) {
    return Math.floor((upper - lower + 1) * Math.random()) + lower;
}

if (isNaN(lower) || isNaN(upper)) {
    console.log("Please enter a valid response");
} else {
    let result = getRandomNumber(lower, upper);
}


const message = result + " is a number between " + lower + "and " + upper;

printMessage(message);
