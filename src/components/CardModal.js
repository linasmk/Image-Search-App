/* ========= App Dependencies ============= */
import React from "react";
import PropTypes from "prop-types";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
/* ========= Code ============= */

export const CardModal = ({
  openCardModal,
  closeCardModal,
  altDescription,
  imageID,
  likes,
  urlsFull,
  firstName,
  lastName,
  download,
}) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Modal
      isOpen={openCardModal}
      onRequestClose={closeCardModal}
      contentLabel={altDescription}
      closeTimeoutMS={800}
      className="card-modal"
      key={imageID}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, .75)",
        },
        content: {
          color: "lightsteelblue",
        },
      }}
      ariaHideApp={false}>
      <div className="card-modal__content--wrapper">
        <VscChromeClose
          className="card-modal__close-btn"
          onClick={closeCardModal}
        />
        <article className="card-modal__content">
          <div className="card-modal__topbar" />
          <section className="card-modal__description-wrapper">
            <h2 className="card-modal__description">
              {altDescription != null
                ? capitalizeFirstLetter(altDescription)
                : ""}
            </h2>
          </section>
          <section className="card-modal__main">
            <img
              className="card-modal__img"
              alt={altDescription}
              src={urlsFull}
            />
          </section>
          <section className="card-modal__info-bar">
            <p className="card-modal__data">
              {likes != null ? `${likes} ` : 0}
              <span className="card-modal__text">Likes</span>
            </p>
            <p className="card-modal__data">
              <span className="card-modal__text">by </span>
              {firstName !== null ? firstName : `Uknown`}
              <span> </span>
              {lastName !== null ? lastName : `Uknown`}
            </p>
          </section>
          <section className="card-modal__btn-bar">
            <a
              className="card-modal__btn--download"
              href={`${download}?force=true`}
              download
              rel="noreferrer"
              target="_blank">
              Download
            </a>
          </section>
        </article>
      </div>
    </Modal>
  );
};
CardModal.defaultProps = {
  firstName: null,
  lastName: null,
  altDescription: null,
  likes: 0,
};
CardModal.propTypes = {
  openCardModal: PropTypes.bool.isRequired,
  closeCardModal: PropTypes.func.isRequired,
  imageID: PropTypes.string.isRequired,
  urlsFull: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  altDescription: PropTypes.string,
  likes: PropTypes.number,
};
export default CardModal;
