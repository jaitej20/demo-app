const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Git-Hub Actions Demo App-Testing");
});

app.listen(3000, () => {
    console.log("Server running");
});