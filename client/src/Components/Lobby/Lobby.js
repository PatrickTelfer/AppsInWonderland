import React, { useContext, useEffect, useState, useRef } from "react";
import PlayerList from "./PlayerList";
import Canvas from "../Canvas/Canvas";
import { useHistory, withRouter } from "react-router";
import { SocketContext } from "../../Context/socket";
import {
  Center,
  Flex,
  Text,
  FormControl,
  Button,
  Code,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Heading,
} from "@chakra-ui/react";

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

    if (socket && isMounted) {
      socket.on("playerJoined", (players) => {
        if (isMounted) {
          setPlayers(players);
        }
      });
    }

    if (socket && isMounted && !joined) {
      socket.emit("join", { serverCode, name });
      setJoined(true);
    }

    if (socket && isMounted) {
      socket.on("hostStartedGame", () => {
        isMounted = false;
        history.replace({
          pathname: "/Prompt/" + serverCode,
          state: { ...state, name },
        });
      });
    }

    return () => {
      isMounted = false;
      socket.removeAllListeners("playerJoined");
      socket.removeAllListeners("hostStartedGame");
    };
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
    <Flex flexWrap="wrap">
      <Flex
        flexGrow="1"
        p="4"
        m="2"
        minH="xl"
        shadow="md"
        flexDirection="column"
        minW="sm"
        alignItems="center"
      >
        <Heading textAlign="center">WELCOME TO THE LOBBY</Heading>
        <Text fontSize="lg">
          🔥 Join with code <Code colorScheme="red">{serverCode}</Code> 🔥
        </Text>
        <PlayerList players={players} />
        <Text mt={4} fontSize="md">
          Player Count: {players && players.length}
        </Text>
        {isHost && (
          <Flex flexDirection="column" alignItems="center" marginTop="auto">
            <FormControl>
              <Text>Set Round Duration</Text>
              <Slider
                defaultValue={lobbyDuration}
                min={5}
                max={120}
                step={5}
                onChange={(val) => {
                  setLobbyDuration(val);
                }}
                focusThumbOnChange={false}
              >
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="purple.600" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <Center>
                <Text>{lobbyDuration} seconds</Text>
              </Center>
            </FormControl>
          </Flex>
        )}
        {isHost && (
          <Button
            variant="outline"
            colorScheme="purple"
            mt={12}
            w="2xs"
            onClick={startGame}
          >
            Start
          </Button>
        )}
      </Flex>
      <Flex
        flexGrow="1"
        p="4"
        m="2"
        minH="lg"
        shadow="md"
        flexDirection="column"
        minW="sm"
      >
        <Center>
          <Text fontSize="lg">Test the drawing pad!</Text>
        </Center>
        <Canvas ref={canvasRef}></Canvas>
      </Flex>
    </Flex>
  );
};

export default withRouter(Lobby);
