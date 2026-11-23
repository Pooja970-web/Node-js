require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./models/User");
const authMiddleware = require("./middleware/authMiddleware");
const { register, login } = require("./controllers/authController");
const app = express();
const authRoutes = require("./routes/authRoutes");
// JSON data पढ़ने के लिए
app.use(express.json());
// MongoDB से connect करना
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected ✅"))
    .catch((error) => console.log("MongoDB error ❌", error.message));

   

app.use("/", authRoutes);

// ---------------------------------------------
// Server शुरू करो
// ---------------------------------------------
app.listen(3000, () => {
    console.log("Server running on port 3000");
});