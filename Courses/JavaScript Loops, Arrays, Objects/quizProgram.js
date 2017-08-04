// JavaScript source code
var questionAnswer = [
    ['What is 1+1', 2],
    ['What is 2+2', 4],
    ['What is 3+3', 6],
    ['What is 4+4', 8],
    ['What is 5+5', 10]
];

var correctQuestion = [];

var wrongQuestion = [];

var correct = 0;

function print(message) {
    document.write(message);

    /*  using the dom model
        var outputDiv = document.getElementById('output') //using dom
        outputDiv.innerHTML = message;
    */
}

function htmlString(array) {
    var htmlOutut = '<ol>';
    for (var i = 0; i < array.length; i++) {
        htmlOutut += '<li>' + array[i] + '</li>';
    }
    htmlOutut += '</ol>'

    print(htmlOutut);
}

for (var i = 0; i < questionAnswer.length; i++) {
    var answer = parseInt(prompt(questionAnswer[i][0]));
    if (answer === questionAnswer[i][1]) {
        correctQuestion.push(questionAnswer[i][0]);
        correct += 1;
    } else {
        wrongQuestion.push(questionAnswer[i][0]);    
    }
}



print('<h1>You got ' + correct + ' question(s) right.</h2>');
print('You got these questions correct:');
htmlString(correctQuestion);
print('You got these questions wrong:');
htmlString(wrongQuestion);