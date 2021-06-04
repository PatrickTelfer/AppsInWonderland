import React, { useContext, useEffect, useState } from "react";
import { FullWidthContainer, Container } from "../Common/Container";
import styled from "styled-components";
import PlayerList from "./PlayerList";
import { Button } from "../Common/Button";
import Canvas from "../Canvas/Canvas";
import { useHistory, withRouter } from "react-router";
import { Title, SubTitle } from "../Common/Text";
import { SocketContext } from "../../Context/socket";

const Lobby = (props) => {
  const [joined, setJoined] = useState(false);
  const serverData = props.location.state;
  // const socket = props.socket;
  const serverCode = serverData.code;
  const name = serverData.name;
  const isHost = serverData.isHost;
  const socket = useContext(SocketContext);
  const [players, setPlayers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/lobby/" + serverCode);
      const json = await res.json();
      setPlayers(json.players);
    };
    getData();
  }, [serverCode]);

  useEffect(() => {
    if (socket && !joined) {
      console.log(serverCode);
      socket.emit("join", { serverCode, name });
      setJoined(true);
      socket.on("playerJoined", (players) => {
        setPlayers(players);
      });

      socket.on("hostStartedGame", () => {
        console.log("HERE");
        history.replace({
          pathname: "/Prompt/" + serverData.code,
          state: { ...serverData, name },
        });
      });
    }
  }, [socket, joined, name, serverCode, history, serverData]);

  const startGame = () => {
    if (socket) {
      socket.emit("start");
    }
  };

  return (
    <FullWidthContainer>
      <LobbyContainer>
        <Title>WELCOME TO THE LOBBY</Title>
        <Code>
          🔥 Join with Code
          <span style={{ color: "red" }}> {serverCode} </span>🔥
        </Code>
        <PlayerList players={players} />
        <SubTitle>Player Count: {players && players.length}</SubTitle>

        <Button
          style={{ marginTop: "auto" }}
          disabled={!isHost}
          onClick={startGame}
        >
          Start
        </Button>
      </LobbyContainer>
      <DrawingContainer>
        <Canvas />
      </DrawingContainer>
    </FullWidthContainer>
  );
};

const Code = styled(SubTitle)`
  outline: red;
  font-size: 1.25em;
`;

const LobbyContainer = styled(Container)`
  max-width: 500px;
`;

const DrawingContainer = styled(Container)`
  margin: 20px;
  max-width: 500px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

export default withRouter(Lobby);
