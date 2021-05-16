import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("ACTION TYPE = ", action.type);
    next(action);
  };
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<App store={store} />, document.getElementById("root"));
