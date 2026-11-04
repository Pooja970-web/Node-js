const express = require("express");
const app = express();
// Custom Middleware
const myMiddleware = (req, res, next) => {
    console.log("Middleware is running!");
    next();
};
// Register Middleware
app.use(myMiddleware);

// Route
app.get("/users", (req, res) => {
    res.send("Get all users");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});