const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Have a drink on the house!" });
});
let money = false;
app.get("/pub", (req, res) => {
    if (Number(req.query.money) > 500 ) {
        return res.redirect("/whiskey");
    }
    res.send({ doorman: "Sorry, you don't have any money" });
   
});

app.get("/candle", (req, res) => {
    if (req.query.blow) {
        res.send({ lightsOn: false });
    } else {
        res.send({ lightsOn: true });
    }
    
});

app.get("/catfacts", (req, res) => {
    res.sendFile(__dirname + "/public/catfacts/catfacts.html");
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});