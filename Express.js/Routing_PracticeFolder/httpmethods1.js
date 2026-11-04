const express=require("express");
const app=express();
app.use(express.json()); // Middleware to parse JSON request bodies
//GET
app.get("/users",(req,res)=>{
    res.send("Get all users");
})
//POST
app.post("/users",(req,res)=>{
  console.log("Data received from client:", req.body);
  res.send("Data received successfully");
});
//PUT
app.put("/users",(req,res)=>{
    res.send("Update a user");
})
//Delete
app.delete("/users",(req,res)=>{
    res.send("Delete a user");
});
//Start Server
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");      
});