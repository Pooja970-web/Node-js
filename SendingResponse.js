const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Welcome to My Page</h1></body>');
    res.write('</html>');
    res.end();
});
const port=3000;
server.listen(port,()=>{    
    console.log(`Server is running on port ${port}`);
});