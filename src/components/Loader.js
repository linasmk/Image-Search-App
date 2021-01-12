/* ========= App Dependencies ============= */
import React from "react";
import PropTypes from "prop-types";
/* ========= Code ============= */
export const Loader = ({ bottomLoader, display }) => (
  <div className="loader-box">
    <div
      style={bottomLoader ? { display: "block" } : { display: display }}
      className="loader"
    />
  </div>
);
Loader.defaultProps = {
  bottomLoader: undefined,
  display: undefined
};
Loader.propTypes = {
  bottomLoader: PropTypes.bool,
  display: PropTypes.string
};
export default Loader;
