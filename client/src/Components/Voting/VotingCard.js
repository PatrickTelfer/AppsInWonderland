import React from "react";
import styled from "styled-components";
const VotingCard = () => {
  return (
    <CardContainer>
      <UpperContainer>
        <StyledImg
          alt="test"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80cf80aa-b768-4409-b289-f32d92d64b54/d5u4498-064b497e-a197-4c79-a421-2de796d30af4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwY2Y4MGFhLWI3NjgtNDQwOS1iMjg5LWYzMmQ5MmQ2NGI1NFwvZDV1NDQ5OC0wNjRiNDk3ZS1hMTk3LTRjNzktYTQyMS0yZGU3OTZkMzBhZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PTYHnvYgUZaO7s1xJREEUq4mKTZPcBWi3oJMV8X0jUM"
        />
        <Name>Drawing by Patrick</Name>
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
  &:hover {
    filter: brightness(125%);
  }
  &:active {
    filter: brightness(75%);
  }
`;

const UpperContainer = styled.div`
  width: 300px;
  height: 420px;
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
  width: 200px;
`;

export default VotingCard;
