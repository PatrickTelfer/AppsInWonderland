import { useEffect, useState } from "react";

const useSocket = (socket) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    if (socket) {
      socket.on("playerJoined", (players) => {
        setPlayers(players);
      });
    }
  }, []);
  const joinRoom = (code, name) => {
    socket.emit("join", { code, name });
  };

  return { joinRoom, players };
};

export default useSocket;
