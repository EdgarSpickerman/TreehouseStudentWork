// JavaScript source code

function printSongs( songs ) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    }

    listHTML += '</ol>';
    print(listHTML);
}

function print(html) {
    document.write(html);
}

var playlist = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['Maybellene', 'Chuck Berry']
];


printSongs(playlist);