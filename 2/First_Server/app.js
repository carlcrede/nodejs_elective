const express = require("express");
const app = express();

app.use(express.json());

// consider what datatype to store your data in
// you are allowed to hardcode the id

let songs = [
    {id: 1, title: 'A song'}, 
    {id: 2, title: 'Two Princes'}, 
    {id: 3, title: 'Jutlandia'}, 
    {id: 4, title: 'Fade to Black'}
];

// implementation for POST /songs
app.post("/songs", (req, res) => {
    songs = [...songs, ...req.body];
    res.status(200).json({ songs: req.body });
})

// implementation for POST /songs/id
app.post('/songs/:id', (req, res) => {
    const id = req.params.id;
    if (songs.find(song => song.id == id) == undefined) {
        songs.push(req.body);
        res.status(200).json(req.body);
    } else {
        res.status(500).send({ error: `A song with ID=${id} already exists` });
    }
});


// implementation for DELETE /songs
app.delete('/songs', (req, res) => {
    songs = [];
    res.status(200).send({message: "All entries deleted"});
});

// implementation for DELETE /songs/id
app.delete('/songs/:id', (req, res) => {
    const id = req.params.id;
    const index = songs.findIndex(song => song.id == id);
    if (index != -1) {
        const song = songs.find(song => song.id == id);
        songs = songs.filter(song => song.id != id);
        res.status(200).send({ song: song });
    } else {
        res.status(500).send({ error: `Can't delete: A song with ID=${id} doesn't exists` });
    }
});

// implementation for PUT /songs
app.put('/songs', (req, res) => {
    const body = req.body;
    body.forEach(e => {
        const index = songs.findIndex(song => song.id == e.id);
        songs[index] = e;
    });
    res.status(200).send({ songs: body });
});


// implementation for PUT /songs/id
app.put('/songs/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const index = songs.findIndex(song => song.id == id);
    if (index != -1) {
        songs[index] = body;
        res.status(200).send({ song: body });
    } else {
        res.status(500).send({ error: `A song with ID=${id} doesn't exists` });
    }
});

// implementation for GET /songs
app.get("/songs", (req, res) => {
    res.status(200).json({ songs: songs });
});

// implementation for GET /songs/id
app.get('/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = songs.find(song => song.id == id);
    if (song != undefined) {
        res.status(200).json({ song: song });
    } else {
        res.status(500).send({ error: `A song with ID=${id} doesn't exists` });
    }
});

app.listen(8080);