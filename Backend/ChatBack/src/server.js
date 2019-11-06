const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const Message = require('./models/Message')

// Usuarios conectados
const connectedUsers = {};

io.on('connection', async socket => {
  try {

    // console.log(socket.id)

    const { patient_id } = socket.handshake.query;

    connectedUsers[patient_id] = socket.id;

    socket.on('update', async data => {


      const oldMessages = await Message.find(
        {
          $and: [

            {
              $or: [
                { "send_id": patient_id },
                { "send_id": data}
              ]
            },
            
            {
              $or: [
                { "receive_id": patient_id },
                { "receive_id": data}
              ]
            }
            
          ]

        }
      );

      console.log(oldMessages)


      socket.emit('previousMessages', oldMessages)
    })

    socket.on('sendMessage', data => {

      const message = Message.create(data);

      socket.broadcast.emit('receivedMessage', data);
    })

  } catch (err) {

  }

})

server.listen(process.env.PORT || 3333);