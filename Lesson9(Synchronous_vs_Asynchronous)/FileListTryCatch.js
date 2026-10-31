const fs=require("fs/promises");
async function showFile(){
    try{
const foiles= await fs.readdir("Modules");
console.log(foiles);
}
catch(error){
    console.log(error.message);
    }}
showFile();