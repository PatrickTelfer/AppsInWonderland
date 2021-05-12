import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FullWidthContainer, Container } from "../Common/Container";

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
        <CodeInput
          placeholder="Enter Code"
          onChange={(event) => {
            setCode(event.target.value);
          }}
        ></CodeInput>
      </Container>
    </FullWidthContainer>
  );
};

const CodeInput = styled.input`
  display: inline-block;
  background-color: white;
  padding: 15px 15px;
  border: none;
  border-bottom: 2px solid rgba(164, 53, 170, 0.8);
  color: rgba(164, 53, 170, 0.8);
  font-size: 1.5em;
  transition: all 0.15s;
  margin: 0 0.3em 1.2em 0;
  text-align: center;
  &:hover {
    color: rgba(164, 53, 194, 0.6);
    border-color: rgba(164, 53, 194, 0.6);
    outline: none;
  }
  &:focus {
    color: red;
    color: rgba(164, 53, 194, 0.6);
    border-color: rgba(164, 53, 194, 0.6);
    outline: none;
  }
  &::placeholder {
    color: rgba(164, 53, 170, 0.8);
  }
  width: 45%;
`;

const Button = styled.button`
  display: inline-block;
  background-color: white;
  padding: 15px 15px;
  border: 2px solid rgba(164, 53, 170, 0.8);
  color: rgba(164, 53, 194, 0.8);
  transition: all 0.15s;
  margin: 0 0.3em 1.2em 0;
  font-size: 1.5em;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: rgba(164, 53, 194, 0.2);
    border-color: rgba(164, 53, 194, 0.2);
  }
  &:active {
    color: whitesmoke;
    border-color: whitesmoke;
  }
  &:disabled {
    color: rgba(164, 53, 194, 0.2);
    border-color: rgba(164, 53, 194, 0.2);
    cursor: default;
  }
  width: 50%;
`;

const Title = styled.h1`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #47d1c2;
  margin-bottom: 1em;
`;

export default Home;
