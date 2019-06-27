import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Components/App/App.css";
import PreApp from "./Components/PreApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<PreApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
