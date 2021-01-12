/* ========= App Dependencies ============= */
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Unsplash, { toJson } from "unsplash-js"; // eslint-disable-line no-unused-vars

/* ========= Components =============== */
import { SavedQueries } from "@cont/SavedQueries";
import Cards from "@comp/Cards";
import Loader from "@comp/Loader";

import { UnsplashAccessKey } from "@root/accessKey";

/* ========= Code ============= */
export const SearchImages = ({ addSavedQuery }) => {
  // ================ Hooks ==============
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [imagesTotal, setImagesTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputError, setInputError] = useState(false);
  const [noResultsError, setNoResultsError] = useState(false);
  const [excessInputError, setExcessInputError] = useState(false);
  const [topLoader, setTopLoader] = useState(false);
  const [bottomLoader, setBottomLoader] = useState(false);
  const focusOnSearch = useRef(null);

  // ============ Functions ===============================
  const searchPhotos = async (e) => {
    e.preventDefault();
    setNoResultsError(false);
    UnsplashAccessKey.search
      .photos(query, 1, 10)
      .then(toJson)
      .then((json) => {
        setTopLoader(false);
        setImagesTotal(json.total);
        if (json.results <= 0) {
          setNoResultsError(true);
        } else {
          setImages(json.results);
          console.log(json.results);
        }
      });
  };
  const updatePhotos = async () => {
    UnsplashAccessKey.search
      .photos(query, pageNumber, 10)
      .then(toJson)
      .then((json) => {
        setBottomLoader(false);
        setImages([...images, ...json.results]);
      });
  };
  const handleSubmit = (e) => {
    if (query.length === 0) {
      e.preventDefault();
      setInputError(true);
    } else if (query.length > 50) {
      e.preventDefault();
      setInputError(false);
      setExcessInputError(true);
    } else {
      setInputError(false);
      setExcessInputError(false);
      setTopLoader(true);
      searchPhotos(e);
      addSavedQuery(query);
    }
  };
  useEffect(() => {
    updatePhotos(pageNumber);
  }, [pageNumber]);
  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    setBottomLoader(true);
  };
  function handleChildQuery(newQuery) {
    setQuery(newQuery);
    focusOnSearch.current.focus();
  }
  const clearInputField = () => {
    setQuery("");
    focusOnSearch.current.focus();
  };
  return (
    <article className="search-images">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input--wrapper">
          <input
            type="text"
            name="query"
            placeholder='Use keywords, ex: "phone"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={focusOnSearch}
            className="search-form__input"
          />
          <button
            type="button"
            className="search-form__btn--clear"
            onClick={clearInputField}>
            &#88;
          </button>
        </div>

        <button type="submit" className="search-form__btn--submit">
          Search
        </button>
        <span
          className="search-form__warning"
          style={
            inputError || excessInputError
              ? { display: "block" }
              : { display: "none" }
          }>
          {inputError
            ? "The search field should not stay empty!"
            : "" || excessInputError
            ? "50 characters max length exceeded. Use concise keywords. This is not a poetry app!"
            : ""}
        </span>
      </form>
      <SavedQueries onClick={handleChildQuery} />

      <Cards
        topLoader={topLoader}
        noResultsError={noResultsError}
        images={images}
      />
      <Loader bottomLoader={bottomLoader} display="none" />
      <section className="load-more">
        <div className="load-more__inner-wrapper">
          <p
            style={
              images.length === 0 || noResultsError
                ? { display: "none" }
                : { display: "block" }
            }>
            Currently showing <span>{images.length}</span>
            {images.length > 1 ? " results" : " result"} out of {imagesTotal}
          </p>
          <button
            type="button"
            display="none"
            style={
              images.length === 0 ? { display: "none" } : { display: "block" }
            }
            className="load-more__btn"
            onClick={loadMore}
            disabled={images.length === imagesTotal}>
            Load more
          </button>
        </div>
      </section>
    </article>
  );
};

SearchImages.defaultProps = {
  addSavedQuery: undefined
};
SearchImages.propTypes = {
  addSavedQuery: PropTypes.func
};

export default SearchImages;
