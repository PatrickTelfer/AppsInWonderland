import React, { useContext, useEffect, useState, useRef } from "react";
import { FullWidthContainer, Container } from "../Common/Container";
import styled from "styled-components";
import PlayerList from "./PlayerList";
import { Button } from "../Common/Button";
import Canvas from "../Canvas/Canvas";
import { useHistory, withRouter } from "react-router";
import { Title, SubTitle } from "../Common/Text";
import { SocketContext } from "../../Context/socket";

const Lobby = (props) => {
  const [players, setPlayers] = useState([]);
  const [joined, setJoined] = useState(false);
  const [lobbyDuration, setLobbyDuration] = useState(60);

  const state = props.location.state;
  const serverCode = state.code;
  const name = state.name;
  const isHost = state.isHost;
  const socket = useContext(SocketContext);
  const history = useHistory();
  const canvasRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/lobby/" + serverCode);
      const json = await res.json();
      setPlayers(json.players);
    };
    getData();
  }, [serverCode]);

  useEffect(() => {
    let isMounted = true;
    if (socket && !joined) {
      if (isMounted) {
        socket.emit("join", { serverCode, name });
        setJoined(true);
      }
      socket.on("playerJoined", (players) => {
        if (isMounted) {
          setPlayers(players);
        }
      });

      socket.on("hostStartedGame", () => {
        isMounted = false;
        history.replace({
          pathname: "/Prompt/" + serverCode,
          state: { ...state, name },
        });
      });
    }
  }, [socket, joined, name, serverCode, history, state]);

  const startGame = () => {
    if (socket) {
      const startData = {
        lobbyDuration,
      };
      socket.emit("start", startData);
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

        {isHost && (
          <div
            style={{
              display: "flex",
              marginTop: "auto",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="timer">Set Round Duration</label>
            <input
              type="range"
              id="timer"
              min="5"
              max="120"
              step="5"
              value={lobbyDuration}
              onChange={(e) => {
                setLobbyDuration(e.target.value);
              }}
            />
            <div>{lobbyDuration} seconds</div>
          </div>
        )}

        <Button
          style={{ marginTop: "auto" }}
          disabled={!isHost}
          onClick={startGame}
        >
          Start
        </Button>
      </LobbyContainer>
      <DrawingContainer>
        <Canvas ref={canvasRef} />
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
  min-width: 300px;
  margin: 0.5em;
`;

const DrawingContainer = styled(Container)`
  margin: 0.5em;
  max-width: 500px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

export default withRouter(Lobby);
