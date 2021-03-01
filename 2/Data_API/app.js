const express = require("express");
const app = express();

// use the bodyParser that comes with express (to be able to parse http body)
app.use(express.json());

// Send data with GET - Query string
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send({ searchQuery: req.query });
});

// path variables
app.get("/telegram/:message/:name", (req, res) => {
    const message = req.params.name + ", " + req.params.message;
    res.send({ message: message });
});

// POST
app.post("/goodstuff", (req, res) => {
    res.send({body: req.body});
    console.log(req.body);
});

app.listen(8080);