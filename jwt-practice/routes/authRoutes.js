const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const User = require("../models/User");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to your profile",
        user: req.user
    });
});
router.get("/admin", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    const users = await User.find().select("-password");

    res.status(200).json({
        message: "Welcome Admin",
        users: users
    });
});
module.exports = router;