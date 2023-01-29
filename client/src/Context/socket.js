import socketio from "socket.io-client";
import React from "react";

// export const socket = socketio.connect(
//   "https://appsinwonderland.herokuapp.com/"
// );

export const socket = socketio.connect(
  "http://localhost:3001/"
);
export const SocketContext = React.createContext();
