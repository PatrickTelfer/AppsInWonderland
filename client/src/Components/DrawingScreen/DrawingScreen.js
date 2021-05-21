import React from "react";
import styled from "styled-components";
import Canvas from "../Canvas/Canvas";
import { Button } from "../Common/Button";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";

const DrawingScreen = () => {
  return (
    <FullWidthContainer>
      <DrawingContainer>
        <Title>OMG a funny prompt!!!!</Title>
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
