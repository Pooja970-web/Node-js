
const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB connection
console.log("Mongo URL loaded:", Boolean(process.env.MONGO_URL));


// POST route
app.post("/students", async (req, res) => {
    try {
              console.log("POST request received");
        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            course: req.body.course
        });

        res.status(201).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// GET route
console.log("GET route registered");
app.get("/students", async (req, res) => {
    console.log("GET route hit");

    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        console.log("GET error:", error.message);

        res.status(500).json({
            message: error.message
        });
    }
});
//PUT api
app.put("/students/:id", async(req,res)=>{
try{
    const studdent=await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
        
    );
    if(!studdent){
        return res.status(404).json({message:"Student not found"});
    }
    res.status(200).json(studdent);

}
catch(err){
    res.status(500).json({message:err.message});
}
})
//Delete api
// DELETE route
app.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
 