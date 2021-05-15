const useSocket = (socket) => {
  console.log(socket);
  console.log(socket);
  const joinRoom = (code) => {
    socket.emit("join", code);
  };

  return { joinRoom };
};

export default useSocket;
