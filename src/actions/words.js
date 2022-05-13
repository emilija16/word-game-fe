import { ADD_WORD, RETRIEVE_WORDS } from "./type";
import WordGameService from "../services/wordGame.service";
export const addWord = (word) => async (dispatch) => {
  try {
    const res = await WordGameService.create({ word });
    dispatch({
      type: ADD_WORD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveWords = () => async (dispatch) => {
  try {
    const res = await WordGameService.getAll();
    dispatch({
      type: RETRIEVE_WORDS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
