import { ADD_WORD, RETRIEVE_WORDS } from "../actions/type";

const initialState = [];

function wordReducer(words = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_WORD:
      return [...words, payload];
    case RETRIEVE_WORDS:
      return payload;
    default:
      return words;
  }
}
export default wordReducer;
