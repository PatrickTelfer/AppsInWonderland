import React from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import VotingCard from "./VotingCard";

const Voting = () => {
  return (
    <FullWidthContainer>
      <StyledContainer>
        <Title>Vote!</Title>
        <VoteContainer>
          <VotingCard />
          <VotingCard />
          <VotingCard />
        </VoteContainer>
      </StyledContainer>
    </FullWidthContainer>
  );
};

const VoteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em;
`;

const StyledContainer = styled(Container)`
  height: auto;
  margin: 1em;
`;

export default Voting;
