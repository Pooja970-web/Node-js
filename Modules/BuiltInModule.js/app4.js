const fs=require("node:fs");
fs.unlinkSync("notes.txt");
console.log("File deleted successfully");
