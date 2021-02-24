const express = require("express");
const app = express();

// one-liner
// const app = require("express")();

app.get("/", (req, res) => {
    res.json({});
});

app.get("/me", (req, res) => {
    const me = {
        name: "Carl",
        age: "25",
    }
    res.json(me);
    //res.send();
});

// start the server
app.listen(8080);