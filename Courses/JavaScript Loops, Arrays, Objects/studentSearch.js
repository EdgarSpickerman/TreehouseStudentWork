// JavaScript source code
var quiz = [
    ['What is 1+1', 2],
    ['What is 2+2', 4],
    ['What is 3+3', 6],
    ['What is 4+4', 8],
    ['What is 5+5', 10]
];

var correctQuestion = [];

var wrongQuestion = [];

var correct = 0;

function print(list) {
    var htmlOutut = '<ol>';
    for (var i = 0; i < list.length; i++) {
        htmlOutut += '<li>' + list[i] + '</li>';
    }
    htmlOutut += '</ol>'

    document.write(htmlOutut);
}

for (var i = 0; i < quiz.length; i++) {
    var answer = parseInt(prompt(quiz[i][0]));
    if (answer === quiz[i][1]) {
        correctQuestion.push(quiz[i][0]);
        correct += 1;
    } else {
        wrongQuestion.push(quiz[i][0]);    
    }
}



document.write('<h1>You got ' + correct + ' question(s) right.</h2>');
document.write('You got these questions correct:');
print(correctQuestion);
document.write('You got these questions wrong:');
print(wrongQuestion);
<ol>
    <li>question</li>

</ol>