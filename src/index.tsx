import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <BrowserRouter basename="/goit-react-hw-07-phonebook/">
//     <App />
//   </BrowserRouter>
// );
