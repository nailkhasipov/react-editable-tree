import React, { useState } from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";

type ListProps = {
  list: Array<object>;
  dispatch: Function;
};

export const List: React.FC<ListProps> = ({ list, dispatch }) => {
  return (
    <StyledList>
      {list.map((listItem: any, index: number) => (
        <ListItem value={listItem.value} dispatch={dispatch} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul``;
