const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});