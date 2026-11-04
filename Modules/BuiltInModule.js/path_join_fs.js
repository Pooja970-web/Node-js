const fs=require("node:fs");
const path=require("node:path");
const filepath = path.join("files","notes.txt");
fs.writeFileSync(filepath,"hello bro!");
console.log("File created !");