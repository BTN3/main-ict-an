// socketService.js
import socketClient  from "socket.io-client";

const socket = socketClient('https://horizonti-snage12.azurewebsites.net/');

export const emitPsihologID = (psihologID) => {
  socket.emit('Psiholog_ID', psihologID);
};

export const onPsihologID = (callback) => {
  socket.on('Psiholog_ID', (receivedPsihologID) => {
    callback(receivedPsihologID);
  });
};

// Similarly, define functions for other socket events you need
