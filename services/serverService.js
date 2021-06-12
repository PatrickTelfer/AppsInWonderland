const server = {
  lobbys: [],
  lobbyCount: 0,
};

const ServerService = {};

ServerService.getServer = () => {
  return server;
};

module.exports = ServerService;
