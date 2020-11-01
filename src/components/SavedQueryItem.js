/* ========= App Dependencies ============= */
import React, { useState} from "react";
import {cl} from "../utils";
/* =========== Redux ============== */
import { connect } from "react-redux";
import { removeSavedQuery } from "../actions/savedQueries";

/* ========= Code ============= */
const SavedQueryItem = (props) => {
  /* ========== Functions ========== */
  const removeQuery = (e) => {
    props.removeSavedQuery({id: props.id})
  }
  function handleChildQuery(e) {
    props.onClick(e.target.textContent);
  }
  /* ========== Content ========== */
  return (
    
      <div  className="saved-queries__item">
        <p className="saved-queries__txt" onClick={handleChildQuery}>{props.name}</p>
        <button className="saved-queries__btn" onClick={removeQuery}>&#88;</button>
      </div>
  )
}
const mapStateToProps = (state, props) => {
  return {
    savedQueries: state.savedQueries.find((savedQuery) => savedQuery.id === props.id),
  };
};
const mapsDispatchToProps = (dispatch) => ({
  removeSavedQuery: (id) => dispatch(removeSavedQuery(id))
});
export default connect(mapStateToProps, mapsDispatchToProps)(SavedQueryItem);