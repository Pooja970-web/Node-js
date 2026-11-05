const express = require("express");
const app = express();

app.get("/products", (req, res) => {
    console.log(req.query);
    res.send("Products fetched successfully");
});

app.listen(3000, () => {
    console.log("Server is running");
});