import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";
import { Button } from "../Common/Button";
import thinking from "../../Ressources/thinking.gif";
import { SocketContext } from "../../Context/socket";

const PromptInput = () => {
  const socket = useContext(SocketContext);
  const [second, setSecond] = useState(10);
  useEffect(() => {
    if (socket) {
      socket.on("timerUpdate", (second) => {
        setSecond(second);
      });
    }
  }, [socket]);
  return (
    <FullWidthContainer>
      <Container>
        <Title>Enter a drawing prompt ⏳ {second} ⏳</Title>
        <Spinning src={thinking} alt="loading..." />
        <StyledInput placeholder="Input a suggestion!"></StyledInput>
        <Button>Submit</Button>
      </Container>
    </FullWidthContainer>
  );
};

const StyledInput = styled(Input)`
  margin-top: auto;
`;

const Spinning = styled.img`
  max-width: 100px;
`;

export default PromptInput;
