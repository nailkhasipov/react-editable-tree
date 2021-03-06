import {
  State,
  ListActionTypes,
  CHANGE_LIST_ITEM_VALUE,
  ADD_LIST_ITEM,
  ADD_LIST
} from "./types";

export const reducer = (state: State, action: ListActionTypes) => {
  switch (action.type) {
    case CHANGE_LIST_ITEM_VALUE:
      return changeListitemValue(
        state.list,
        action.payload.position,
        action.payload.value
      );
    case ADD_LIST_ITEM:
      return addListItem(state.list, action.position);
    case ADD_LIST:
      return addList(state.list, action.position);
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
      currentList = currentList[listArray[i]].rest;
    }
  }

  currentList[listItemIndex].value = value;

  return { list: list };
};

const addListItem = (list: any, position: any) => {
  let currentList = list;
  const listArray = position.split(".");
  listArray.shift();
  const listItemIndex = listArray.pop();

  if (listArray.length > 0) {
    for (let i = 0; i < listArray.length; i++) {
      currentList = currentList[listArray[i]].rest;
    }
  }

  currentList.splice(listItemIndex + 1, 0, { value: "", rest: null });

  return { list: list };
};

const addList = (list: any, position: any) => {
  let currentList = list;
  const listArray = position.split(".");
  listArray.shift();
  const listItemIndex = listArray.pop();

  if (listArray.length > 0) {
    for (let i = 0; i < listArray.length; i++) {
      currentList = currentList[listArray[i]].rest;
    }
  }

  currentList[listItemIndex].rest = [{ value: "", rest: null }];

  return { list: list };
};

const getListAndIndexAtPosition = (list: any, position: any) => {
  let currentList = list;
  const listArray = position.split(".");
  listArray.shift();
  const listItemIndex = listArray.pop();

  if (listArray.length > 0) {
    for (let i = 0; i < listArray.length; i++) {
      currentList = currentList[listArray[i]].rest;
    }
  }

  return { currentList, listItemIndex };
};
