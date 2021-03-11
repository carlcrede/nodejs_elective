const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});