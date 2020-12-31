/* ===== Redux ===== */
import { connect } from "react-redux";
import { removeSavedQuery } from "../actions/savedQueries";
/* ====== Components ===== */
import SavedQueryItemComponent from "../components/SavedQueryItem";
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  removeSavedQuery: (id) => dispatch(removeSavedQuery(id)),
});

export const SavedQueryItem = connect(
  (state, props) => ({
    savedQueries: state.savedQueries.find(
      (savedQuery) => savedQuery.id === props.id,
    ),
  }),
  mapDispatchToProps,
)(SavedQueryItemComponent);
