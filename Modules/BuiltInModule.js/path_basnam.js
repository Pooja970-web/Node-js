//ath.basename is used to get the last portion of a path, similar to the Unix basename command.
const path=require('path');
const filepath="users/poojs/notes.txt";
console.log(path.basename(filepath));
