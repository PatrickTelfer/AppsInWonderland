import React, { useContext, useEffect, useState } from "react";
import VotingCard from "./VotingCard";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams } from "react-router";
import { withRouter } from "react-router-dom";
import { Flex, Heading, Text, Code } from "@chakra-ui/react";

const Voting = (props) => {
  const socket = useContext(SocketContext);
  const [images, setImages] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const [requestedImages, setRequestedImages] = useState(false);
  const [showBest, setShowBest] = useState(true);
  const [showCreative, setShowCreative] = useState(true);
  const [showWeird, setShowWeird] = useState(true);

  const state = props.location.state;
  const name = state && state.name;
  const prompt = state && state.prompt;

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
            pathname: "/RoundResults/" + id,
            state: { ...state, name, isLast: false, prompt },
          });
        }
      });

      socket.on("lastVoteEnd", () => {
        if (isMounted) {
          history.replace({
            pathname: "/RoundResults/" + id,
            state: { ...state, name, isLast: true, prompt },
          });
        }
      });
    }

    return () => {
      isMounted = false;
      socket.removeAllListeners("sendingImages");
      socket.removeAllListeners("lastVoteDraw");
      socket.removeAllListeners("lastVoteEnd");
    };
  }, []);

  return (
    <Flex
      p="4"
      m="2"
      minH="xl"
      shadow="md"
      flexDirection="column"
      alignItems="center"
    >
      <Heading>Vote!</Heading>
      <Text>
        For the prompt <Code>{prompt}</Code>
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" margin="1">
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
      </Flex>
    </Flex>
  );
};

export default withRouter(Voting);
