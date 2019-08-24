export const CHANGE_LIST_ITEM_VALUE = "CHANGE_LIST_ITEM_VALUE";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const ADD_LIST = "ADD_LIST";

export interface ListItemInterface {
  value: string;
  rest: null | Array<ListItemInterface>;
}

export type State = {
  list: Array<ListItemInterface>;
};

interface ChangeListItemValueAction {
  type: typeof CHANGE_LIST_ITEM_VALUE;
  payload: {
    position: string;
    value: string;
  };
}

interface AddListItemAction {
  type: typeof ADD_LIST_ITEM;
  position: string;
}

interface AddListAction {
  type: typeof ADD_LIST;
  position: string;
}

export type ListActionTypes =
  | ChangeListItemValueAction
  | AddListItemAction
  | AddListAction;
