const exopress=require('express');
const app=exopress();
const authMiddleware=(req,res,next)=>{
    const isLoggein=true;
    if(isLoggein){
        next();
    }   else{
        res.status(401).json({message:"Unauthorized"});
    }
};
// Public route
app.get('/', (req, res) => {
    res.send({ message: 'This is a public route' });
});
//Procted Route
app.get("/profile",authMiddleware,(req,res)=>{
    res.send("Welcome to your profile");

});
//Another protected route
app.get("/dashboard",authMiddleware,(req,res)=>{
    res.send("Welcome to your dashboard");
});
//server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
