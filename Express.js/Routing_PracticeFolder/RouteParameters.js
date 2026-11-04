const express=require("express");
const app=express();
//Get a particular user by id
app.get("/user",(req,res)=>{
     const userName = req.query.name;
    const userAge = req.query.age;
  res.send(`Name: ${userName}, Age: ${userAge}`);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});