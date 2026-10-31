const fs=require("fs/promises");
async function readFileData(){
    const data=await fs.readFile("file.txt","utf-8");
    console.log(data);
}
readFileData();