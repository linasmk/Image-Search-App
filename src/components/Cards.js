/* ========= App Dependencies ============= */
import React, { useEffect, useState, useRef } from "react";
import { cl } from "../utils";
/* ========= Components =============== */
import Loader from "./Loader";
/* ========= Code ============= */

export const Cards = (props) => {
  return (
    <div>
      {props.topLoader ? (
        <Loader display="block" />
      ) : (
        <section className="card-list">
          {props.noResultsError ? (
            <section className="no-results">
              <h3 className="no-results__warning">
                Your search keyword did not return any results!
              </h3>
            </section>
          ) : (
            props.images.map((image, index) => (
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
    </div>
  );
};
export default Cards;
