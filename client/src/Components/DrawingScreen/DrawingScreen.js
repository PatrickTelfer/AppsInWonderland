import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../Canvas/Canvas";
import { Button } from "../Common/Button";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import { SocketContext } from "../../Context/socket";

const DrawingScreen = () => {
  const socket = useContext(SocketContext);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (socket) {
      socket.emit("requestingPrompt");
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("sendingPrompt", (prompt) => {
        setPrompt(prompt);
      });
    }
  }, [socket]);
  return (
    <FullWidthContainer>
      <DrawingContainer>
        <Title>{prompt}</Title>
        <Canvas />
        <Button>Submit</Button>
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
