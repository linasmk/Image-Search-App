/* ===== Redux ===== */
import { connect } from "react-redux";
import { addSavedQuery, getImages } from "@actions/action-creators";
/* ====== Components ===== */
import SearchImagesComponent from "@comp/SearchImages";
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addSavedQuery: (name) => dispatch(addSavedQuery({ name })),
  getImages: (img) => dispatch(getImages(img))
});

export const SearchImages = connect(
  () => ({}),
  mapDispatchToProps
)(SearchImagesComponent);
