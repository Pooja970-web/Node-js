const fs=require('fs/promises');
async function addData(){
    try{
  await fs.appendFile("file3.txt","I am practicing node .js");
const data=await fs.readFile("file3.txt","utf-8");
console.log(data);
}
catch(error){
    console.log(error.message);
}}
addData();