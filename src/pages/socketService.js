// socketService.js
import socketClient  from "socket.io-client";

const serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';
const socket = socketClient(serverUrl);

export const emitPsihologID = (psihologID) => {
  socket.emit('Psiholog_ID', psihologID);
};

export const onPsihologID = (callback) => {
  socket.on('Psiholog_ID', (receivedPsihologID) => {
    callback(receivedPsihologID);
  });
};

// Similarly, define functions for other socket events you need
