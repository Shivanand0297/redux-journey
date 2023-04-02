import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

// our store
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // providing store to whole app
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
