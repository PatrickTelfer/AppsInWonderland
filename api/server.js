var http = require("http");
var app = require("./app");
var LobbyService = require("./services/lobbyService");
var ServerService = require("./services/serverService");

var server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  let playerName = "";
  let playerRoom = "";

  socket.on("join", (data) => {
    const { code, name } = data;
    console.log("JOIN: ", code, name);
    playerName = name;
    playerRoom = code;
    socket.join(code);
    const lobby = LobbyService.addPlayerToRoom(code, name);
    if (lobby) {
      io.to(code).emit("playerJoined", lobby.players);
    }
  });

  socket.on("disconnect", () => {
    console.log("DISCONNECT ", playerName, playerRoom);
    const lobby = LobbyService.removePlayerFromRoom(playerRoom, playerName);
    if (lobby !== null) {
      io.to(playerRoom).emit("playerJoined", lobby.players);
    }
  });
});

module.exports = server;
