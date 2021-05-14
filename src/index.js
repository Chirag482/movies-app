import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./components/App";
import "./index.css";
import movies from "./reducers";

const store = createStore(movies);

ReactDOM.render(<App />, document.getElementById("root"));
