import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";

type ListItemProps = {
  value: string;
  addListItem: Function;
  addList: Function;
};

export const ListItem: React.FC<ListItemProps> = ({
  value,
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
        onKeyPress={event => {
          if (event.key === "Enter") addListItem();
        }}
        onKeyDown={event => {
          if (event.key === "Tab") {
            event.preventDefault();
            addList();
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
