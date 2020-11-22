import React from "react";
import ReactDOM from "react-dom";

import CustomApp from "./CustomApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CustomApp />
  </React.StrictMode>,
  rootElement
);
