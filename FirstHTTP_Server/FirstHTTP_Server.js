const http=require ("http");//We import Node.js's built-in http module.
const server=new http.createServer((req,res)=>{//We create a server object that listens for requests and sends responses.
    res.end("Hello World!");//We send a response to the client with the message "Hello World!".
});
server.listen(3000,()=>{//We tell the server to listen on port 3000 and print a message when it starts listening.
    console.log("Server is running on port 3000");
});
// req--information sent by the client to the server.
// res--information sent by the server to the client.