/* ========= Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
/* ========= Imports ============= */
import { ADD_SAVED_QUERY, REMOVE_SAVED_QUERY } from "@consts/constants";
/* =================================================
=========== ACTION CREATORS: SAVED QUERIES ========
================================================= */

export const addSavedQuery = ({ name = "" } = {}) => ({
  type: ADD_SAVED_QUERY,
  savedQuery: {
    id: uuidv4(),
    name
  }
});

export const removeSavedQuery = ({ id } = {}) => ({
  type: REMOVE_SAVED_QUERY,
  id
});
