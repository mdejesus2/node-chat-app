const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User connected'); 

   
    // socket.emit('newMessage', {
    //     from: 'Michael',
    //     text: 'recuerda enviarme los datos',
    //     createdAt: 123333
    // });
    socket.on('createMessage', (message)=>{
        console.log('Create Message:', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text
          });
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected'); 
    });
});




let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`app is running on port ${port}`);
});




module.exports = {app}