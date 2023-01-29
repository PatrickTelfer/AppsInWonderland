import socketio from "socket.io-client";
import React from "react";

export const socket = socketio.connect(
  "https://appsinwonderland.onrender.com"
);
export const SocketContext = React.createContext();
