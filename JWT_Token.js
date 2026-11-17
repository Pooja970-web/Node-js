const express=require('express');
const app=express();
//importing the dotenv package to load environment variables from a .env file
require('dotenv').config();
//Import JWT package
const jwt=require("jsonwebtoken");
//user information
const user={
    //user ki ingotrmation store kr rhe h jiss jwt token me rjha jaega 
    //JWT में इस information को Payload कहा जाता है।
    id:101,
    name:"Pooja"
};
//Generate a JWT token
//यह  पूरे program की सबसे important line है।
//sign() = JWT Token generate और digitally sign करना।
const token=jwt.sign(user,
    process.env.JWT_SECRET,{
        expiresIn:"1h"
    }
)
//Display the generated token
console.log("Generated JWT Token:",token);
//Verify the JWT token
try{
    //jwt.verifyइसका काम token की signature और validity check करना है।
    const decoded=jwt.verify(token,
        process.env.JWT_SECRET
    );

console.log("Token Verified Successfully!",decoded);}
catch(err){
    console.log("Token Verification Failed!",err.message);
}
