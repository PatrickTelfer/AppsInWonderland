import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FullWidthContainer, Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";
import styled from "styled-components";

const handleCreateClick = async (name, setError) => {
  const res = await fetch("/api/lobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  setError(null);
  const json = await res.json();

  return json;
};

const handleJoinClick = async (code, setError) => {
  const res = await fetch("/api/lobby/" + code);
  console.log(res.status);
  if (res.status === 404) {
    setError("This room does not exist");

    return null;
  } else {
    const json = await res.json();
    setError("");
    return json;
  }
};

const Home = ({ socket }) => {
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
            {error !== "" && <ErrorText>{error}</ErrorText>}

            <Button
              disabled={code === ""}
              onClick={async () => {
                const lobbyData = await handleJoinClick(code, setError);
                console.log(lobbyData);
                if (lobbyData !== null) {
                  lobbyData.isHost = false;
                  history.push({
                    pathname: "Lobby/" + lobbyData.code,
                    state: { ...lobbyData, name },
                  });
                }
              }}
            >
              JOIN
            </Button>
            <CreateButton
              onClick={async () => {
                const lobbyData = await handleCreateClick(name, setError);
                if (!error) {
                  lobbyData.isHost = true;
                  history.push({
                    pathname: "Lobby/" + lobbyData.code,
                    state: { ...lobbyData, name },
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
  border: 2px solid rgb(84, 177, 184);
  color: rgb(84, 177, 184);
`;

const ErrorText = styled.p`
  color: red;
`;
export default Home;
