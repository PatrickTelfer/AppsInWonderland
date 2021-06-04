import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Canvas from "../Canvas/Canvas";
import { Button } from "../Common/Button";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import { SocketContext } from "../../Context/socket";
import { useHistory } from "react-router";
import { Progress } from "../Common/Progress";

const DrawingScreen = () => {
  const socket = useContext(SocketContext);
  const [prompt, setPrompt] = useState("");
  const history = useHistory();
  const [second, setSecond] = useState(30);
  const [receivedTimer, setReceivedTimer] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    if (socket) {
      socket.emit("requestingPrompt");
      socket.emit("startTimer");
    }
  }, [socket]);

  // useEffect(() => {
  //   console.log(canvasRef);
  // }, [canvasRef]);

  useEffect(() => {
    if (socket) {
      socket.on("sendingPrompt", (prompt) => {
        setPrompt(prompt);
      });
      socket.on("gameOver", () => {
        history.replace("/");
      });

      socket.on("timerUpdate", (second) => {
        setSecond(second);
        if (!receivedTimer) {
          setReceivedTimer(true);
        }
      });
      socket.on("timerDone", () => {
        history.replace({
          pathname: "/Voting",
        });
      });
    }
  }, [history, socket]);
  return (
    <FullWidthContainer>
      <DrawingContainer>
        <Title>{prompt || "LOADING PROMPT..."}</Title>
        {receivedTimer && <Progress value={second} max={30} />}
        <Canvas ref={canvasRef} />
        <Button
          onClick={() => {
            console.log(canvasRef.current.toDataURL());
          }}
        >
          Submit
        </Button>
      </DrawingContainer>
    </FullWidthContainer>
  );
};

const DrawingContainer = styled(Container)`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default DrawingScreen;
