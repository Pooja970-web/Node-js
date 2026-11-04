const os=require("node:os");
console.log(os.platform());//platform of the system
console.log(os.arch());//architecture of the system
console.log(os.totalmem());//total system memory
console.log(os.freemem());//free system memory
console.log(os.cpus());//cpu information
console.log(os.homedir());//home directory of the current user  