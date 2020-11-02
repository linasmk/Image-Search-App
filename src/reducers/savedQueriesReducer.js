/* ========= Imports ============= */
import {ADD_SAVED_QUERY} from "../actions/constants";
/* =================================================
=========== SAVED QUERIES REDUCER ================
================================================= */
const savedQueriesReducerDefaultState = [];
export default (state = savedQueriesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_SAVED_QUERY:
      return [...state, action.savedQuery];
    case "REMOVE_SAVED_QUERY":
      return state.filter((savedQuery) => {
        return savedQuery.id !== action.id;
      });
    default:
      return state;
  }
}

function saveQueries() {
  return {
left: "go"
  }
}