import React, { useContext, useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/Canvas";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams, withRouter } from "react-router";
import {
  Flex,
  Text,
  Heading,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Alert,
  AlertIcon,
  Code,
} from "@chakra-ui/react";

const DrawingScreen = (props) => {
  const socket = useContext(SocketContext);
  const canvasRef = useRef();
  const history = useHistory();
  const { id } = useParams();

  const [prompt, setPrompt] = useState("");
  const [second, setSecond] = useState(60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receivedTimer, setReceivedTimer] = useState(false);
  const [maxSecond, setMaxSecond] = useState(60);

  const state = props.location.state;
  const name = state && state.name;

  useEffect(() => {
    if (socket) {
      socket.emit("requestingPrompt");
      socket.emit("startTimer");
    }
  }, [socket]);

  useEffect(() => {
    let isMounted = true;
    if (socket && isMounted) {
      socket.on("timerUpdate", (secondData) => {
        const { second, maxSecond } = secondData;
        if (isMounted) {
          setSecond(second);
          setMaxSecond(maxSecond);
        }
        if (!receivedTimer) {
          setReceivedTimer(true);
        }
      });
      socket.on("timerDone", () => {
        if (isMounted) {
          if (!isSubmitted) {
            const dataURL = canvasRef.current.toDataURL();
            const imageData = {
              name,
              dataURL,
            };
            socket.emit("submittingImage", imageData);
          }

          history.replace({
            pathname: "/Voting/" + id,
            state: { ...state, name, prompt },
          });
        }
      });
    }
    return () => {
      isMounted = false;
      socket.removeAllListeners("timerDone");
      socket.removeAllListeners("timerUpdate");
    };
  }, [socket, isSubmitted, receivedTimer]);

  useEffect(() => {
    let isMounted = true;
    if (socket && isMounted) {
      socket.on("sendingPrompt", (prompt) => {
        if (isMounted) {
          setPrompt(prompt);
        }
      });
      socket.on("gameOver", () => {
        if (isMounted) {
          history.replace("/");
        }
      });
    }
    return () => {
      isMounted = false;
      socket.removeAllListeners("sendingPrompt");
      socket.removeAllListeners("gameOver");
    };
  }, [history, socket, isSubmitted]);
  return (
    <Flex
      p="4"
      m="2"
      minH="xl"
      shadow="md"
      flexDirection="column"
      alignItems="center"
    >
      <Heading size="md">The prompt is:</Heading>
      <Text>
        <Code>{prompt || "a turtle wearing a top hat"}</Code>
      </Text>

      <CircularProgress value={second} max={maxSecond} mt={4}>
        {receivedTimer && (
          <CircularProgressLabel>{second}</CircularProgressLabel>
        )}
      </CircularProgress>
      {!isSubmitted && (
        <>
          <Canvas ref={canvasRef} />
          <Button
            w="2xs"
            variant="outline"
            colorScheme="purple"
            onClick={() => {
              setIsSubmitted(true);
              const dataURL = canvasRef.current.toDataURL();
              const imageData = {
                name,
                dataURL,
              };
              socket.emit("submittingImage", imageData);
            }}
          >
            Submit
          </Button>
        </>
      )}
      {isSubmitted && (
        <Alert status="success" mt="auto">
          <AlertIcon />
          Thank your for your submission. Waiting for others to submit
        </Alert>
      )}
    </Flex>
  );
};

export default withRouter(DrawingScreen);
