import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      const newItems = state.items.concat([action.payload]);
      return {
        ...state,
        items: newItems
      };
    default:
      return state;
  }
};
