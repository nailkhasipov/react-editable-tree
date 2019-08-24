import React from "react";
import styled from "styled-components";

import { ListItemInterface } from "./types";
import { ListItem } from "./ListItem";

type ListProps = {
  list: Array<ListItemInterface>;
  addListItem: Function;
  addList: Function;
};

export const List: React.FC<ListProps> = ({ list, addListItem, addList }) => {
  return (
    <StyledList>
      {list.map((listItem: ListItemInterface, index: number) => (
        <React.Fragment key={index}>
          <ListItem
            position={index.toString()}
            value={listItem.value}
            addListItem={addListItem}
            addList={addList}
          />
          {listItem.rest && (
            <List
              list={listItem.rest}
              addListItem={addListItem}
              addList={addList}
            />
          )}
        </React.Fragment>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul``;
