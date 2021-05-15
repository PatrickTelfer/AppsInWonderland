var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");
var ServerService = require("../services/serverService");

// Create a Lobby
router.post("/", function (req, res, next) {
  const hostName = req.body.name;
  const code = LobbyService.createLobby(hostName);
  const server = ServerService.getServer();
  console.log(server.lobbys[0].players);
  res.json({ serverCode: code });
});

router.get("/:id", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
