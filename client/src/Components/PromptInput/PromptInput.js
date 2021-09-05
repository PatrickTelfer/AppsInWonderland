import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams, withRouter } from "react-router";
import {
  Center,
  Flex,
  Text,
  Heading,
  FormControl,
  Button,
  FormLabel,
  Input,
  CircularProgress,
  CircularProgressLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const PromptInput = (props) => {
  const state = props.location.state;

  const name = state.name;
  const socket = useContext(SocketContext);
  const [second, setSecond] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxSecond, setMaxSecond] = useState(60);
  const history = useHistory();
  const [receivedTimer, setReceivedTimer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (socket) {
      socket.on("timerUpdateStart", (secondData) => {
        if (isMounted) {
          const { second, maxSecond } = secondData;
          setSecond(second);
          setMaxSecond(maxSecond);
          if (!receivedTimer) {
            setReceivedTimer(true);
          }
        }
      });
      socket.on("timerDoneStart", () => {
        if (isMounted) {
          if (!submitted && prompt !== "") {
            socket.emit("submitPrompt", prompt);
          }
          history.replace({
            pathname: "/DrawingScreen/" + id,
            state: { ...state, name },
          });
        }
      });
    }
    return () => {
      isMounted = false;
      socket.removeAllListeners("timerDoneStart");
      socket.removeAllListeners("timerUpdateStart");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, socket, submitted, prompt]);
  return (
    <Flex p="4" m="2" minH="xl" shadow="md" flexDirection="column">
      <Heading textAlign="center">Enter a drawing prompt</Heading>
      <Text textAlign="center" fontSize="sm" mt={2}>
        Drawing prompts will then be randomly selected to be drawn by the other
        players
      </Text>

      {receivedTimer && (
        <Center>
          <CircularProgress value={second} max={maxSecond} mt={4}>
            <CircularProgressLabel>{second}</CircularProgressLabel>
          </CircularProgress>
        </Center>
      )}
      {!submitted && (
        <>
          <Center mt={8}>
            <FormControl isRequired w="lg">
              <FormLabel>Prompt</FormLabel>
              <Input
                focusBorderColor="purple.600"
                placeholder="Input a suggestion!"
                variant="flushed"
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
              />
            </FormControl>
          </Center>
          <Center mt={4}>
            <Button
              w="lg"
              variant="outline"
              colorScheme="purple"
              onClick={() => {
                if (prompt !== "") {
                  setSubmitted(true);
                  socket.emit("submitPrompt", prompt);
                }
              }}
            >
              Submit
            </Button>
          </Center>
        </>
      )}
      {submitted && (
        <Center mt="auto">
          <Alert status="success">
            <AlertIcon />
            Thank your for your submission. Waiting for others to submit
          </Alert>
        </Center>
      )}
    </Flex>
  );
};

export default withRouter(PromptInput);
