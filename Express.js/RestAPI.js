const express = require('express');
const app = express();
//middleware to parse JSON bodies
app.use(express.json());
app.get("/user",(req,res)=>{
    res.json({message: "User data"});
});
app.post("/user",(req,res)=>{
    const userData = req.body;
    res.status(201).json({message: "User created", data: userData});
}
);
app.put("/user/:id",(req,res)=>{
    const userId = req.params.id;
    const updatedData = req.body;
    res.json({message: `User ${userId} updated`, data: updatedData});
});
app.delete("/user/:id",(req,res)=>{ 
    const userId = req.params.id;
    res.json({message: `User ${userId} deleted`});
});
app.listen(4000,() => {
    console.log(`Server is running on port 4000`);
}   );