/* ========= Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
/* ========= Imports ============= */
import { UnsplashAccessKey } from "@root/accessKey";
import Unsplash, { toJson } from "unsplash-js"; // eslint-disable-line no-unused-vars
import {
  ADD_SAVED_QUERY,
  REMOVE_SAVED_QUERY,
  GET_IMAGES
} from "@consts/constants";
/* =================================================
=================== ACTION CREATORS ================
================================================= */
export const getImages = (img) => ({
  type: GET_IMAGES,
  img
});

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
