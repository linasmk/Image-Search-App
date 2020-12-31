/* ========= App Dependencies ============= */
import React, { useState } from "react";
import PropTypes from "prop-types";
/* ========= Components =============== */
import CardModal from "./CardModal";
import Loader from "./Loader";
/* ========= Code ============= */

const Cards = ({ images, topLoader, noResultsError }) => {
  const [cardModalId, setCardModalId] = useState(undefined);
  const openCardModal = (id) => setCardModalId(id);
  const closeCardModal = () => setCardModalId(undefined);

  return (
    <div>
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
            images.map((image) => (
              <div className="card" key={image.id}>
                <img
                  role="presentation"
                  className="card--image"
                  onClick={() => openCardModal(image.id)}
                  alt={image.alt_description}
                  src={image.urls.small}
                  width="50%"
                  height="50%"
                />
                <CardModal
                  openCardModal={cardModalId === image.id}
                  closeCardModal={closeCardModal}
                  altDescription={image.alt_description}
                  imageID={image.id}
                  likes={image.likes}
                  urlsFull={image.urls.full}
                  firstName={image.user.first_name}
                  lastName={image.user.last_name}
                  download={image.links.download}
                />
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
};
Cards.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  topLoader: PropTypes.bool.isRequired,
  noResultsError: PropTypes.bool.isRequired,
};
export default Cards;
