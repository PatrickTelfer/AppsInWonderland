import React from "react";
import { FullWidthContainer, Container } from "../Common/Container";
import styled from "styled-components";
import PlayerList from "./PlayerList";
import { Button } from "../Common/Button";

const Lobby = () => {
  const testData = [
    "one",
    "two",
    "three",
    "one",
    "two",
    "three",
    "one",
    "two",
    "three",
    "one",
    "two",
    "three",
  ];
  return (
    <FullWidthContainer>
      <LobbyContainer>
        <Title>WELCOME TO THE LOBBY</Title>
        <SubTitle>🔥 There are {testData.length} players here 🔥</SubTitle>
        <PlayerList players={testData} />
        <Button style={{ marginTop: "auto" }}>Start</Button>
      </LobbyContainer>
      <LobbyContainer>
        <p>test</p>
      </LobbyContainer>
    </FullWidthContainer>
  );
};

const LobbyContainer = styled(Container)`
  margin: 20px;
  max-width: 500px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #47d1c2;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.h4`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #71f0e1;
  margin-bottom: 0.5em;
  margin-top: 0;
`;

export default Lobby;
