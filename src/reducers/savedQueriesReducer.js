/* ========= Imports ============= */
import { ADD_SAVED_QUERY } from "@consts/constants";
/* =================================================
=========== SAVED QUERIES REDUCER ================
================================================= */
const savedQueriesReducerDefaultState = [];
export default (state = savedQueriesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_SAVED_QUERY:
      if (state.some((item) => item.name === action.savedQuery.name)) {
        return [...state];
      }
      return [...state, action.savedQuery];

    // ======================================
    case "REMOVE_SAVED_QUERY":
      return state.filter((savedQuery) => savedQuery.id !== action.id);
    default:
      return state;
  }
};
