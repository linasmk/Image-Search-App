/* ===== Redux ===== */
import { connect } from "react-redux";
import { addSavedQuery } from "../actions/savedQueries";
/* ====== Components ===== */
import SearchImagesComponent from "../components/SearchImages";
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addSavedQuery: (name) => dispatch(addSavedQuery({ name })),
});

export const SearchImages = connect(
  () => ({}),
  mapDispatchToProps,
)(SearchImagesComponent);
