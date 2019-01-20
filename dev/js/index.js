import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
// step 1 - create store
// create a reducer whhich is an exported function with an array of objects
// then combineReducers() in an index.js file inside /reducers which imports
// all of the reducers (functions)
// Then const store = createStore(allReducers) inside main index.js react
import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
