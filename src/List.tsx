import React from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";

type ListProps = {
  list: Array<object>;
  addListItem: Function;
  addList: Function;
};

export const List: React.FC<ListProps> = ({ list, addListItem, addList }) => {
  return (
    <StyledList>
      {list.map((listItem: any, index: number) => (
        <ListItem
          key={index}
          value={listItem.value}
          addListItem={addListItem}
          addList={addList}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul``;
