const express=require("express");
const app=express();
//Home route
app.get("/",(req,res)=>{
res.send("Welcome to the Home Page");
});
//About route
app.get("/about",(req,res)=>{
    res.send("Welcome to the About Page");
});
//Contact Route
app.get("/contact",(req,res)=>{
    res.send("Welcome to the Contact Page");
});
//Start Server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});