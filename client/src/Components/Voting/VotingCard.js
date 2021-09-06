import React, { useContext } from "react";
import { SocketContext } from "../../Context/socket";
import { Flex, Box, Image, VStack, Button } from "@chakra-ui/react";

const TileCard = (props) => {
  const { bgColor } = props;
  return (
    <Box borderRadius="md" mb="1" p="1" textAlign="center" bgColor={bgColor}>
      {props.children}
    </Box>
  );
};

const VotingButton = (props) => {
  const { bgColor, onClick } = props;
  return (
    <Button
      w="2xs"
      bgColor={bgColor}
      borderRadius="md"
      padding="2"
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};

const VotingCard = ({
  src,
  name,
  showBest,
  setShowBest,
  showWeird,
  setShowWeird,
  showCreative,
  setShowCreative,
  showName,
  isBest,
  isCreative,
  isWeird,
}) => {
  const socket = useContext(SocketContext);

  return (
    <Flex flexDirection="column" w="300px" m={2}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#f2f2f2"
        mb={2}
      >
        <Image alt="user drawing" src={src} />
        <Box margin="1">
          {isBest && <TileCard bgColor="#67e9a3">🥇 Best Drawing 🥇</TileCard>}
          {isCreative && (
            <TileCard bgColor="#7CE3F1">🎨 Most Creative 🎨</TileCard>
          )}
          {isWeird && <TileCard bgColor="#FD7070">🤔 ??? 🤔</TileCard>}
        </Box>

        {showName && (
          <Box mt="auto" bgColor="white" p="2" mb="2" borderRadius="md">
            Drawing by {name}
          </Box>
        )}
      </Flex>
      <VStack spacing={2}>
        {showBest && (
          <VotingButton
            bgColor="#67e9a3"
            onClick={() => {
              setShowBest(false);
              socket.emit("voteForPlayer", { name: name, category: "best" });
            }}
          >
            🥇 Best Drawing 🥇
          </VotingButton>
        )}

        {showCreative && (
          <VotingButton
            bgColor="#7CE3F1"
            onClick={() => {
              setShowCreative(false);
              socket.emit("voteForPlayer", {
                name: name,
                category: "creative",
              });
            }}
          >
            🎨 Most Creative 🎨
          </VotingButton>
        )}

        {showWeird && (
          <VotingButton
            bgColor="#FD7070"
            onClick={() => {
              setShowWeird(false);
              socket.emit("voteForPlayer", { name: name, category: "weird" });
            }}
          >
            🤔 ??? 🤔
          </VotingButton>
        )}
      </VStack>
    </Flex>
  );
};

export default VotingCard;
