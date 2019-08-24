import React from "react";
import styled from "styled-components";

import { ListItemInterface } from "./types";
import { ListItem } from "./ListItem";

type ListProps = {
  list: Array<ListItemInterface>;
  changeListItemValue: Function;
  addListItem: Function;
  addList: Function;
};

export const List: React.FC<ListProps> = ({
  list,
  changeListItemValue,
  addListItem,
  addList
}) => {
  return (
    <StyledList>
      {list.map((listItem: ListItemInterface, index: number) => (
        <React.Fragment key={index}>
          <ListItem
            position={index.toString()}
            value={listItem.value}
            changeListItemValue={changeListItemValue}
            addListItem={addListItem}
            addList={addList}
          />
          {listItem.rest && (
            <List
              list={listItem.rest}
              changeListItemValue={changeListItemValue}
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
