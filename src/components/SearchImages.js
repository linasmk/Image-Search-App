/* ========= App Dependencies ============= */
import React, {useEffect, useState, useRef} from "react";
import {UnsplashAccessKey} from "../store/accessKey";
import Unsplash, { toJson } from "unsplash-js";
import {cl} from "../utils";
/* =========== Redux ============== */
import { connect } from "react-redux";
import { addSavedQuery } from "../actions/savedQueries";
/* ========= Components =============== */
import SavedQueryItem from "./SavedQueryItem";
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
  const focusOnSearch = useRef(null);
  
  const searchPhotos = async (e) => {
      e.preventDefault();
      UnsplashAccessKey.search
      .photos(query, 1, 6)
      .then(toJson)
      .then((json) => {
        console.log(json.total);
        setImagesTotal(json.total);
        if(json.results <= 0) {
          setNoResultsError(true);
        } else {
          setNoResultsError(false);
          setImages(json.results);
          cl(json.results);
        }  
      });
  };
  
  const updatePhotos = async (pageNumber) => {
      UnsplashAccessKey.search
      .photos(query, pageNumber, 6)
      .then(toJson)
      .then((json) => {
        setImages([...images, ...json.results]);
      });
  };
 const handleSubmit = (e) => {
  if(query.length === 0) {
    e.preventDefault();
    setInputError(true);
  } else if(query.length > 50) {
    e.preventDefault();
    setInputError(false);
    setExcessInputError(true);
  }
  else {
    setInputError(false);
    setExcessInputError(false);
    searchPhotos(e);
    props.addSavedQuery(query);
    // setQuery("");
  }
 }
//  const handleOnChange = () => {

//  }
useEffect(() => {
    updatePhotos(pageNumber);
  }, [pageNumber]);
  
  const loadMore = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }
  // const pageOver = useRef();
  
function handleChildQuery(newQuery) {
    setQuery(newQuery);
    focusOnSearch.current.focus()
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
        <button type="submit" className="search-form__button">Search</button>
        <span className="search-form__warning" style={inputError || excessInputError ? {display: "block"} : {display: "none"}}>{inputError ? "The search field should not stay empty!" : "" || excessInputError ? "50 characters max length exceeded. Use concise keywords. This is not a poetry app!" : ""}</span>
      </form>
      
      <section className="saved-queries">
        <div className="saved-queries__wrapper">
          {props.savedQueries.map((savedQuery) => <SavedQueryItem key={savedQuery.id} query={query} onClick={handleChildQuery} {...savedQuery} />)}
        </div>
      </section>
      
      <section className="card-list">
        {noResultsError ? <section className="no-results"><h3 className="no-results__warning">Your search keyword "{query}" did not return any results!</h3></section> : images.map((image, index) => <div className="card" key={index}>
        <img
              className="card--image"
              alt={image.alt_description}
              src={image.urls.small}
              width="50%"
              height="50%"
              ></img>

        </div> )}
       
      </section>
      <section className="load-more">
        <p>Currently showing <span>{images.length}</span>{images.length > 1 ? " results" : " result"} out of {imagesTotal}</p>
        <button style={images.length === 0 ? {display: "none"} : {display: "block"}} className="load-more__btn" onClick={loadMore} disabled={images.length === imagesTotal ? true : false}>Load more</button>
      </section>
      
    </article>
  )
}


const mapStateToProps = (state, props) => {
  return {
    savedQueries: state.savedQueries  
  };
};
const mapDispatchToProps = (dispatch) => ({
  addSavedQuery: (name) => dispatch(addSavedQuery({name})),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchImages);