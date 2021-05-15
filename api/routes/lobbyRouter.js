var express = require("express");
var router = express.Router();
var LobbyService = require("../services/lobbyService");
var ServerService = require("../services/serverService");

router.post("/", function (req, res, next) {
  LobbyService.createLobby();
  const server = ServerService.getServer();
  console.log(server);
  res.send("200");
});

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
