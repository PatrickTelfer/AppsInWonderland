import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FullWidthContainer, Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";
import styled from "styled-components";

const handleCreateClick = async (name) => {
  const res = await fetch("/api/lobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  const json = await res.json();

  return json;
};

const Home = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);

  const history = useHistory();
  return (
    <FullWidthContainer>
      <Container>
        <Title>APPS IN WONDERLAND</Title>
        <Input
          placeholder="Enter Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></Input>
        {name && (
          <>
            <Input
              placeholder="Enter Code"
              onChange={(event) => {
                setCode(event.target.value);
              }}
            ></Input>

            <Button disabled={code === ""}>JOIN</Button>
            <CreateButton
              onClick={async () => {
                const lobbyData = await handleCreateClick(name);
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
            </CreateButton>
          </>
        )}
      </Container>
    </FullWidthContainer>
  );
};

const CreateButton = styled(Button)`
  margin-top: auto;
  border: 2px solid rgb(84, 177, 184);
  color: rgb(84, 177, 184);
`;
export default Home;
