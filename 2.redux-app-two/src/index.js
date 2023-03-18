import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App.js"

// Providing store to all the components
import { Provider } from "react-redux"
import { store } from "./store/index.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <App/>
  </Provider>
)