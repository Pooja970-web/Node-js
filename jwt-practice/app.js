require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// JSON data पढ़ने के लिए
app.use(express.json());


const users = [];


// ---------------------------------------------
// 1. REGISTER API
// ---------------------------------------------
app.post("/register", async (req, res) => {

    try {
        const { email, password } = req.body;

        // दोनों भेजे हैं या नहीं?
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // यह email पहले से है क्या?
        const existingUser = users.find((u) => u.email === email);

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Password का hash बनाओ
        const hashedPassword = await bcrypt.hash(password, 10);

        // User को सेव करो
        users.push({
            id: users.length + 1,
            email: email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});


// ---------------------------------------------
// 2. LOGIN API
// ---------------------------------------------
app.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        // इस email वाला user ढूँढो
        const user = users.find((u) => u.email === email);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Password जाँचो
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Token बनाओ
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});


// ---------------------------------------------
// 3. AUTH MIDDLEWARE (गार्ड)
// ---------------------------------------------
const authMiddleware = (req, res, next) => {

    try {
        // Header से token निकालो
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }

        // "Bearer abc123" से सिर्फ़ "abc123" लो
        const token = authHeader.split(" ")[1];

        // Token जाँचो
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // User की जानकारी request में रखो
        req.user = decoded;

        // अगले step पर जाओ
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};


// ---------------------------------------------
// 4. PROTECTED PROFILE API
// ---------------------------------------------
app.get("/profile", authMiddleware, (req, res) => {

    res.status(200).json({
        message: "Welcome to your profile",
        user: req.user
    });
});


// ---------------------------------------------
// Server शुरू करो
// ---------------------------------------------
app.listen(3000, () => {
    console.log("Server running on port 3000");
});