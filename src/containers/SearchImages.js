/* ===== Redux ===== */
import { connect } from "react-redux";
import { addSavedQuery } from "@actions/savedQueries";
/* ====== Components ===== */
import SearchImagesComponent from "@comp/SearchImages";
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addSavedQuery: (name) => dispatch(addSavedQuery({ name })),
});

export const SearchImages = connect(
  () => ({}),
  mapDispatchToProps,
)(SearchImagesComponent);
