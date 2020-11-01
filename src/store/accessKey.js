/* ========= App Dependencies ============= */
import Unsplash, { toJson } from "unsplash-js";
/* ============================================
=========== ACCESS KEY  ================
================================================= */
export const UnsplashAccessKey = new Unsplash({
  accessKey: process.env.API_KEY
});
