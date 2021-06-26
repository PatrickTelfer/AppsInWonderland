import React, { useEffect, useState } from "react";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title } from "../Common/Text";
import styled from "styled-components";
import VotingCard from "../Voting/VotingCard";

const testData = [
  {
    name: "a",
    votes: {
      creative: 1,
      best: 1,
      weird: 1,
    },
    currentDrawing: "https://dummyimage.com/300x420/f2f2f2/000",
    roundVotes: {
      creative: 1,
      best: 3,
      weird: 1,
    },
  },
  {
    name: "b",
    votes: {
      creative: 1,
      best: 1,
      weird: 1,
    },
    currentDrawing: "https://dummyimage.com/300x420/f2f2f2/000",
    roundVotes: {
      creative: 2,
      best: 1,
      weird: 1,
    },
  },
  {
    name: "c",
    votes: {
      creative: 1,
      best: 1,
      weird: 1,
    },
    currentDrawing: "https://dummyimage.com/300x420/f2f2f2/000",
    roundVotes: {
      creative: 2,
      best: 3,
      weird: 1,
    },
  },
  {
    name: "d",
    votes: {
      creative: 1,
      best: 1,
      weird: 1,
    },
    currentDrawing: "https://dummyimage.com/300x420/f2f2f2/000",
    roundVotes: {
      creative: 0,
      best: 0,
      weird: 1,
    },
  },
];

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

const RoundResults = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const arr1 = testData.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.best,
        img: data.currentDrawing,
      };
    });

    const arr2 = testData.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.creative,
      };
    });

    const arr3 = testData.map((data) => {
      return {
        name: data.name,
        value: data.roundVotes.weird,
      };
    });
    arr1.sort(mySort);
    // setBestArray(arr1);

    arr2.sort(mySort);
    // setCreativeArray(arr2);

    arr3.sort(mySort);
    setTopPlayers(arr1, "isBest");
    setTopPlayers(arr2, "isCreative");
    setTopPlayers(arr3, "isWeird");
    const newArr = mergeArrs(arr1, arr2, arr3);
    setPlayers(newArr);
    // setWeirdArray(arr3);
  }, [testData]);

  return (
    <FullWidthContainer>
      <StyledContaier>
        <Title>Round Results</Title>
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

const StyledContaier = styled(Container)`
  height: auto;
`;

export default RoundResults;
