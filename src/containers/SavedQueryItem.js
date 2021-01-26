/* ===== Redux ===== */
import { connect } from "react-redux";
import { removeSavedQuery } from "@actions/action-creators";
/* ====== Components ===== */
import SavedQueryItemComponent from "@comp/SavedQueryItem";
/* ========= Code ========= */

export const mapDispatchToProps = (dispatch) => ({
  removeSavedQuery: (id) => dispatch(removeSavedQuery(id))
});

export const SavedQueryItem = connect(
  null,
  mapDispatchToProps
)(SavedQueryItemComponent);
export default SavedQueryItem;
