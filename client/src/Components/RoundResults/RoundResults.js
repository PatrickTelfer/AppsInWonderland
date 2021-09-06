import React, { useEffect, useState, useContext } from "react";
import VotingCard from "../Voting/VotingCard";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { Flex, Heading, Button, Text, Code } from "@chakra-ui/react";

function mySort(a, b) {
  if (a.value > b.value) {
    return -1;
  } else {
    return 1;
  }
}

function setTopPlayers(sortedPlayers, category) {
  const topCount = sortedPlayers[0].value;

  for (let i = 0; i < sortedPlayers.length; i++) {
    if (sortedPlayers[i].value === topCount) {
      sortedPlayers[i][category] = true;
    } else {
      sortedPlayers[i][category] = false;
    }
  }
}

function mergeArrs(arr1, arr2, arr3) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    const name = arr1[i].name;
    newArr[i] = {
      name,
      isBest: arr1[i].isBest,
      img: arr1[i].img,
    };

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].name === name) {
        newArr[i].isCreative = arr2[j].isCreative;
        break;
      }
    }

    for (let j = 0; j < arr3.length; j++) {
      if (arr3[j].name === name) {
        newArr[i].isWeird = arr3[j].isWeird;
        break;
      }
    }
  }
  return newArr;
}

const RoundResults = (props) => {
  const [players, setPlayers] = useState([]);
  const [serverPlayers, setServerPlayers] = useState([]);
  const [buttonText, setButtonText] = useState("Next Round");

  const history = useHistory();
  const { id } = useParams();

  const socket = useContext(SocketContext);
  const state = props.location.state;
  const { isHost } = state;
  const { name, isLast, prompt } = state;

  useEffect(() => {
    if (isLast) {
      setButtonText("Go To Final Results");
    }
  }, [isLast]);

  useEffect(() => {
    let isMounted = true;

    if (socket && isMounted) {
      socket.emit("requestingVotes");

      socket.on("sendingVotes", (votes) => {
        if (isMounted) {
          setServerPlayers(votes);
        }
      });

      socket.on("hostStartedNextRound", () => {
        history.replace({
          pathname: "/DrawingScreen/" + id,
          state: { ...state, name },
        });
      });

      socket.on("hostEndedGame", () => {
        history.replace({
          pathname: "/Results/" + id,
          state: { ...state, name },
        });
      });
    }

    return () => {
      isMounted = false;
    };
  }, [socket]);

  useEffect(() => {
    if (serverPlayers.length === 0) {
      return;
    }
    const arr1 = serverPlayers.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.best,
        img: data.currentDrawing,
      };
    });

    const arr2 = serverPlayers.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.creative,
      };
    });

    const arr3 = serverPlayers.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.weird,
      };
    });
    arr1.sort(mySort);

    arr2.sort(mySort);

    arr3.sort(mySort);
    setTopPlayers(arr1, "isBest");
    setTopPlayers(arr2, "isCreative");
    setTopPlayers(arr3, "isWeird");
    const newArr = mergeArrs(arr1, arr2, arr3);
    setPlayers(newArr);
  }, [serverPlayers]);

  return (
    <Flex
      p="4"
      m="2"
      minH="xl"
      shadow="md"
      flexDirection="column"
      alignItems="center"
    >
      <Heading>Round Results</Heading>
      <Text mb={2}>
        For the prompt <Code>{prompt}</Code>
      </Text>
      {isHost && (
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={() => {
            if (isLast) {
              socket.emit("hostEndingGame");
            } else {
              socket.emit("hostStartingNextRound");
            }
          }}
        >
          {buttonText}
        </Button>
      )}
      <Flex justifyContent="center" flexWrap="wrap" m={2}>
        {players.map((player, index) => {
          return (
            <VotingCard
              key={index}
              src={player.img}
              name={player.name}
              setShowBest={() => {}}
              showBest={false}
              setShowCreative={() => {}}
              showCreative={false}
              setShowWeird={() => {}}
              showWeird={false}
              showName={true}
              isBest={player.isBest}
              isCreative={player.isCreative}
              isWeird={player.isWeird}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default withRouter(RoundResults);
