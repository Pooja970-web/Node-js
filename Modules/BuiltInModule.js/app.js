const fs=require("node:fs");
fs.writeFileSync("message.text","hello bro!");
console.log("File created successfully");
const data=fs.readFileSync("notes.txt","utf-8");
console.log(data);