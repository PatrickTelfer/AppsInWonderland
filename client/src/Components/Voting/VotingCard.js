import React, { useState } from "react";
import styled from "styled-components";

const VotingCard = ({
  src,
  name,
  showBest,
  setShowBest,
  showWeird,
  setShowWeird,
  showCreative,
  setShowCreative,
}) => {
  return (
    <CardContainer>
      <UpperContainer>
        <StyledImg alt="test" src={src} />
        <Name>Drawing by {name}</Name>
      </UpperContainer>
      <BottomContainer>
        {showBest && (
          <VotingButton
            onClick={() => {
              setShowBest(false);
            }}
          >
            🥇 Best Drawing 🥇
          </VotingButton>
        )}

        {showCreative && (
          <VotingButton
            style={{ backgroundColor: "#7CE3F1" }}
            onClick={() => {
              setShowCreative(false);
            }}
          >
            🎨 Most Creative 🎨
          </VotingButton>
        )}

        {showWeird && (
          <VotingButton
            style={{ backgroundColor: "#FD7070" }}
            onClick={() => {
              setShowWeird(false);
            }}
          >
            🤔 ??? 🤔
          </VotingButton>
        )}
      </BottomContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1em;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VotingButton = styled.button`
  background: #67e9a3;
  border-radius: 4px;
  margin-bottom: 0.4em;
  width: calc(100% - 40px);
  padding: 0.5em;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  &:hover {
    filter: brightness(125%);
  }
  &:active {
    filter: brightness(75%);
  }
`;

const UpperContainer = styled.div`
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  margin-bottom: 1em;
`;

const Name = styled.div`
  margin-top: auto;
  background-color: white;
  margin-bottom: 15px;
  width: calc(100% - 60px);
  padding: 10px;
  text-align: center;
  border-radius: 4px;
`;

const StyledImg = styled.img`
  margin-top: auto;
`;

export default VotingCard;
