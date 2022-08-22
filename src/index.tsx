import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Layout } from "./components/Layout";
import "./styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
