/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { cl } from "../utils";
/* =========== Redux ============== */
import { connect } from "react-redux";
import latestQueryFirst from "../selectors/latestQueryFirst";
/* ========= Components =============== */
import SavedQueryItem from "./SavedQueryItem";
/* ========= Code ============= */
export const SavedQueries = (props) => {
  const [sliceSavedQueries, setSliceSavedQueries] = useState(10);
  const [queriesListOpen, setQueriesListOpen] = useState(false);

  const toggleQueriesList = () => {
    if (queriesListOpen) {
      setSliceSavedQueries(10);
    } else {
      setSliceSavedQueries(props.savedQueries.length);
    }
    setQueriesListOpen(!queriesListOpen);
  };
  return (
    <section className="saved-queries">
      <div className="saved-queries__wrapper">
        {props.savedQueries
          .map((savedQuery) => (
            <SavedQueryItem
              key={savedQuery.id}
              query={props.query}
              onClick={props.onClick}
              {...savedQuery}
            />
          ))
          .slice(0, sliceSavedQueries)}
        <div className="saved-queries__btn-wrapper">
          <button
            className="saved-queries__btn--show"
            style={
              props.savedQueries.length > 10
                ? { display: "block" }
                : { display: "none" }
            }
            onClick={toggleQueriesList}>
            {queriesListOpen ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  savedQueries: latestQueryFirst(state.savedQueries),
});
export default connect(mapStateToProps)(SavedQueries);
