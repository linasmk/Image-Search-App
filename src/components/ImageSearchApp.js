/* ========= App Dependencies ============= */
import React from "react";
/* ========= Components ============= */
import Header from "@comp/Header";
import { SearchImages } from "@cont/SearchImages";
import Footer from "@comp/Footer";
/* ========= Code ============= */
const ImageSearchApp = () => (
  <div className="image-search-app">
    <Header />
    <SearchImages />
    <Footer />
  </div>
);
export default ImageSearchApp;
