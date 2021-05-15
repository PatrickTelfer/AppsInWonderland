var http = require("http");
var app = require("./app");

var server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("hi");
  socket.on("join", (code) => {
    console.log("joined");
  });
});

module.exports = server;
