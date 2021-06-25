var http = require("http");
var app = require("./app");
var LobbyService = require("./services/lobbyService");

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

  // TIMER EVENTS
  socket.on("start", (startData) => {
    const { lobbyDuration } = startData;
    LobbyService.setLobbyDuration(playerRoom, lobbyDuration);

    console.log("STARTING GAME", playerRoom);
    io.to(playerRoom).emit("hostStartedGame");
    let second = lobbyDuration;
    const intervalObj = setInterval(() => {
      io.to(playerRoom).emit("timerUpdateStart", {
        maxSecond: lobbyDuration,
        second,
      });
      second--;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalObj);
      io.to(playerRoom).emit("timerDoneStart");
      LobbyService.setTotalRounds(playerRoom);
    }, second * 1000 + 2000);
  });

  socket.on("startTimer", () => {
    const maxSecond = LobbyService.getLobbyDuration(playerRoom);
    let second = maxSecond;
    const intervalObj = setInterval(() => {
      io.to(playerRoom).emit("timerUpdate", {
        maxSecond,
        second,
      });
      second--;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalObj);
      io.to(playerRoom).emit("timerDone");
    }, second * 1000 + 2000);
  });

  // PROMPT EVENTS
  socket.on("submitPrompt", (prompt) => {
    LobbyService.addPlayerPrompt(playerRoom, prompt);
  });

  socket.on("requestingPrompt", () => {
    const prompt = LobbyService.getRandomPrompt(playerRoom);
    if (prompt === null) {
      io.to(playerRoom).emit("gameOver");
    } else {
      io.to(playerRoom).emit("sendingPrompt", prompt);
    }
  });

  // IMAGE EVENTS
  socket.on("submittingImage", (imageData) => {
    LobbyService.addImageToServer(playerRoom, imageData);
  });

  socket.on("requestingImages", () => {
    const images = LobbyService.getImages(playerRoom);
    io.to(socket.id).emit("sendingImages", images);
  });

  // VOTING EVENTS
  socket.on("voteForPlayer", (votingData) => {
    const isLastVote = LobbyService.voteForPlayer(playerRoom, votingData);
    if (isLastVote) {
      const isGameOver = LobbyService.isGameOver(playerRoom);
      if (isGameOver) {
        io.to(playerRoom).emit("lastVoteEnd");
      } else {
        io.to(playerRoom).emit("lastVoteDraw");
      }
    }
  });

  socket.on("requestingVotes", () => {
    const votes = LobbyService.getVotes(playerRoom);

    io.to(playerRoom).emit("sendingVotes", votes);
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("DISCONNECT ", playerName, playerRoom);
    const lobby = LobbyService.removePlayerFromRoom(playerRoom, playerName);
    if (lobby !== null) {
      io.to(playerRoom).emit("playerJoined", lobby.players);
    }
  });
});

module.exports = server;
