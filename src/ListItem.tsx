import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type ListItemProps = {
  value: string;
  position: string;
  changeListItemValue: Function;
  addListItem: Function;
  addList: Function;
};

export const ListItem: React.FC<ListItemProps> = ({
  value,
  position,
  changeListItemValue,
  addListItem,
  addList
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <StyledListItem>
      <ListItemInput
        ref={inputEl}
        value={value}
        onChange={event => changeListItemValue(position, event.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            event.preventDefault();
            addListItem(position);
          }
        }}
        onKeyDown={event => {
          if (event.key === "Tab") {
            event.preventDefault();
            addList(position);
          }
        }}
      />
    </StyledListItem>
  );
};

const StyledListItem = styled.li``;

const ListItemInput = styled.input`
  border: none;
  outline: none;
`;
