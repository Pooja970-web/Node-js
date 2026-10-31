const fs=require('fs/promises');
async function manageFile(){
    try{
       await fs.writeFile("file3.txt","Hello World");
        console.log("File written successfully");
        const data=await fs.readFile("file3.txt","utf-8");
        console.log("File content is: ",data);
    }
    catch(error){
        console.log("Error occurred while managing file");
        console.log(error.message);
    }}
    manageFile()