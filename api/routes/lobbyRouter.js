var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");
var ServerService = require("../services/serverService");

router.post("/", function (req, res, next) {
  const code = LobbyService.createLobby();
  const server = ServerService.getServer();
  console.log(server);
  res.json({ serverCode: code });
});

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
