import React from "react";
import { FullWidthContainer, Container } from "../Common/Container";
import styled from "styled-components";
import PlayerList from "./PlayerList";
import { Button } from "../Common/Button";
import Canvas from "../Canvas/Canvas";
import { withRouter } from "react-router";
import { Title, SubTitle } from "../Common/Text";

const Lobby = (props) => {
  const testData = ["bob", "joe", "kanye", "test", "travis", "dominoes pizza"];
  const serverData = props.location.state;
  const serverCode = serverData.serverCode;
  return (
    <FullWidthContainer>
      <LobbyContainer>
        <Title>WELCOME TO THE LOBBY</Title>
        <Code>
          🔥 Join with Code
          <span style={{ color: "red" }}> {serverCode} </span>🔥
        </Code>
        <PlayerList players={testData} />
        <SubTitle>Player Count: {testData.length}</SubTitle>

        <Button style={{ marginTop: "auto" }}>Start</Button>
      </LobbyContainer>
      <DrawingContainer>
        <Canvas />
        <Button>Clear</Button>
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
`;

export default withRouter(Lobby);
