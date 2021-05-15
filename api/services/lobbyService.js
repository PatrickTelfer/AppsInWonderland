var ServerService = require("./serverService");

const LobbyService = {};

LobbyService.createLobby = (hostName) => {
  const randomCode = Math.random().toString(36).substr(2, 4);
  const lobby = {
    code: randomCode,
    players: [hostName],
  };
  const server = ServerService.getServer();
  server.lobbys.push(lobby);
  server.lobbyCount++;
  return randomCode;
};

LobbyService.getLobbyById = (id) => {
  const server = ServerService.getServer();

  const lobbys = server.lobbys;
  let lobby = null;
  for (let i = 0; i < lobbys.length; i++) {
    console.log(lobbys[i]);
    if (lobbys[i].code === id) {
      lobby = lobbys[i];
    }
  }
  return lobby;
};

module.exports = LobbyService;
