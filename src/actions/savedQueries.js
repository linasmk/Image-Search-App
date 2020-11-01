/* ========= Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
/* ========= Imports ============= */
import {ADD_SAVED_QUERY, REMOVE_SAVED_QUERY} from "../actions/constants";
/* =================================================
=========== ACTION CREATORS: SAVED QUERIES ========
================================================= */
//ADD_SAVED_QUERY
export const addSavedQuery = ({
  name = ""
} = {}) => ({
  type: ADD_SAVED_QUERY,
  savedQuery: {
    id: uuidv4(),
    name
  },
});

//REMOVE_SAVED_QUERY
export const removeSavedQuery = ({ id } = {}) => ({
  type: REMOVE_SAVED_QUERY,
  id,
});

