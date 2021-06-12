import React from "react";
import styled from "styled-components";

const PlayerList = (props) => {
  const players = props.players;
  return (
    <List>
      {players &&
        players.map((value, index) => {
          return <ListItem key={index}>{value.name}</ListItem>;
        })}
    </List>
  );
};

const List = styled.ol`
  padding-inline-start: 40px;
  max-height: 250px;
  overflow-y: scroll;
  width: 75%;
  max-width: 90%;
  background-color: #f0f0f0;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  min-height: 30%;
`;

const ListItem = styled.li`
  font-size: 1.5em;
`;

export default PlayerList;
