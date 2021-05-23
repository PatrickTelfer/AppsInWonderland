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
  console.log("socket connected");
  socket.on("join", (data) => {
    const code = data.serverCode;
    const name = data.name;
    console.log("JOIN: ", code, name);
    playerName = name;
    playerRoom = code;
    socket.join(code);
    const lobby = LobbyService.addPlayerToRoom(code, name);
    if (lobby) {
      io.to(code).emit("playerJoined", lobby.players);
    }
  });

  socket.on("start", () => {
    console.log("STARTING GAME", playerRoom);
    io.to(playerRoom).emit("hostStartedGame");
    let second = 15;
    const intervalObj = setInterval(() => {
      io.to(playerRoom).emit("timerUpdate", second);
      second--;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalObj);
      io.to(playerRoom).emit("timerDone");
      LobbyService.setTotalRounds(playerRoom);
    }, second * 1000 + 2000);
  });

  socket.on("submitPrompt", (prompt) => {
    LobbyService.addPlayerPrompt(playerRoom, prompt);
  });

  socket.on("requestingPrompt", () => {
    const prompt = LobbyService.getRandomPrompt(playerRoom);
    io.to(playerRoom).emit("sendingPrompt", prompt);
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
