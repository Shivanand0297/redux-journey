import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// importing redux store
import { store } from "./store";

// importing redux provider
import { Provider } from "react-redux";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
