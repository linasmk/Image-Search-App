/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import { cl } from "../utils";
/* ========= Code ============= */

export const CardModal = (props) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FAEBD7";
  }
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
      <article className="card-modal__content">
        <div className="card-modal__topbar">
          <VscChromeClose
            className="card-modal__close-btn"
            onClick={props.closeCardModal}
          />
        </div>
        <div className="card-modal__description-wrapper">
          <h2 className="card-modal__description">{props.alt_description}</h2>
        </div>
        <div className="card-modal__main">
          <img className="card-modal__img" src={props.urls.full}></img>
        </div>
      </article>
    </Modal>
  );
};
export default CardModal;
