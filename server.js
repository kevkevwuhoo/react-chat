// const express = require('express');
// const app = express();
const server = require('http').createServer(); // const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 4000;
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    console.log(`A user has disconnected: ${socket.id}`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
