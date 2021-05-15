import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FullWidthContainer, Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";

const handleCreateClick = async (setError) => {
  const res = await fetch("/api/lobby", { method: "POST" });
  const json = await res.json();

  return json;
};

const Home = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();
  return (
    <FullWidthContainer>
      <Container>
        <Title>APPS IN WONDERLAND</Title>
        <Button
          onClick={async () => {
            const lobbyData = await handleCreateClick(setError);
            console.log(lobbyData);
            if (!error) {
              history.push({
                pathname: "Lobby",
                state: lobbyData,
              });
            }
          }}
        >
          CREATE
        </Button>
        <Button disabled={code === ""}>JOIN</Button>
        <Input
          placeholder="Enter Code"
          onChange={(event) => {
            setCode(event.target.value);
          }}
        ></Input>
      </Container>
    </FullWidthContainer>
  );
};

export default Home;
