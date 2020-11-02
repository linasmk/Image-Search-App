/* ========= App Dependencies ============= */
import React from "react";
/* ========= Code ============= */
const Loader = (props) => {
  return (
    <div className="loader-box">
      <div
        style={
          props.bottomLoader ? { display: "block" } : { display: props.display }
        }
        className="loader"></div>
    </div>
  );
};

export default Loader;
