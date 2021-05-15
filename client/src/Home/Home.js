import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FullWidthContainer, Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";

const Home = () => {
  const [code, setCode] = useState("");
  const history = useHistory();
  return (
    <FullWidthContainer>
      <Container>
        <Title>APPS IN WONDERLAND</Title>
        <Button
          onClick={() => {
            history.push("/Lobby");
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
