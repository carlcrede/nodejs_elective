const express = require("express");
const app = express();

// consider what datatype to store your data in
// you are allowed to hardcode the id

app.get("/", (req, res) => {
    res.send({ message: "First call to /"});
});

app.get("/anotherpath/id", (req, res) => {
    res.send({ data: "some other things"});
});

const songs = [
    {id: 1, title: 'A song'}, 
    {id: 2, title: 'Two Princes'}, 
    {id: 3, title: 'Jutlandia'}, 
    {id: 4, title: 'Fade to Black'}
];

// implementation for GET /songs
app.get("/songs", (req, res) => {
    res.status(200).json({ songs: songs });
});

// implementation for GET /songs/id
app.get('/songs/id/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const song = songs.find(song => song.id == id);
    if (song != undefined) {
        res.status(200).json({ song: song });
    } else {
        res.sendStatus(404);
    }
});

app.listen(8080);