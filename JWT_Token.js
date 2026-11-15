const express=require('express');
const app=express();
//importing the dotenv package to load environment variables from a .env file
require('dotenv').config();
//Import JWT package
const jwt=require("jsonwebtoken");
//user information
const user={
    id:101,
    name:"Pooja"
};
//Generate a JWT token
const token=jwt.sign(user,
    process.env.JWT_SECRET,{
        expiresIn:"1h"
    }
)
//Display the generated token
console.log("Generated JWT Token:",token);
//Verify the JWT token
try{
    const decoded=jwt.verify(token,
        process.env.JWT_SECRET
    );

console.log("Token Verified Successfully!",decoded);}
catch(err){
    console.log("Token Verification Failed!",err.message);
}
