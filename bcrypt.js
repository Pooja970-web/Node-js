// Register + Login with bcrypt password hashing and JWT protection
// Install: npm install express bcrypt jsonwebtoken dotenv
// .env file: JWT_SECRET=anyLongRandomText

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

// Demo "database" (real project mein MongoDB/MySQL use hoga)
const users = [];

// ---------- REGISTER ----------
app.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        // 2. Check if user already exists
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // 3. Hash the password (10 = salt rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Save user with HASHED password, never the plain one
        const newUser = {
            id: users.length + 1,
            email,
            password: hashedPassword,
        };
        users.push(newUser);

        res.status(201).json({
            message: "Registered successfully",
            user: { id: newUser.id, email: newUser.email }, // password wapas nahi bhejna
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ---------- LOGIN ----------
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = users.find((u) => u.email === email);

        // 2. Compare typed password with stored hash
        //    Same message for both cases, so attacker ko pata na chale ki email sahi tha ya nahi
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // 3. Create JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ---------- AUTH MIDDLEWARE ----------
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token not provided" });
        }

        const token = authHeader.split(" ")[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

// ---------- PROTECTED ROUTE ----------
app.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to your profile",
        user: req.user,
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});