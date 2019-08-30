import {
  State,
  ListItemInterface,
  ListActionTypes,
  CHANGE_LIST_ITEM_VALUE,
  ADD_LIST_ITEM,
  ADD_LIST
} from "./types";

const newListItem: ListItemInterface = { value: "", rest: null };

export const reducer = (state: State, action: ListActionTypes) => {
  switch (action.type) {
    case CHANGE_LIST_ITEM_VALUE:
      return changeListitemValue(
        state.list,
        action.payload.position,
        action.payload.value
      );
    case ADD_LIST_ITEM:
      return { list: [...state.list, newListItem] };
    case ADD_LIST:
      return { list: [...state.list] };
    default:
      throw new Error();
  }
};

const changeListitemValue = (list: any, position: any, value: string) => {
  let currentList = list;
  const listArray = position.split(".");
  listArray.shift();
  const listItemIndex = listArray.pop();

  if (listArray.length > 0) {
    for (let i = 0; i < listArray.length; i++) {
      currentList = list[listArray[i]].rest;
    }
  }

  currentList[listItemIndex].value = value;

  return { list: list };
};
