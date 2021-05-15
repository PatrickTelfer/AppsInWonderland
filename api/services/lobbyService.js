var ServerService = require("./serverService");

const LobbyService = {};

LobbyService.createLobby = () => {
  const randomCode = Math.random().toString(36).substr(2, 4);
  const lobby = {
    code: randomCode,
    players: [],
  };
  const server = ServerService.getServer();
  server.lobbys.push(lobby);
  server.lobbyCount++;
  return randomCode;
};

module.exports = LobbyService;
