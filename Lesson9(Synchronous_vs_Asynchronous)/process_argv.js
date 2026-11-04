//process module is used to get the command line arguments
const name=process.argv[2];
console.log("Hello "+name+"! Welcome to Node.js");
/*
This is a built-in object in Node.js that provides information about the running program.
.--means we are accessing the argv property
[0] is the path to the Node.js executable.
[1] is the path to the script being executed.
[2] is the first command line argument.
*/