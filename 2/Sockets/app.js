const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;

io.on('connection', (socket) => {
    console.log('A socket connected with id', socket.id);
    socket.on('colorChanged', (data) => {
        // changes color for all sockets in the io namespace
        io.emit('changeBackgroundToThisColor', data);

        // only for this socket
        //socket.emit('changeBackgroundToThisColor', data);

        // changes the color for ALl sockets except it self.
        socket.broadcast.emit('changeBackgroundToThisColor', data);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/colors.html');
});

const expressServer = server.listen(PORT, (error) => {
    if (error) {
        throw new Error(error);
    }
    console.log('Server running on port', expressServer.address().port);    
});