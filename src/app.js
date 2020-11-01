/* ========= App Dependencies ============= */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
/* =========== Redux ================== */
import store from "./store/configureStore";
/* ========== Styles and Components ========== */
import "normalize.css";
import "./styles/styles.scss";
/* =========== Components ============== */
import ImageSearchApp from "./components/ImageSearchApp";
/* =========== Code ============== */
const root = document.getElementById("app");
const jsx = <Provider store={store}><ImageSearchApp /></Provider>

ReactDOM.render(jsx, root);