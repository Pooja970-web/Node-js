 //JWT Authentication Middleware & Protected Routes
 /*  
 User login करेगा।  
 User /profile खोलना चाहेगा।
 Server उसका JWT Token check करेगा।
 Token सही है तो Profile खुलेगी।
 Token गलत या missing है तो access नहीं मिलेगा।
  */
 
const express = require("express");
const app = express();

require("dotenv").config();

const jwt = require("jsonwebtoken");

// Middleware to read JSON data
app.use(express.json());

// Demo user
const user = {
    id: 101,
    email: "pooja@gmail.com",
    password: "123456"
};

// Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    // Check email and password
    if (
        email !== user.email ||
        password !== user.password
    ) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    // Generate JWT Token
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.status(200).json({
        message: "Login successful",
        token: token
    });
});

// JWT Authentication Middleware
const authMiddleware = (req, res, next) => {

    try {
        // Get token from request header
        const authHeader = req.headers.authorization;
        //इसका काम है User की Request से Authorization Header प्राप्त करना।
//लेकिन पहले समझिए कि Header क्या होता है।

//जब आप Postman से किसी API को Request भेजती हैं, तो Request के साथ कुछ अतिरिक्त जानकारी भी भेज सकती हैं। इन्हें Headers कहते हैं।
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }

        const token = authHeader.
     split(" ")[1];
//Bearer abc123xyz

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store user information in request
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

// Protected Profile API
app.get("/profile", authMiddleware, (req, res) => {

    res.status(200).json({
        message: "Welcome to your profile",
        user: req.user
    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
