const express = require('express');
const app = express();

const server = require('http').createServer(app);
//const io = require('socket.io')(server);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 8080;

let num = 0;

io.on('connection', (socket) => {
    console.log('A socket connected with id', socket.id);

    io.send({ msg: `Socket with ID=${socket.id} joined!`});

    socket.on('messageSent', (data) => {
        socket.broadcast.emit('newMessage', data);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const express_server = server.listen(port, (error) => {
    if (error) { throw error; }
    console.log('Server running on port', express_server.address().port);
});