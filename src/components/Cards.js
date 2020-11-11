/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { cl } from "../utils";
/* ========= Components =============== */
import CardModal from "./CardModal";
import Loader from "./Loader";
/* ========= Code ============= */

export const Cards = (props) => {
  const [cardModalId, setCardModalId] = useState(undefined);
  const openCardModal = (id) => setCardModalId(id);
  const closeCardModal = () => setCardModalId(undefined);

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
                  onClick={() => openCardModal(image.id)}
                  alt={image.alt_description}
                  src={image.urls.small}
                  width="50%"
                  height="50%"></img>
                <CardModal
                  openCardModal={cardModalId === image.id}
                  closeCardModal={closeCardModal}
                  {...image}
                />
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
};
export default Cards;
