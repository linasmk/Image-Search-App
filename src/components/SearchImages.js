/* ========= App Dependencies ============= */
import React, { useEffect, useState, useRef } from "react";
import { UnsplashAccessKey } from "../../accessKey";
import Unsplash, { toJson } from "unsplash-js";
import { cl } from "../utils";
/* =========== Redux ============== */
import { connect } from "react-redux";
import { addSavedQuery } from "../actions/savedQueries";
import recentQueryFirst from "../selectors/recentQueryFirst";

/* ========= Components =============== */
import SavedQueryItem from "./SavedQueryItem";
import Loader from "./Loader";
/* ========= Code ============= */
export const SearchImages = (props) => {
  // State hooks
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

  // Functions
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
          cl(json.results);
        }
      });
  };
  const updatePhotos = async (pageNumber) => {
    UnsplashAccessKey.search
      .photos(query, pageNumber, 10)
      .then(toJson)
      .then((json) => {
        setBottomLoader(false);
        setImages([...images, ...json.results]);
        cl(...json.results);
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
      props.addSavedQuery(query);
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
  return (
    <article className="search-images">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder='Use keywords, ex: "phone"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={focusOnSearch}
          className="search-form__input"
        />
        <button type="submit" className="search-form__button">
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
      <section className="saved-queries">
        <div className="saved-queries__wrapper">
          {props.savedQueries.map((savedQuery) => (
            <SavedQueryItem
              key={savedQuery.id}
              query={query}
              onClick={handleChildQuery}
              {...savedQuery}
            />
          ))}
        </div>
      </section>
      {topLoader ? (
        <Loader display="block" />
      ) : (
        <section className="card-list">
          {noResultsError ? (
            <section className="no-results">
              <h3 className="no-results__warning">
                Your search keyword did not return any results!
              </h3>
            </section>
          ) : (
            images.map((image, index) => (
              <div className="card" key={index}>
                <img
                  className="card--image"
                  alt={image.alt_description}
                  src={image.urls.small}
                  width="50%"
                  height="50%"></img>
              </div>
            ))
          )}
        </section>
      )}
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
            display="none"
            style={
              images.length === 0 ? { display: "none" } : { display: "block" }
            }
            className="load-more__btn"
            onClick={loadMore}
            disabled={images.length === imagesTotal ? true : false}>
            Load more
          </button>
        </div>
      </section>
    </article>
  );
};

const mapStateToProps = (state, props) => {
  let compareProps = ["name"];
  return {
    //savedQueries: state.savedQueries,
    savedQueries: recentQueryFirst(state.savedQueries, compareProps),
  };
};
const mapDispatchToProps = (dispatch) => ({
  addSavedQuery: (name) => dispatch(addSavedQuery({ name })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchImages);
