// JavaScript source code
//Create a story-telling program:

//    1. Use the prompt() command several times to collect different types of words -- nouns, verbs, adjectives.
//    2. Store the result of each prompt() command in a different variable.
//    3. Combine the variables with other strings to create one or more non- sensical statements.
//    4. Print the resulting story to the browser using the document.write() command.

let questionsLeft = 5; 
const scaryAnimal = prompt("Name a scary animal. (" + questionsLeft + " left)");
questionsLeft -= 1;
const smallAnimal = prompt("Name a small animal (" + questionsLeft + " left)");
questionsLeft -= 1;
const animalAction = prompt("Name something an animal would do after eating. (" + questionsLeft + " left)");
questionsLeft -= 1;
const animalDisturbed = prompt("Name what an animal would do when disturbed. (" + questionsLeft + " left)");
questionsLeft -= 1;
const animalColor = prompt("Name a color (" + questionsLeft + " left)");

alert("All done. Ready for your story.")

let Story = 'Once upon a time there lived a ' + scaryAnimal + ' in a forest.';
    Story += 'One day after a heavy meal.It was ' + animalAction + ' under a ' + animalColor + ' tree.';
    Story += '';
    Story += 'After a while, there came a ' + smallAnimal + ' and it started to play on the ' + scaryAnimal + '.';
    Story += 'Suddenly the ' + scaryAnimal + ' got up with ' + animalDisturbed + ' and looked for those who disturbed its nice sleep.';
    Story += 'Then it saw a small ' + smallAnimal + ' standing trembling with fear.';
    Story += 'The ' + scaryAnimal + ' jumped on it and started to kill it.';
    Story += 'The ' + smallAnimal + ' requested the ' + scaryAnimal + ' to forgive it.';
    Story += 'The ' + scaryAnimal + ' felt pity and left it.';
    Story += 'The ' + smallAnimal + ' ran away.'; 
    Story += 'On another day, the ' + scaryAnimal + ' was caught in a net by a hunter';.
    Story += 'The ' + smallAnimal + ' came there and cut the net.';
    Story += 'Thus it escaped.';
    Story += 'There after, the ' + smallAnimal + ' and the ' + scaryAnimal + ' became friends.';
    Story += 'They lived happily in the forest afterwards.';

document.write(story);