/* ========= App Dependencies ============= */
import React, { useState } from "react";
import PropTypes from "prop-types";
/* =========== Redux ============== */

/* ========= Components =============== */
import { SavedQueryItem } from "@cont/SavedQueryItem";
/* ========= Code ============= */
export const SavedQueries = ({ savedQueries, onClick }) => {
  const [sliceSavedQueries, setSliceSavedQueries] = useState(10);
  const [queriesListOpen, setQueriesListOpen] = useState(false);

  const toggleQueriesList = () => {
    if (queriesListOpen) {
      setSliceSavedQueries(10);
    } else {
      setSliceSavedQueries(savedQueries.length);
    }
    setQueriesListOpen(!queriesListOpen);
  };
  return (
    <section className="saved-queries">
      <div className="saved-queries__wrapper">
        {savedQueries
          .map((savedQuery) => (
            <SavedQueryItem
              key={savedQuery.id}
              id={savedQuery.id}
              name={savedQuery.name}
              onClick={onClick}
            />
          ))
          .slice(0, sliceSavedQueries)}
        <div className="saved-queries__btn-wrapper">
          <button
            className="saved-queries__btn--show"
            type="button"
            style={
              savedQueries.length > 10
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
SavedQueries.defaultProps = {
  onClick: undefined
};
SavedQueries.propTypes = {
  savedQueries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};
export default SavedQueries;
