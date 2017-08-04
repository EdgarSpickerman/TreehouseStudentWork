// JavaScript source code

function printList(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

function print(html) {
    document.write(html);
}

var playlist = [];

playlist.push("I Did It May Way");

playlist.push("Respect", "Imagine");

playlist.unshift("Born to Run");

playlist.unshift("Louie Louie", "Maybellene");


printList(playlist);