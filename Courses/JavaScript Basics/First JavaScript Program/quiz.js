// JavaScript source code
/*
    Challenge Instructions

    Ask at least five questions

    Keep track of the number of questions the user answered correctly

    Provide a final message after the quiz letting the user know the number of questions he or she got right.

    Rank the player.

    If the player answered all five correctly, give that player the gold crown:
    3-4 is a silver crown;
    1-2 correct answers is a bronze crown
    0 correct is no crown at all.
*/

//ask 5 questions
let correctAnswer = 0;

let answer = prompt("What does 1 + 1 equal?");

if (parseInt(Answer) === 2) {
    correctAnswer += 1;
}

let question2 = prompt("What does 2 + 2 equal?");
if (parseInt(Answer) === 2) {
    correctAnswer += 1;
}

let question3 = prompt("What does 3 + 3 equal?");
if (parseInt(Answer) === 2) {
    correctAnswer += 1;
}

let question4 = prompt("What does 4 + 5 equal?");
if (parseInt(Answer) === 2) {
    correctAnswer += 1;
}

let question5 = prompt("What does 5 + 5 equal?");
if (parseInt(Answer) === 2) {
    correctAnswer += 1;
}

if (correctAnswer === 5) {
    document.write("You earned the gold star ranking. By answering " + correctAnswer + "/5 questions correctly.");
} else if (correctAnswer > 2) {
    document.write("You earned the silver star ranking. By answering " + correctAnswer + "/5 questions correctly.");
} else if (correctAnswer > 0) {
    document.write("You earned the bronze star ranking. By answering " + correctAnswer + "/5 questions correctly.");
} else {
    document.write("You did not answer any questions correctly.");
}

