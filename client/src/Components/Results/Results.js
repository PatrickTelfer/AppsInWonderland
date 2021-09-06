import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../Context/socket";
import Rankings from "./Rankings";
import { Flex, Heading } from "@chakra-ui/react";

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
    <Flex
      p="4"
      m="2"
      minH="lg"
      shadow="lg"
      textAlign="center"
      flexDirection="column"
    >
      <Heading mb={2}>Final Results!</Heading>

      <Flex textAlign="center" flexWrap="wrap">
        <Rankings title="Best Drawing" color="#67e9a3" data={bestArray} />
        <Rankings title="Most Creative" color="#7CE3F1" data={creativeArray} />
        <Rankings title="???? Drawing" color="#FD7070" data={weirdArray} />
      </Flex>
    </Flex>
  );
};

export default Results;
