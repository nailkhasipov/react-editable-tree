import React from "react";
import styled from "styled-components";

import { ListItemInterface } from "./types";
import { ListItem } from "./ListItem";

type ListProps = {
  list: Array<ListItemInterface>;
  position: string;
  changeListItemValue: Function;
  addListItem: Function;
  addList: Function;
};

export const List: React.FC<ListProps> = ({
  list,
  position,
  changeListItemValue,
  addListItem,
  addList
}) => {
  return (
    <StyledList>
      {list.map((listItem: ListItemInterface, index: number) => (
        <React.Fragment key={index}>
          <ListItem
            position={`${position}.${index}`}
            value={listItem.value}
            changeListItemValue={changeListItemValue}
            addListItem={addListItem}
            addList={addList}
          />
          {listItem.rest && (
            <List
              list={listItem.rest}
              position={`${position}.${index}`}
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
