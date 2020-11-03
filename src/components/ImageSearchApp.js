/* ========= App Dependencies ============= */
import React from "react";
/* ========= Components ============= */
import Header from "./Header";
import SearchImages from "./SearchImages";
import Footer from "./Footer";
/* ========= Code ============= */
const ImageSearchApp = () => (
  <div className="image-search-app">
    <Header />
    <SearchImages />
    <Footer />
  </div>
);
export default ImageSearchApp;
