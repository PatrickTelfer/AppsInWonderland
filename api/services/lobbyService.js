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
    if (lobbys[i].code === id) {
      lobby = lobbys[i];
    }
  }
  return lobby;
};

LobbyService.addPlayerToRoom = (id, name) => {
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    return null;
  }

  const players = lobby.players;
  const index = players.indexOf(name);
  console.log("ADDPLAYERTOROOM: ", id, name);
  console.log(players);

  if (index !== -1) {
    return lobby;
  }

  console.log("ADDING PLAYER ", name, " to lobby", id);

  lobby.players.push(name);
  return lobby;
};

LobbyService.removePlayerFromRoom = (id, name) => {
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    return null;
  }

  const index = lobby.players.indexOf(name);
  console.log(
    "REMOVING PLAYER ",
    name,
    " from lobby ",
    id,
    " with index ",
    index
  );
  console.log(lobby.players);
  if (index > -1) {
    lobby.players.splice(index, 1);
  }
  console.log(lobby.players);

  return lobby;
};

module.exports = LobbyService;
