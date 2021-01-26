/* ========= Imports ============= */
import { GET_IMAGES } from "@consts/constants";

const imagesReducerDefaultState = [];
export default (state = imagesReducerDefaultState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      //const images = action.img.map((img) => img);
      return [...state, ...action.img];
    default:
      return state;
  }
};
