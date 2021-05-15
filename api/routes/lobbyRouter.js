var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");
var ServerService = require("../services/serverService");

// Create a Lobby
router.post("/", function (req, res, next) {
  const hostName = req.body.name;
  const code = LobbyService.createLobby(hostName);
  const server = ServerService.getServer();
  res.json({ serverCode: code });
});

// Get a lobby
router.get("/:id", function (req, res, next) {
  console.log("*******");
  const id = req.params.id;
  const lobby = LobbyService.getLobbyById(id);
  console.log("heree: ", lobby);
  res.json(lobby);
});

module.exports = router;
