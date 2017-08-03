// JavaScript source code
const secondsPerMin = 60;
const minsPerHr = 60;
const hrsPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const yearsAlive = ParseInt(prompt("How many years have you been alive?"));

const secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * hrsPerDay * minsPerHr * secondsPerMin;

document.write("You have been alive " + secondsAlive + " seconds!")