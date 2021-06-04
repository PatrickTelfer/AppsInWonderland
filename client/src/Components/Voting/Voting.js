import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import VotingCard from "./VotingCard";
import { SocketContext } from "../../Context/socket";
import { useParams } from "react-router";

const Voting = () => {
  const socket = useContext(SocketContext);
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    socket.emit("requestingImages");

    socket.on("sendingImages", (imgs) => {
      setImages(imgs);
    });
  }, [socket]);

  return (
    <FullWidthContainer>
      <StyledContainer>
        <Title>Vote!</Title>
        <VoteContainer>
          {images.forEach((image) => {
            <VotingCard src={image} />;
          })}
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
