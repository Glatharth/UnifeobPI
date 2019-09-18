const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const Message = require('./models/Message')

io.on('connection', async socket => {
  try{

    console.log('Socket conectado: ' + socket.id )

    const oldMessages = await Message.find()

    socket.emit('previousMessages', oldMessages)

    socket.on('sendMessage', data => {

      const message = Message.create(data);
      
      socket.broadcast.emit('receivedMessage', data);
    })

  } catch(err){

  }

})

server.listen(3000);