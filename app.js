const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("New Code Deployment Successful - Hello World!");
});

app.listen(3000, () => {
    console.log("Server running");
});