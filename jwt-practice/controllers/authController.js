const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ---------------------------------------------
// REGISTER
// ---------------------------------------------
const register = async (req, res) => {

    try {
        const { email, password } = req.body;

        // दोनों भेजे हैं या नहीं?
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // यह email database में पहले से है क्या?
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Password का hash बनाओ
        const hashedPassword = await bcrypt.hash(password, 10);

        // Database में सेव करो
        await User.create({
            email: email,
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
// LOGIN
// ---------------------------------------------
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        // इस email वाला user ढूँढो
        const user = await User.findOne({ email: email });

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
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = { register, login };