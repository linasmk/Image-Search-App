/* ========= App Dependencies ============= */
import Unsplash, { toJson } from "unsplash-js";
/* ============================================
=========== ACCESS KEY  ================
================================================= */
const API_KEY = process.env.API_KEY;
export const UnsplashAccessKey = new Unsplash({
  accessKey: API_KEY,
});
