const express = require("express");
const app = express();

app.use(express.json());

let animeNames = [
    {
        id: 1,
        title: "Attack on Titan",
        protagonist: "Jujutsu Kaisen"
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
];

// GET /anime_names
app.get("/anime_names", (req, res) => {
    res.send({ data: animeNames} );
});

// GET /anime_names/id
app.get("/anime_names/:id", (req, res) => {
    const id = Number(req.params.id);
    const animeName = animeNames.find(animeName => animeName.id === id);
    res.send({ data: animeName });
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});