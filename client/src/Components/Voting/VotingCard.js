import React from "react";
import styled from "styled-components";

const VotingCard = ({ src, name }) => {
  console.log("HEREa");
  return (
    <CardContainer>
      <UpperContainer>
        <StyledImg alt="test" src={src} />
        <Name>Drawing by {name}</Name>
      </UpperContainer>
      <BottomContainer>
        <VotingButton>🥇 Best Drawing 🥇</VotingButton>
        <VotingButton style={{ backgroundColor: "#7CE3F1" }}>
          🎨 Most Creative 🎨
        </VotingButton>
        <VotingButton style={{ backgroundColor: "#FD7070" }}>
          🤔 ??? 🤔
        </VotingButton>
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
