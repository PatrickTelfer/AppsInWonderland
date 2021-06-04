import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Canvas from "../Canvas/Canvas";
import { Button } from "../Common/Button";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams } from "react-router";
import { Progress } from "../Common/Progress";

const DrawingScreen = () => {
  const socket = useContext(SocketContext);
  const [prompt, setPrompt] = useState("");
  const history = useHistory();
  const [second, setSecond] = useState(30);
  const [receivedTimer, setReceivedTimer] = useState(false);
  const canvasRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    if (socket) {
      socket.emit("requestingPrompt");
      socket.emit("startTimer");
    }
  }, [socket]);

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
          pathname: "/Voting/" + id,
        });
      });
    }
  }, [history, socket]);
  return (
    <FullWidthContainer>
      <DrawingContainer>
        <Title style={{ marginTop: 0 }}>{prompt || "LOADING PROMPT..."}</Title>
        {receivedTimer && <Progress value={second} max={30} />}
        <Canvas ref={canvasRef} />
        <Button
          onClick={() => {
            const dataURL = canvasRef.current.toDataURL();
            socket.emit("submittingImage", dataURL);
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
    padding: 5px;
  }
`;

export default DrawingScreen;
