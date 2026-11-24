
const bcrypt = require("bcrypt");
const User = require("../models/User");

const {
    generateAccessToken,
    generateRefreshToken
} = require("../utils/generateToken");

// ---------------------------------------------
// REGISTER (Your existing code)
// ---------------------------------------------

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};

// ---------------------------------------------
// LOGIN (Updated with two JWT tokens)
// ---------------------------------------------

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Step 1: Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Step 2: Verify password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Step 3: Generate Access Token
        const accessToken = generateAccessToken(user);

        // Step 4: Generate Refresh Token
        const refreshToken = generateRefreshToken(user);

        // Step 5: Store Refresh Token in HttpOnly Cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/api/auth/refresh"
        });

        // Step 6: Send response
        res.status(200).json({
            message: "Login successful",
            accessToken
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = {
    register,
    login
};
