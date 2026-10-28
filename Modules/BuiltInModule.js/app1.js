//readFileSync() method is used to read the content of a file synchronously. It takes two arguments: the path of the file and the encoding format. In this example, we are reading the content of a file named "notes.txt" in UTF-8 encoding format and storing it in a variable called "data". Finally, we are logging the content of the file to the console using console.log() method.
const fs=require("node:fs");
const data=fs.readFileSync("notes.txt","utf-8");
console.log(data);