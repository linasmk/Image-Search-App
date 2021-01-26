/* ===== Redux ===== */
import { connect } from "react-redux";
import latestQueryFirst from "@selectors/latestQueryFirst";

/* ====== Components ===== */
import SavedQueriesComponent from "@comp/SavedQueries";

/* ========= Code ========= */
export const SavedQueries = connect((state) => ({
  savedQueries: latestQueryFirst(state.savedQueries)
}))(SavedQueriesComponent);
