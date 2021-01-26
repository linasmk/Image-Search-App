/* ============= Redux  ============= */
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import savedQueriesReducer from "@reducers/savedQueriesReducer";
import imagesReducer from "@reducers/imagesReducer";
import reduxPromise from "redux-promise";
/* =================================================
=========== STORE CONFIGURATION ================
================================================= */
// localStorage.clear();
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const rootReducer = combineReducers({
  savedQueries: savedQueriesReducer,
  images: imagesReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(reduxPromise))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
