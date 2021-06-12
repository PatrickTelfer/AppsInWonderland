import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SocketContext } from "../../Context/socket";
import { Container, FullWidthContainer } from "../Common/Container";
import Rankings from "./Rankings";

function mySort(a, b) {
  if (a.value > b.value) {
    return -1;
  } else {
    return 1;
  }
}
const Results = () => {
  const [bestArray, setBestArray] = useState([]);
  const [creativeArray, setCreativeArray] = useState([]);
  const [weirdArray, setWeirdArray] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    let isMounted = true;

    if (socket && isMounted) {
      socket.emit("requestingVotes");

      socket.on("sendingVotes", (votes) => {
        if (isMounted) {
          setPlayerData(votes);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [socket]);

  useEffect(() => {
    const arr1 = playerData.map((data) => {
      return {
        name: data.name,
        value: data.votes.best,
      };
    });

    const arr2 = playerData.map((data) => {
      return {
        name: data.name,
        value: data.votes.creative,
      };
    });

    const arr3 = playerData.map((data) => {
      return {
        name: data.name,
        value: data.votes.weird,
      };
    });
    arr1.sort(mySort);
    setBestArray(arr1);

    arr2.sort(mySort);
    setCreativeArray(arr2);

    arr3.sort(mySort);
    setWeirdArray(arr3);
  }, [playerData]);
  return (
    <FullWidthContainer>
      <ResultsContainer>
        <RankingsContainer>
          <Rankings title="Best Drawing" color="#67e9a3" data={bestArray} />
          <Rankings
            title="Most Creative"
            color="#7CE3F1"
            data={creativeArray}
          />
          <Rankings title="???? Drawing" color="#FD7070" data={weirdArray} />
        </RankingsContainer>
      </ResultsContainer>
    </FullWidthContainer>
  );
};

const ResultsContainer = styled(Container)`
  flex-direction: row;
  align-items: flex-start;
  overflow-y: scroll;
`;

const RankingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
  flex: 1;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
`;

export default Results;
