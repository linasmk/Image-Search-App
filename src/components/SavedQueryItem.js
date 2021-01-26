/* ========= App Dependencies ============= */
import React from "react";
import PropTypes from "prop-types";

/* ========= Code ============= */
export const SavedQueryItem = ({ removeSavedQuery, onClick, name, id }) => {
  /* ========== Functions ========== */
  const removeQuery = () => removeSavedQuery({ id });

  const handleChildQuery = (e) => {
    onClick(e.target.textContent);
  };

  /* ========== Content ========== */
  return (
    <div className="saved-queries__item">
      <p
        className="saved-queries__txt"
        role="presentation"
        onClick={handleChildQuery}>
        {name}
      </p>
      <button
        type="button"
        className="saved-queries__btn--remove"
        onClick={removeQuery}>
        &#88;
      </button>
    </div>
  );
};
SavedQueryItem.defaultProps = {
  onClick: undefined,
  removeSavedQuery: undefined
};
SavedQueryItem.propTypes = {
  removeSavedQuery: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default SavedQueryItem;
