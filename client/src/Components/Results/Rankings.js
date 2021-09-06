import React from "react";
import { Flex, Text, List, ListItem } from "@chakra-ui/react";

const Rankings = (props) => {
  const { title, data, color } = props;
  return (
    <Flex
      minW="xs"
      flexDirection="column"
      flex="1"
      alignItems="center"
      mt={2}
      mb={2}
    >
      <Text bgColor={color} p="2" borderRadius="md" mb={2} w="80%">
        {title}
      </Text>
      <List>
        {data.map((value, index) => {
          return (
            <ListItem key={index}>
              {index === 0 && " 🥇 "}
              {value.name}{" "}
              <Text display="inline" color="red">
                {" "}
                ({value.value} votes)
              </Text>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default Rankings;
