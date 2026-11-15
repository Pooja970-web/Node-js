const express = require("express");

const app = express();

// Custom Middleware
app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
});
// Route
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/students", (req, res) => {
    res.send("Students Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});