/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import { cl } from "../utils";
/* ========= Code ============= */

export const CardModal = (props) => {
  const afterOpenModal = () => (subtitle.style.color = "#FAEBD7");
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Modal
      isOpen={props.openCardModal}
      onRequestClose={props.closeCardModal}
      afterOpenModal={afterOpenModal}
      contentLabel={props.alt_description}
      closeTimeoutMS={800}
      className="card-modal"
      key={props.id}
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
          onClick={props.closeCardModal}
        />
        <article className="card-modal__content">
          <div className="card-modal__topbar"></div>
          <section className="card-modal__description-wrapper">
            <h2 className="card-modal__description">
              {props.alt_description != null
                ? capitalizeFirstLetter(props.alt_description)
                : ""}
            </h2>
          </section>
          <section className="card-modal__main">
            <img className="card-modal__img" src={props.urls.full}></img>
          </section>
          <section className="card-modal__info-bar">
            <p className="card-modal__data">
              {props.likes != null ? `${props.likes} ` : 0}
              <span className="card-modal__text">Likes</span>
            </p>
            <p className="card-modal__data">
              <span className="card-modal__text">by </span>
              {props.user.first_name !== null
                ? `${props.user.first_name}`
                : `Uknown` + ` ` + props.user.last_name != null
                ? ` ${props.user.last_name}`
                : `Uknown`}
            </p>
          </section>
          <section className="card-modal__btn-bar">
            <a
              className="card-modal__btn--download"
              href={`${props.links.download}?force=true`}
              download
              target="_blank">
              Download
            </a>
          </section>
        </article>
      </div>
    </Modal>
  );
};
export default CardModal;
