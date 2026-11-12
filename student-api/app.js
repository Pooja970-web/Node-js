const express=require("express");
const mongoose=require("mongoose");
const Student = require("./models/Student");
require("dotenv").config();

const app=express();
app.use(express.json());
//MongoDB connections
console.log("Mongo URL loaded:", Boolean(process.env.MONGO_URL));

app.get("/",(req,res)=>{
    res.send("Student api is working fine");    
})
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
})

.catch((err)=>{
    console.log("MongoDB connection error:",err);
});