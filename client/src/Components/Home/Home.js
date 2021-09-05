import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Center,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

const handleCreateClick = async (name, setError) => {
  const res = await fetch("/api/lobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  setError(null);
  const json = await res.json();

  return json;
};

const handleJoinClick = async (code, setError) => {
  const res = await fetch("/api/lobby/" + code);
  if (res.status === 404 || res.status === 401) {
    setError("This room does not exist");

    return null;
  } else {
    const json = await res.json();
    setError("");
    return json;
  }
};

const Home = ({ socket }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const history = useHistory();
  return (
    <Flex p="4" m="2" minH="lg" shadow="lg" flexDirection="column">
      <Center>
        <Heading textAlign="center">APPS IN WONDERLAND</Heading>
      </Center>
      <Center mt={4}>
        <FormControl isRequired w="lg">
          <FormLabel>Name</FormLabel>
          <Input
            focusBorderColor="purple.600"
            placeholder="Enter Name"
            variant="flushed"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></Input>
        </FormControl>
      </Center>
      {name && (
        <>
          <Center mt={4}>
            <FormControl isRequired w="lg" isInvalid={error !== null}>
              <FormLabel>Code</FormLabel>
              <Input
                focusBorderColor="purple.600"
                placeholder="Enter Code (if joining a game)"
                variant="flushed"
                onChange={(event) => {
                  setCode(event.target.value);
                }}
              ></Input>
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
          </Center>
          <Center mt={4}>
            <Button
              w="lg"
              variant="outline"
              colorScheme="purple"
              onClick={async () => {
                const lobbyData = await handleJoinClick(code, setError);
                console.log(lobbyData);
                if (lobbyData !== null) {
                  lobbyData.isHost = false;
                  history.push({
                    pathname: "Lobby/" + lobbyData.code,
                    state: { ...lobbyData, name },
                  });
                }
              }}
            >
              Join Game
            </Button>
          </Center>
          <Center mt={4}>
            <Button
              w="lg"
              variant="outline"
              colorScheme="purple"
              onClick={async () => {
                const lobbyData = await handleCreateClick(name, setError);
                if (!error) {
                  lobbyData.isHost = true;
                  history.push({
                    pathname: "Lobby/" + lobbyData.code,
                    state: { ...lobbyData, name },
                  });
                }
              }}
            >
              Create Game
            </Button>
          </Center>
        </>
      )}
    </Flex>
  );
};

export default Home;
