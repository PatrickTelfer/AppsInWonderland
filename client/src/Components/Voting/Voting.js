import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import VotingCard from "./VotingCard";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams } from "react-router";
import { withRouter } from "react-router-dom";

const Voting = (props) => {
  const socket = useContext(SocketContext);
  const [images, setImages] = useState([]);
  const [requestedImages, setRequestedImages] = useState(false);
  const [showBest, setShowBest] = useState(true);
  const [showCreative, setShowCreative] = useState(true);
  const [showWeird, setShowWeird] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const state = props.location.state;
  const name = state.name;

  useEffect(() => {
    let isMounted = true;
    if (socket && !requestedImages && isMounted) {
      socket.emit("requestingImages");
      if (isMounted) {
        setRequestedImages(true);
      }

      socket.on("sendingImages", (imgs) => {
        if (isMounted) {
          setImages(imgs);
        }
      });

      socket.on("lastVoteDraw", () => {
        if (isMounted) {
          history.replace({
            pathname: "/DrawingScreen/" + id,
            state: { name },
          });
        }
      });

      socket.on("lastVoteEnd", () => {
        if (isMounted) {
          history.replace({
            pathname: "/Results/" + id,
            state: { name },
          });
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
              <VotingCard
                key={index}
                src={value.dataURL}
                name={value.name}
                showBest={showBest}
                setShowBest={setShowBest}
                showCreative={showCreative}
                setShowCreative={setShowCreative}
                showWeird={showWeird}
                setShowWeird={setShowWeird}
                showName={false}
              />
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

export default withRouter(Voting);
