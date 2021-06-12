var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");

// Get a lobby
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id === undefined) {
    console.log("id was undefined");
    res.status(404).json({
      error: "id was undefined",
    });
  }
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    res.status(404).json({
      error: "lobby was null",
    });
  } else {
    res.status(200).json(lobby);
  }
});

// Create a Lobby
router.post("/", function (req, res, next) {
  const hostName = req.body.name;
  const code = LobbyService.createLobby(hostName);
  res.json({ code: code });
});

module.exports = router;
