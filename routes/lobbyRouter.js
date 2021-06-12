var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");

// Create a Lobby
router.post("/", function (req, res, next) {
  const hostName = req.body.name;
  const code = LobbyService.createLobby(hostName);
  res.json({ code: code });
});

// Get a lobby
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id === undefined) {
    console.log("id was undefined");
    res.status(404);
  }
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    console.log("lobby was null ", id);
    res.status(404).json({});
  } else {
    res.status(200).json(lobby);
  }
});

module.exports = router;
