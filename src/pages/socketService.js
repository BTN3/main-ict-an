// socketService.js
const io = require('socket.io-client');

const socket = io('http://localhost:3000');

export const emitPsihologID = (psihologID) => {
  socket.emit('Psiholog_ID', psihologID);
};

export const onPsihologID = (callback) => {
  socket.on('Psiholog_ID', (receivedPsihologID) => {
    callback(receivedPsihologID);
  });
};

// Similarly, define functions for other socket events you need
