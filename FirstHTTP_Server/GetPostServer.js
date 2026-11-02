const http=require("http");//We import Node.js's built-in http module.
const myHttp=new http.createServer((req,res)=>{
    if(req.method==="GET"){
        res.end("Welcome to homepage");//We send a response to the client with the message "Welcome to homepage".
    }
    else if(req.method==="POST"){
        res.end("Welcome to about page");//We send a response to the client with the message "Welcome to about page".
    }
    else{
        res.statusCode=405;
        res.end("Page not found");//We send a response to the client with the message "Page not found". 
    }});
    myHttp.listen(3000,()=>{//We tell the server to listen on port 3000 and print a message when it starts listening.   
        console.log("Server is running on port 3000");
    });