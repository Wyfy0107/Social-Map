import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
=======

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
>>>>>>> dd008e3ddf75b58afbaf9458d23a26e49e243729
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
