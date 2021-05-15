var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");
var ServerService = require("../services/serverService");

// Create a Lobby
router.post("/", function (req, res, next) {
  const hostName = req.body.name;
  const code = LobbyService.createLobby(hostName);
  const server = ServerService.getServer();
  res.json({ code: code });
});

// Get a lobby
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id === undefined) {
    res.status(404);
  }
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    res.status(404).json({});
  } else {
    res.status(200).json(lobby);
  }
});

module.exports = router;
