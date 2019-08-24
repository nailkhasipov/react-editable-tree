import { State } from "./types";

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "addListItem":
      return state;
    case "addList":
      return state;
    default:
      throw new Error();
  }
};
