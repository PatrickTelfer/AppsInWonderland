import React from "react";
import { List, ListItem } from "@chakra-ui/react";

const PlayerList = (props) => {
  const players = props.players;
  return (
    <List bgColor="gray.200" minH="3xs" w="xs" mt={4} p={4} shadow="lg">
      {players &&
        players.map((value, index) => {
          return <ListItem key={index}>{value.name}</ListItem>;
        })}
    </List>
  );
};

export default PlayerList;
