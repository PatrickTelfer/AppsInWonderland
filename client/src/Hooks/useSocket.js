import { useEffect, useState } from "react";

const useSocket = (socket) => {
  const [players, setPlayers] = useState([]);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    console.log(socket);
    if (socket && !connected) {
      setConnected(true);
      socket.on("playerJoined", (players) => {
        console.log("SETTING PLAYERS");
        setPlayers(players);
      });
    }
  }, [socket, connected]);
  const joinRoom = (code, name) => {
    socket.emit("join", { code, name });
  };

  return { joinRoom, players };
};

export default useSocket;
