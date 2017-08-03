// JavaScript source code

const lowerBound = parseInt(prompt("Please tell me which number to start from"));

const upperBound = parseInt(prompt("Please tell me which number to stop at"));

const result = Math.floor((upperBound-lowerBound + 1) * Math.random()) + lowerBound;

document.write(result + " is a number between " + lowerBound + "and " + upperBound);