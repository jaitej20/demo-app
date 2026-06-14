const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Testing Git-Hub Actions-New Code Deployment Successful");
});

app.listen(3000, () => {
    console.log("Server running");
});