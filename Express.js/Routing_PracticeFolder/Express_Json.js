const express=require("express");
const app=express();
//Moiddleware to read JSON data from request body
app.use(express.json());
//POST route to handle incoming JSON data
app.post("/users",(req,res)=>{
  console.log((req.body));
  res.send("Data received successfully");
});

//Start server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})