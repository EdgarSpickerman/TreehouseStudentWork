// JavaScript source code
var questionAnswer = [
    { question: 'What is 1 + 1', answer: 2 },
    { question: 'What is 2 + 2', answer: 4 },
    { question: 'What is 3 + 3', answer: 6 },
    { question: 'What is 4 + 4', answer: 8 },
    { question: 'What is 5 + 4', answer: 9 }
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
    var answer = parseInt(prompt(questionAnswer[i].question));
    if (answer === questionAnswer[i].answer) {
        correctQuestion.push(questionAnswer[i].question);
        correct += 1;
    } else {
        wrongQuestion.push(questionAnswer[i].question);    
    }
}



print('<h1>You got ' + correct + ' question(s) right.</h2>');
print('You got these questions correct:');
htmlString(correctQuestion);
print('You got these questions wrong:');
htmlString(wrongQuestion);