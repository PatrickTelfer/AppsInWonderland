import React from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Input } from "../Common/Input";
import { Title } from "../Common/Text";
import { Button } from "../Common/Button";
import thinking from "../../Ressources/thinking.gif";

const PromptInput = () => {
  return (
    <FullWidthContainer>
      <Container>
        <Title>Enter a drawing prompt</Title>
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
