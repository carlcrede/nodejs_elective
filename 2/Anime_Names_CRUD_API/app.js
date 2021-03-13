const express = require("express");
const app = express();

app.use(express.json());

let autoIncrement = 2;

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
    res.send({ data: animeNames } );
});

// GET /anime_names/id
app.get("/anime_names/:id", (req, res) => {
    const id = Number(req.params.id);
    const animeName = animeNames.find(animeName => animeName.id === id);
    res.send({ data: animeName });
});

app.post("/anime_names", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++autoIncrement;
    animeNames.push(newAnimeName);
    res.send({ data: newAnimeName });
});


app.patch("/anime_names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)) {
            return {...animeName, ...req.body, id: animeName.id};
        }
        return animeName;
    });
    res.send({  });
});

app.delete("/anime_names/:id", (req, res) => {
    const id = Number(req.params.id);
    animeNames = animeNames.filter(animeName => animeName.id !== id);
    res.sendStatus(204);
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});