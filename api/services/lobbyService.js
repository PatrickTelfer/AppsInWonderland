var ServerService = require("./serverService");

const LobbyService = {};

function Player(name) {
  this.name = name;
  this.votes = {
    creative: 0,
    best: 0,
    weird: 0,
  };
}

LobbyService.createLobby = (hostName) => {
  const randomCode = Math.random().toString(36).substr(2, 4);
  const lobby = {
    code: randomCode,
    players: [],
    prompts: [],
    images: [],
    currentPrompt: 0,
    rounds: 0,
    votes: [],
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

  lobby.players.push(new Player(name));
  return lobby;
};

LobbyService.removePlayerFromRoom = (id, name) => {
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    return null;
  }

  const players = lobby.players;

  let index = -1;
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.name === name) {
      index = i;
    }
  }

  console.log(lobby.players);
  if (index > -1) {
    lobby.players.splice(index, 1);
    console.log(
      "REMOVING PLAYER ",
      name,
      " from lobby ",
      id,
      " with index ",
      index
    );
  }
  console.log(lobby.players);

  return lobby;
};

LobbyService.addPlayerPrompt = (id, prompt) => {
  const lobby = LobbyService.getLobbyById(id);
  lobby.prompts.push(prompt);
};

LobbyService.setTotalRounds = (id) => {
  const lobby = LobbyService.getLobbyById(id);
  lobby.rounds = lobby.prompts.length;
};

LobbyService.addImageToServer = (id, imageData) => {
  const lobby = LobbyService.getLobbyById(id);

  if (lobby === null) {
    return null;
  }

  lobby.images.push(imageData);
};

LobbyService.getImages = (id) => {
  const lobby = LobbyService.getLobbyById(id);
  if (lobby === null) {
    return [];
  }

  return lobby.images;
};

LobbyService.getRandomPrompt = (id) => {
  const lobby = LobbyService.getLobbyById(id);

  if (lobby === null) {
    return null;
  }
  if (lobby.prompts === null || lobby.currentPrompt >= lobby.prompts.length) {
    console.log(lobby.prompts.length);
    console.log(lobby.currentPrompt);
    return null;
  }

  if (lobby.prompts) {
    return lobby.prompts[lobby.currentPrompt];
  } else {
    return null;
  }
};

LobbyService.voteForPlayer = (id, votingData) => {
  const { name, category } = votingData;
  const lobby = LobbyService.getLobbyById(id);
  if (lobby == null) {
    return null;
  }

  const players = lobby.players;
  for (let i = 0; i < players.length; i++) {
    const player = players[i];

    if (player.name === name) {
      if (category === "best") {
        player.votes.best += 1;
      } else if (category === "creative") {
        player.votes.creative += 1;
      } else if (category === "weird") {
        player.votes.weird += 1;
      }

      break;
    }
  }
};

module.exports = LobbyService;
