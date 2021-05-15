import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000");
  }, []);

  return {};
};

export default useSocket;
