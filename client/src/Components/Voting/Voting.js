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
  const [requestedImages, setRequestedImages] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (socket && !requestedImages) {
      console.log(requestedImages);
      console.log("hello");

      socket.emit("requestingImages");
      if (isMounted) {
        setRequestedImages(true);
      }

      socket.on("sendingImages", (imgs) => {
        if (isMounted) {
          console.log(imgs);
          setImages(imgs);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <FullWidthContainer>
      <StyledContainer>
        <Title>Vote!</Title>
        <VoteContainer>
          {images.map((value, index) => {
            return (
              <VotingCard key={index} src={value.dataURL} name={value.name} />
            );
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
