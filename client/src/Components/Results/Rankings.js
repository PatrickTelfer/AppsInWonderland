import React from "react";
import styled from "styled-components";

const Rankings = (props) => {
  const { title, data, color } = props;
  return (
    <RankingsHolder>
      <StyledTitle style={{ backgroundColor: color }}>{title}</StyledTitle>
      <List>
        {data.map((value, index) => {
          return (
            <ListItem key={index}>
              {value.name} <span style={{ color: "red" }}>({value.value})</span>
            </ListItem>
          );
        })}
      </List>
    </RankingsHolder>
  );
};

const RankingsHolder = styled.div`
  flex: 1;
  margin: 5px;
  display: flex;
  flex-direction: column;
  min-width: 250px;
`;

const List = styled.ul`
  margin: 0;
  padding-inline-start: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const StyledTitle = styled.div`
  background: #67e9a3;
  border-radius: 4px;
  margin-bottom: 0.4em;
  width: calc(100% - 40px);
  padding: 0.5em;
  border: none;
`;

export default Rankings;
