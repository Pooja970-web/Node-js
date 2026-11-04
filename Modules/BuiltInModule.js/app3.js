//appendFileSync() method is used to append content to a file synchronously. It takes two arguments: the path of the file and the content to be appended. In this example, we are appending the string "I am beginner in nodejs" to a file named "notes.txt". If the file does not exist, it will be created. Finally, we are logging a success message to the console using console.log() method.
const fs=require("node:fs");
fs.appendFileSync("notes.txt","I am beginer in nodejs");
console.log("Content added successfully");