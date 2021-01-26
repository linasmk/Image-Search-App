import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "@reducers/savedQueriesReducer";
import reduxPromise from "redux-promise";

const Root = ({ children, initialState = {} }) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;

Root.defaultProps = {
  children: undefined,
  initialState: undefined
};
Root.propTypes = {
  // eslint-disable-next-line
  children: PropTypes.object,
  initialState: PropTypes.func
};
