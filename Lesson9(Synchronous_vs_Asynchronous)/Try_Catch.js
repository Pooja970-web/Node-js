const fs=require("fs/promises");
async function readFiledata(){
    try{const data=await fs.readFile("file1.txt","utf-8");
    console.log(data);}
    catch(error){
        console.log("File read nhi ho rhi h!");
        console.log(error.message);
    }
}
readFiledata();
/*
Try --means try to run this code.
Catch --means if there is an error in the try block, then catch that error and run this code.
error-- node.js se milne vali error information ka object 
message --us object ki ek property h ,jisme error ka vivran hota h(ENOENT: no such file or directory, open 'E:\Node.js\Lesson9(Synchronous_vs_Asynchronous)\file1.txt')

*/