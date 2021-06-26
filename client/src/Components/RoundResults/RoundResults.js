import React, { useEffect, useState, useContext } from "react";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import styled from "styled-components";
import VotingCard from "../Voting/VotingCard";
import { SocketContext } from "../../Context/socket";
import { Button } from "../Common/Button";
import { useHistory, useParams, withRouter } from "react-router-dom";

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
  const { name, isLast } = state;

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
    <FullWidthContainer>
      <StyledContaier>
        <TopContainer>
          <Title style={{ margin: 0 }}>Round Results</Title>

          {isHost && (
            <NextButton
              onClick={() => {
                if (isLast) {
                  socket.emit("hostEndingGame");
                } else {
                  socket.emit("hostStartingNextRound");
                }
              }}
            >
              {buttonText}
            </NextButton>
          )}
        </TopContainer>

        <VoteContainer>
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
        </VoteContainer>
      </StyledContaier>
    </FullWidthContainer>
  );
};

const VoteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  width: 100%;
`;
const NextButton = styled(Button)`
  height: 50px;
  margin: 0;
  padding: 0;
  margin: 0.5em;
`;

const StyledContaier = styled(Container)`
  height: auto;
`;

export default withRouter(RoundResults);
