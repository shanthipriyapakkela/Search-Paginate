import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import postsreducer from "./Store/reducer";
import App from "./App";

const reducer = combineReducers({
  root: postsreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
