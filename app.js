const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Successfully deployed the app through github actions");
});

app.listen(3000, () => {
    console.log("Server running");
});